/**
 * Zero-Trust Secure Document Management & File Sharing
 * Reusable Centralized Backend API Client (Phase 2)
 */

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 
  (typeof window !== 'undefined' && (window.location.port === '3000' || window.location.port === '5173') ? '/api' : 'http://localhost:8080/api');

const TOKEN_KEY = 'zt_auth_token';
const USER_KEY = 'zt_auth_user';

export const getStoredToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

export const setStoredAuth = (token: string, user: any) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const clearStoredAuth = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};

export const getStoredUser = (): any | null => {
  const user = localStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
};

export class ApiError extends Error {
  status: number;
  data: any;

  constructor(status: number, message: string, data?: any) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  const token = getStoredToken();

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...options.headers,
  };

  if (token) {
    (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
  }

  let response: Response;
  try {
    response = await fetch(url, { ...options, headers });
  } catch (networkError: any) {
    throw new ApiError(0, 'Unable to connect to Zero-Trust backend server at ' + API_BASE_URL + '. Ensure the Spring Boot backend is running.');
  }

  if (response.status === 401) {
    clearStoredAuth();
    // Dispatch custom event so context can handle session expiration
    window.dispatchEvent(new CustomEvent('zt-auth-expired'));
    let errMsg = 'Authentication failed or session token has expired.';
    try {
      const errJson = await response.json();
      if (errJson.message) errMsg = errJson.message;
    } catch (_) {}
    throw new ApiError(401, errMsg);
  }

  if (response.status === 403) {
    let errMsg = 'Zero-Trust Policy Violation: Access Forbidden (Insufficient Clearance).';
    try {
      const errJson = await response.json();
      if (errJson.message) errMsg = errJson.message;
    } catch (_) {}
    throw new ApiError(403, errMsg);
  }

  if (!response.ok) {
    let errMsg = `Request failed with status ${response.status}`;
    let errData = null;
    try {
      errData = await response.json();
      if (errData.message) errMsg = errData.message;
    } catch (_) {}
    throw new ApiError(response.status, errMsg, errData);
  }

  if (response.status === 204) {
    return {} as T;
  }

  return response.json();
}

// 1. Authentication APIs
export const authApi = {
  login: async (email: string, password: string) => {
    return apiRequest<{
      token: string;
      tokenType: string;
      user: {
        id: number;
        email: string;
        fullName: string;
        department: string;
        role: string;
        clearanceLevel: string;
        status: string;
        lastLogin: string;
      };
    }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  register: async (fullName: string, email: string, password: string, departmentName?: string) => {
    return apiRequest<{
      token: string;
      tokenType: string;
      user: any;
    }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ fullName, email, password, departmentName }),
    });
  },

  getMe: async () => {
    return apiRequest<any>('/auth/me', { method: 'GET' });
  },

  logout: async () => {
    try {
      await apiRequest<any>('/auth/logout', { method: 'POST' });
    } finally {
      clearStoredAuth();
    }
  },
};

// 2. Document Metadata APIs
export const documentApi = {
  getDocuments: async (params?: { classification?: string; search?: string; sortBy?: string; sortOrder?: string }) => {
    const query = new URLSearchParams();
    if (params?.classification && params.classification !== 'All') query.append('classification', params.classification);
    if (params?.search) query.append('search', params.search);
    if (params?.sortBy) query.append('sortBy', params.sortBy);
    if (params?.sortOrder) query.append('sortOrder', params.sortOrder);

    const qs = query.toString();
    return apiRequest<any[]>(`/documents${qs ? `?${qs}` : ''}`, { method: 'GET' });
  },

  getDocument: async (id: string) => {
    return apiRequest<any>(`/documents/${id}`, { method: 'GET' });
  },

  createDocument: async (doc: {
    name: string;
    fileType: string;
    fileSize: number;
    sizeFormatted?: string;
    classification: string;
    description?: string;
  }) => {
    return apiRequest<any>('/documents', {
      method: 'POST',
      body: JSON.stringify(doc),
    });
  },

  updateDocument: async (id: string, doc: {
    name?: string;
    classification?: string;
    description?: string;
  }) => {
    return apiRequest<any>(`/documents/${id}`, {
      method: 'PUT',
      body: JSON.stringify(doc),
    });
  },

  deleteDocument: async (id: string) => {
    return apiRequest<{ success: boolean; message: string }>(`/documents/${id}`, {
      method: 'DELETE',
    });
  },
};

