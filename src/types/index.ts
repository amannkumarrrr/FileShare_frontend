export type ClassificationLevel = 'Public' | 'Internal' | 'Confidential' | 'Highly Confidential';

export type FileType = 'pdf' | 'docx' | 'xlsx' | 'pptx' | 'zip' | 'png' | 'code';

export interface DocumentVersion {
  version: string;
  uploadedAt: string;
  uploadedBy: string;
  size: string;
  changes: string;
  hash: string;
}

export interface DocumentItem {
  id: string;
  name: string;
  type: FileType;
  size: number;
  sizeFormatted: string;
  owner: string;
  ownerEmail: string;
  classification: ClassificationLevel;
  lastModified: string;
  uploadedAt: string;
  sharedWithCount: number;
  description: string;
  sha256Hash: string;
  version: string;
  storageLocation?: 'LOCAL' | 'GOOGLE_DRIVE';
  googleDriveFileId?: string;
  webViewLink?: string;
  webContentLink?: string;
  versions: DocumentVersion[];
}

export interface SharedWithMeItem {
  id: string;
  documentId: string;
  name: string;
  type: FileType;
  size: string;
  owner: string;
  ownerEmail: string;
  classification: ClassificationLevel;
  sharedDate: string;
  accessType: 'View Only' | 'Edit' | 'Restricted Download';
  expiryDate: string;
  status: 'Active' | 'Expiring Soon' | 'Expired';
  oneTimeAccess?: boolean;
  accessCount?: number;
  storageLocation?: string;
}

export interface SharedByMeItem {
  id: string;
  documentId: string;
  documentName: string;
  classification: ClassificationLevel;
  recipientName: string;
  recipientEmail: string;
  permissions: 'View Only' | 'Can Download' | 'Full Access';
  sharedDate: string;
  expiryDate: string;
  status: 'Active' | 'Revoked' | 'Expired';
  oneTimeAccess?: boolean;
  accessCount?: number;
  maxAccessCount?: number;
  storageLocation?: string;
}

export type UserRole = 'Admin' | 'Security Officer' | 'Compliance Officer' | 'Auditor' | 'Standard User';
export type UserStatus = 'Active' | 'Suspended' | 'Pending MFA';

export interface UserItem {
  id: string;
  name: string;
  email: string;
  department: string;
  role: UserRole;
  status: UserStatus;
  clearanceLevel: ClassificationLevel;
  lastActive: string;
}

export type ActivityAction = 
  | 'LOGIN_SUCCESS' 
  | 'LOGIN_FAILED' 
  | 'FILE_ACCESS' 
  | 'FILE_DOWNLOAD' 
  | 'FILE_UPLOAD' 
  | 'SHARE_CREATED' 
  | 'SHARE_REVOKED' 
  | 'PERMISSION_CHANGE' 
  | 'ACCESS_BLOCKED' 
  | 'POLICY_VIOLATION'
  | 'GOOGLE_DRIVE_CONNECT'
  | 'GOOGLE_DRIVE_DISCONNECT';

export type ActivityStatus = 'Success' | 'Flagged' | 'Blocked' | 'Warning';

export interface SecurityActivityItem {
  id: string;
  user: string;
  userEmail: string;
  action: ActivityAction;
  document: string;
  timestamp: string;
  status: ActivityStatus;
  ipAddress: string;
  device: string;
  details: string;
}

export interface StorageStats {
  usedBytes: number;
  totalBytes: number;
  usedFormatted: string;
  totalFormatted: string;
  percentage: number;
  byCategory: {
    documents: number;
    spreadsheets: number;
    presentations: number;
    archives: number;
    other: number;
  };
}
