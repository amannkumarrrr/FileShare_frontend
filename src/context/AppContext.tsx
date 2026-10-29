import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  DocumentItem, 
  SharedWithMeItem, 
  SharedByMeItem, 
  UserItem, 
  SecurityActivityItem, 
  StorageStats 
} from '../types';
import { 
  INITIAL_DOCUMENTS, 
  INITIAL_SHARED_WITH_ME, 
  INITIAL_SHARED_BY_ME, 
  INITIAL_USERS, 
  INITIAL_SECURITY_ACTIVITIES, 
  STORAGE_STATS 
} from '../data/mockData';
import { 
  authApi, 
  documentApi, 
  userApi, 
  dashboardApi, 
  activityApi, 
  driveApi,
  getStoredToken, 
  getStoredUser, 
  setStoredAuth, 
  clearStoredAuth,
  ApiError 
} from '../services/api';

export interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'info' | 'warning' | 'success';
}

export interface CurrentUser {
  id: number;
  email: string;
  fullName: string;
  department: string;
  role: string;
  clearanceLevel: string;
  status: string;
  lastLogin: string;
}

interface AppContextType {
  currentUser: CurrentUser | null;
  isAuthenticated: boolean;
  backendConnected: boolean;
  loading: boolean;
  documents: DocumentItem[];
  sharedWithMe: SharedWithMeItem[];
  sharedByMe: SharedByMeItem[];
  users: UserItem[];
  securityActivities: SecurityActivityItem[];
  storageStats: StorageStats;
  globalSearch: string;
  setGlobalSearch: (query: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  toast: ToastMessage | null;
  showToast: (message: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
  notifications: NotificationItem[];
  unreadNotificationCount: number;
  markAllNotificationsRead: () => void;
  loginUser: (email: string, pass: string) => Promise<boolean>;
  logoutUser: () => Promise<void>;
  refreshBackendData: () => Promise<void>;
  addDocument: (doc: {
    name: string;
    type: DocumentItem['type'];
    size: number;
    sizeFormatted: string;
    classification: DocumentItem['classification'];
    description?: string;
  }) => Promise<void>;
  deleteDocument: (id: string) => Promise<void>;
  shareDocument: (
    docId: string, 
    recipientEmail: string, 
    recipientName: string, 
    permissions: 'View Only' | 'Can Download' | 'Full Access', 
    expiryDate: string,
    oneTimeAccess?: boolean
  ) => Promise<void>;
  updateSharedPermission: (id: string, newPermission: 'View Only' | 'Can Download' | 'Full Access', expiryDate: string) => void;
  revokeSharedAccess: (id: string) => Promise<void>;
  addUser: (userData: Omit<UserItem, 'id' | 'lastActive'> & { password?: string }) => Promise<void>;
  updateUser: (id: string, updatedData: Partial<UserItem>) => Promise<void>;
  deleteUser: (id: string) => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(() => getStoredUser());
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => Boolean(getStoredToken()));
  const [backendConnected, setBackendConnected] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [documents, setDocuments] = useState<DocumentItem[]>(INITIAL_DOCUMENTS);
  const [sharedWithMe, setSharedWithMe] = useState<SharedWithMeItem[]>(INITIAL_SHARED_WITH_ME);
  const [sharedByMe, setSharedByMe] = useState<SharedByMeItem[]>(INITIAL_SHARED_BY_ME);
  const [users, setUsers] = useState<UserItem[]>(INITIAL_USERS);
  const [securityActivities, setSecurityActivities] = useState<SecurityActivityItem[]>(INITIAL_SECURITY_ACTIVITIES);
  const [storageStats, setStorageStats] = useState<StorageStats>(STORAGE_STATS);
  const [globalSearch, setGlobalSearch] = useState<string>('');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: 'notif-1',
      title: 'Zero-Trust Device Verification',
      message: 'Hardware token posture check completed successfully for this session.',
      time: '10m ago',
      read: false,
      type: 'success'
    },
    {
      id: 'notif-2',
      title: 'Access Expiry Notice',
      message: 'Access to Enterprise_Access_Control_Matrix.xlsx expires in 7 days.',
      time: '1h ago',
      read: false,
      type: 'warning'
    },
    {
      id: 'notif-3',
      title: 'Document Shared With You',
      message: 'Elena Rostova shared Security_Audit_Report_Q3_2026.pdf with View Only rights.',
      time: '3h ago',
      read: false,
      type: 'info'
    }
  ]);

  const showToast = (message: string, type: 'success' | 'info' | 'warning' | 'error' = 'success') => {
    const id = Date.now().toString();
    setToast({ id, message, type });
    setTimeout(() => {
      setToast((current) => (current?.id === id ? null : current));
    }, 4000);
  };

  const markAllNotificationsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    showToast('All notifications marked as read', 'info');
  };

  const unreadNotificationCount = notifications.filter((n) => !n.read).length;

  // Refresh live backend data if token is active
  const refreshBackendData = async () => {
    const token = getStoredToken();
    if (!token) return;

    try {
      setLoading(true);
      // 1. Fetch current profile
      const profile = await authApi.getMe();
      setCurrentUser(profile);
      setIsAuthenticated(true);
      setBackendConnected(true);

      // 2. Fetch documents from backend
      try {
        const backendDocs = await documentApi.getDocuments();
        if (backendDocs && Array.isArray(backendDocs) && backendDocs.length > 0) {
          setDocuments(backendDocs);
        }
      } catch (_) {}

      // 3. Fetch users if privileged
      try {
        const backendUsers = await userApi.getUsers();
        if (backendUsers && Array.isArray(backendUsers)) {
          setUsers(backendUsers);
        }
      } catch (_) {}

      // 4. Fetch dashboard stats
      try {
        const stats = await dashboardApi.getStats();
        if (stats && stats.storageStats) {
          setStorageStats({
            usedBytes: stats.storageStats.usedBytes,
            totalBytes: stats.storageStats.totalBytes,
            usedFormatted: stats.storageStats.usedFormatted,
            totalFormatted: stats.storageStats.totalFormatted,
            percentage: stats.storageStats.percentage,
            byCategory: {
              documents: stats.storageStats.byCategory.documents || 14.8,
              spreadsheets: stats.storageStats.byCategory.spreadsheets || 1.1,
              presentations: stats.storageStats.byCategory.presentations || 8.3,
              archives: stats.storageStats.byCategory.archives || 14.7,
              other: 0.5
            }
          });
        }
      } catch (_) {}

      // 5. Fetch activities
      try {
        const activities = await activityApi.getActivities();
        if (activities && Array.isArray(activities) && activities.length > 0) {
          setSecurityActivities(activities);
        }
      } catch (_) {}

      // 6. Fetch live Shares from Drive API
      try {
        const shares = await driveApi.getSharesByMe();
        if (shares && Array.isArray(shares) && shares.length > 0) {
          setSharedByMe(shares.map(s => ({
            id: s.id,
            documentId: s.documentId,
            documentName: s.documentName,
            classification: s.classification,
            recipientName: s.recipientName,
            recipientEmail: s.recipientEmail,
            permissions: s.permissions as any,
            sharedDate: s.sharedDate,
            expiryDate: s.expiryDate,
            status: s.status === 'ACTIVE' ? 'Active' : s.status === 'REVOKED' ? 'Revoked' : 'Expired',
            oneTimeAccess: s.oneTimeAccess,
            accessCount: s.accessCount,
            maxAccessCount: s.maxAccessCount,
            storageLocation: s.storageLocation
          })));
        }
      } catch (_) {}

      // 7. Fetch live Shares With Me from Drive API
      try {
        const sharesWithMeData = await driveApi.getSharesWithMe();
        if (sharesWithMeData && Array.isArray(sharesWithMeData)) {
          setSharedWithMe(sharesWithMeData.map((s: any) => ({
            id: s.id,
            documentId: s.documentId,
            name: s.documentName,
            type: (s.fileType || 'pdf') as any,
            size: s.fileSize || '1.5 MB',
            owner: s.ownerName || 'Alex Morgan',
            ownerEmail: s.ownerEmail || 'user@zerotrust.sec',
            classification: s.classification,
            sharedDate: s.sharedDate,
            accessType: s.permissions === 'View Only' ? 'View Only' : s.permissions === 'Can Download' ? 'Restricted Download' : 'Edit',
            expiryDate: s.expiryDate,
            status: s.status === 'ACTIVE' ? 'Active' : 'Expired',
            oneTimeAccess: s.oneTimeAccess,
            accessCount: s.accessCount,
            storageLocation: s.storageLocation
          })));
        }
      } catch (_) {}

    } catch (err: any) {
      if (err instanceof ApiError && err.status === 401) {
        setIsAuthenticated(false);
        setCurrentUser(null);
      } else {
        setBackendConnected(false);
      }
    } finally {
      setLoading(false);
    }
  };

  // Initial load effect
  useEffect(() => {
    refreshBackendData();

    const handleAuthExpired = () => {
      setIsAuthenticated(false);
      setCurrentUser(null);
      showToast('Zero-Trust session has expired. Please authenticate.', 'warning');
    };

    window.addEventListener('zt-auth-expired', handleAuthExpired);
    return () => window.removeEventListener('zt-auth-expired', handleAuthExpired);
  }, []);

  // Real backend login
  const loginUser = async (email: string, pass: string): Promise<boolean> => {
    try {
      setLoading(true);
      const res = await authApi.login(email, pass);
      setStoredAuth(res.token, res.user);
      setCurrentUser(res.user);
      setIsAuthenticated(true);
      setBackendConnected(true);
      showToast('Authenticated via Spring Boot Backend. Zero-Trust Token issued.', 'success');
      await refreshBackendData();
      return true;
    } catch (err: any) {
      if (err instanceof ApiError && err.status === 0) {
        showToast('Backend server is offline. Running in local simulation mode.', 'warning');
        setIsAuthenticated(true);
        return true;
      }
      showToast(err.message || 'Authentication failed. Please verify credentials.', 'error');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Real backend logout
  const logoutUser = async () => {
    try {
      await authApi.logout();
    } catch (_) {
      clearStoredAuth();
    } finally {
      setIsAuthenticated(false);
      setCurrentUser(null);
      showToast('Session ended. Returning to secure login gateway.', 'info');
    }
  };

  // Add document with backend persistence
  const addDocument = async (doc: {
    name: string;
    type: DocumentItem['type'];
    size: number;
    sizeFormatted: string;
    classification: DocumentItem['classification'];
    description?: string;
  }) => {
    try {
      if (backendConnected) {
        const created = await documentApi.createDocument({
          name: doc.name,
          fileType: doc.type,
          fileSize: doc.size,
          sizeFormatted: doc.sizeFormatted,
          classification: doc.classification,
          description: doc.description
        });
        setDocuments((prev) => [created, ...prev]);
        showToast(`"${doc.name}" securely registered in backend database.`, 'success');
      } else {
        const randomHash = Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
        const newDoc: DocumentItem = {
          id: `doc-${Date.now()}`,
          name: doc.name,
          type: doc.type,
          size: doc.size,
          sizeFormatted: doc.sizeFormatted,
          owner: currentUser?.fullName || 'Alex Morgan',
          ownerEmail: currentUser?.email || 'alex.morgan@zerotrust.sec',
          classification: doc.classification,
          lastModified: 'Just now',
          uploadedAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
          sharedWithCount: 0,
          description: doc.description || 'Uploaded via Zero-Trust secure file ingestion interface.',
          sha256Hash: randomHash,
          version: '1.0',
          versions: [
            {
              version: '1.0',
              uploadedAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
              uploadedBy: currentUser?.fullName || 'Alex Morgan',
              size: doc.sizeFormatted,
              changes: 'Initial ingestion with metadata binding',
              hash: randomHash
            }
          ]
        };
        setDocuments((prev) => [newDoc, ...prev]);
        showToast(`"${doc.name}" securely ingested into the vault.`, 'success');
      }
    } catch (err: any) {
      showToast(err.message || 'Error uploading document metadata.', 'error');
    }
  };

  // Delete document
  const deleteDocument = async (id: string) => {
    const docToDelete = documents.find((d) => d.id === id);
    try {
      if (backendConnected) {
        await documentApi.deleteDocument(id);
      }
      setDocuments((prev) => prev.filter((d) => d.id !== id));
      showToast(`Document "${docToDelete?.name || id}" purged from vault.`, 'info');
    } catch (err: any) {
      showToast(err.message || 'Error deleting document.', 'error');
    }
  };

  const shareDocument = async (
    docId: string, 
    recipientEmail: string, 
    recipientName: string, 
    permissions: 'View Only' | 'Can Download' | 'Full Access', 
    expiryDate: string,
    oneTimeAccess?: boolean
  ) => {
    const doc = documents.find((d) => d.id === docId);
    if (!doc) return;

    try {
      if (backendConnected) {
        const created = await driveApi.shareDocument(docId, {
          recipientEmail,
          recipientName,
          permissions,
          expiryDate,
          oneTimeAccess: Boolean(oneTimeAccess),
          maxAccessCount: 1
        });

        const newSharedItem: SharedByMeItem = {
          id: created.id,
          documentId: docId,
          documentName: doc.name,
          classification: doc.classification,
          recipientName: created.recipientName || recipientEmail.split('@')[0],
          recipientEmail: created.recipientEmail,
          permissions: created.permissions as any,
          sharedDate: created.sharedDate,
          expiryDate: created.expiryDate,
          status: 'Active',
          oneTimeAccess: created.oneTimeAccess,
          accessCount: created.accessCount,
          maxAccessCount: created.maxAccessCount,
          storageLocation: created.storageLocation
        };

        setSharedByMe((prev) => [newSharedItem, ...prev]);
      } else {
        const newSharedItem: SharedByMeItem = {
          id: `sbm-${Date.now()}`,
          documentId: docId,
          documentName: doc.name,
          classification: doc.classification,
          recipientName: recipientName || recipientEmail.split('@')[0],
          recipientEmail,
          permissions,
          sharedDate: new Date().toISOString().replace('T', ' ').substring(0, 16),
          expiryDate: expiryDate || '2026-11-30 23:59',
          status: 'Active',
          oneTimeAccess: Boolean(oneTimeAccess),
          accessCount: 0,
          maxAccessCount: 1
        };

        setSharedByMe((prev) => [newSharedItem, ...prev]);
      }

      setDocuments((prev) =>
        prev.map((d) => (d.id === docId ? { ...d, sharedWithCount: d.sharedWithCount + 1 } : d))
      );
      showToast(`Shared "${doc.name}" with ${recipientEmail} ${oneTimeAccess ? '(One-Time Token)' : ''}`, 'success');
    } catch (err: any) {
      showToast(err.message || 'Error generating secure share.', 'error');
    }
  };

  const updateSharedPermission = (
    id: string, 
    newPermission: 'View Only' | 'Can Download' | 'Full Access', 
    expiryDate: string
  ) => {
    setSharedByMe((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, permissions: newPermission, expiryDate } : item
      )
    );
    showToast('Sharing permissions updated successfully.', 'success');
  };

  const revokeSharedAccess = async (id: string) => {
    const item = sharedByMe.find((s) => s.id === id);
    try {
      if (backendConnected && item) {
        await driveApi.revokeShare(id);
      }
      setSharedByMe((prev) =>
        prev.map((s) => (s.id === id ? { ...s, status: 'Revoked' } : s))
      );
      if (item) {
        showToast(`Revoked access for ${item.recipientEmail}`, 'info');
      }
    } catch (err: any) {
      showToast(err.message || 'Error revoking share.', 'error');
    }
  };

  // Add user with backend persistence
  const addUser = async (userData: Omit<UserItem, 'id' | 'lastActive'> & { password?: string }) => {
    try {
      if (backendConnected) {
        const created = await userApi.createUser({
          fullName: userData.name,
          email: userData.email,
          password: userData.password || 'SecurePass2026!',
          departmentName: userData.department,
          roleName: userData.role === 'Admin' ? 'ADMIN' : userData.role === 'Security Officer' ? 'MANAGER' : 'EMPLOYEE',
          clearanceLevel: userData.clearanceLevel
        });
        setUsers((prev) => [created, ...prev]);
        showToast(`User ${userData.name} provisioned in PostgreSQL database.`, 'success');
      } else {
        const newUser: UserItem = {
          ...userData,
          id: `usr-${Date.now()}`,
          lastActive: 'Never (Invited)'
        };
        setUsers((prev) => [newUser, ...prev]);
        showToast(`User ${newUser.name} added to Zero-Trust directory.`, 'success');
      }
    } catch (err: any) {
      showToast(err.message || 'Error provisioning user.', 'error');
    }
  };

  // Update user
  const updateUser = async (id: string, updatedData: Partial<UserItem>) => {
    try {
      const numericId = parseInt(id.replace('usr-', ''), 10);
      if (backendConnected && !isNaN(numericId)) {
        const updated = await userApi.updateUser(numericId, {
          fullName: updatedData.name,
          departmentName: updatedData.department,
          roleName: updatedData.role === 'Admin' ? 'ADMIN' : updatedData.role === 'Security Officer' ? 'MANAGER' : 'EMPLOYEE',
          clearanceLevel: updatedData.clearanceLevel,
          status: updatedData.status
        });
        setUsers((prev) => prev.map((u) => (u.id === id ? updated : u)));
      } else {
        setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, ...updatedData } : u)));
      }
      showToast('User record updated.', 'success');
    } catch (err: any) {
      showToast(err.message || 'Error updating user record.', 'error');
    }
  };

  // Delete user
  const deleteUser = async (id: string) => {
    const user = users.find((u) => u.id === id);
    try {
      const numericId = parseInt(id.replace('usr-', ''), 10);
      if (backendConnected && !isNaN(numericId)) {
        await userApi.deleteUser(numericId);
      }
      setUsers((prev) => prev.filter((u) => u.id !== id));
      showToast(`User ${user?.name || ''} removed from access control list.`, 'info');
    } catch (err: any) {
      showToast(err.message || 'Error removing user.', 'error');
    }
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        isAuthenticated,
        backendConnected,
        loading,
        documents,
        sharedWithMe,
        sharedByMe,
        users,
        securityActivities,
        storageStats,
        globalSearch,
        setGlobalSearch,
        sidebarOpen,
        setSidebarOpen,
        toast,
        showToast,
        notifications,
        unreadNotificationCount,
        markAllNotificationsRead,
        loginUser,
        logoutUser,
        refreshBackendData,
        addDocument,
        deleteDocument,
        shareDocument,
        updateSharedPermission,
        revokeSharedAccess,
        addUser,
        updateUser,
        deleteUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