// 3. User Management APIs
export const userApi = {
  getUsers: async () => {
    return apiRequest<any[]>('/users', { method: 'GET' });
  },

  getUser: async (id: number) => {
    return apiRequest<any>(`/users/${id}`, { method: 'GET' });
  },

  createUser: async (user: {
    fullName: string;
    email: string;
    password: string;
    departmentName?: string;
    roleName?: string;
    clearanceLevel?: string;
  }) => {
    return apiRequest<any>('/users', {
      method: 'POST',
      body: JSON.stringify(user),
    });
  },

  updateUser: async (id: number, user: {
    fullName?: string;
    departmentName?: string;
    roleName?: string;
    clearanceLevel?: string;
    status?: string;
  }) => {
    return apiRequest<any>(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(user),
    });
  },

  updateStatus: async (id: number, status: string) => {
    return apiRequest<{ success: boolean; message: string }>(`/users/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  },

  deleteUser: async (id: number) => {
    return apiRequest<{ success: boolean; message: string }>(`/users/${id}`, {
      method: 'DELETE',
    });
  },

  getProfile: async () => {
    return apiRequest<any>('/users/profile', { method: 'GET' });
  },

  updateProfile: async (data: { fullName?: string; departmentName?: string }) => {
    return apiRequest<any>('/users/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },
};

// 4. Dashboard Stats API
export const dashboardApi = {
  getStats: async () => {
    return apiRequest<{
      totalDocuments: number;
      sharedDocuments: number;
      recentActivities: number;
      storageStats: {
        usedBytes: number;
        totalBytes: number;
        usedFormatted: string;
        totalFormatted: string;
        percentage: number;
        byCategory: Record<string, number>;
      };
      recentDocuments: any[];
      recentActivitiesList: any[];
    }>('/dashboard/stats', { method: 'GET' });
  },
};

// 5. Security Activity API
export const activityApi = {
  getActivities: async (params?: { query?: string; status?: string; action?: string }) => {
    const query = new URLSearchParams();
    if (params?.query) query.append('query', params.query);
    if (params?.status && params.status !== 'All') query.append('status', params.status);
    if (params?.action && params.action !== 'All') query.append('action', params.action);

    const qs = query.toString();
    return apiRequest<any[]>(`/activities${qs ? `?${qs}` : ''}`, { method: 'GET' });
  },
};

// 6. Google Drive API (Phase: Drive Integration)
export interface GoogleDriveStatus {
  configured: boolean;
  connected: boolean;
  googleEmail?: string;
  connectedAt?: string;
  scope?: string;
  message?: string;
  clientIdPrefix?: string;
}

export const driveApi = {
  getStatus: async (): Promise<GoogleDriveStatus> => {
    return apiRequest<GoogleDriveStatus>('/drive/status', { method: 'GET' });
  },

  getAuthUrl: async (): Promise<{ url: string }> => {
    return apiRequest<{ url: string }>('/drive/auth-url', { method: 'GET' });
  },

  handleCallback: async (code: string, state?: string): Promise<GoogleDriveStatus> => {
    return apiRequest<GoogleDriveStatus>('/drive/callback', {
      method: 'POST',
      body: JSON.stringify({ code, state }),
    });
  },

  disconnect: async (): Promise<{ success: boolean; message: string }> => {
    return apiRequest<{ success: boolean; message: string }>('/drive/disconnect', {
      method: 'POST',
    });
  },

  uploadFile: async (formData: FormData): Promise<any> => {
    const url = `${API_BASE_URL}/drive/upload`;
    const token = getStoredToken();
    const headers: HeadersInit = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: formData,
    });

    if (!response.ok) {
      let errMsg = 'Google Drive upload failed.';
      try {
        const errJson = await response.json();
        if (errJson.message) errMsg = errJson.message;
      } catch (_) {}
      throw new ApiError(response.status, errMsg);
    }

    return response.json();
  },

  downloadDocument: async (documentId: string, filename: string): Promise<void> => {
    const url = `${API_BASE_URL}/drive/download/${documentId}`;
    const token = getStoredToken();
    const headers: HeadersInit = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(url, { method: 'GET', headers });
    if (!response.ok) {
      let errMsg = 'Zero-Trust Download Failed.';
      try {
        const errJson = await response.json();
        if (errJson.message) errMsg = errJson.message;
      } catch (_) {}
      throw new ApiError(response.status, errMsg);
    }

    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(blobUrl);
  },

  shareDocument: async (documentId: string, data: {
    recipientEmail: string;
    recipientName?: string;
    permissions: string;
    expiryDate?: string;
    oneTimeAccess?: boolean;
    maxAccessCount?: number;
  }): Promise<any> => {
    return apiRequest<any>(`/drive/share/${documentId}`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  revokeShare: async (shareId: string): Promise<{ success: boolean; message: string }> => {
    return apiRequest<{ success: boolean; message: string }>(`/drive/shares/${shareId}/revoke`, {
      method: 'POST',
    });
  },

  getSharesByMe: async (): Promise<any[]> => {
    return apiRequest<any[]>('/drive/shares/by-me', { method: 'GET' });
  },

  getSharesWithMe: async (): Promise<any[]> => {
    return apiRequest<any[]>('/drive/shares/with-me', { method: 'GET' });
  },
};
