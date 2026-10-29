import { DocumentItem, SharedWithMeItem, SharedByMeItem, UserItem, SecurityActivityItem, StorageStats } from '../types';

export const INITIAL_DOCUMENTS: DocumentItem[] = [
  {
    id: 'doc-001',
    name: 'Zero_Trust_Architecture_v3.docx',
    type: 'docx',
    size: 4528128,
    sizeFormatted: '4.3 MB',
    owner: 'Alex Morgan (You)',
    ownerEmail: 'alex.morgan@zerotrust.sec',
    classification: 'Highly Confidential',
    lastModified: '2026-10-28 14:23',
    uploadedAt: '2026-10-15 09:12',
    sharedWithCount: 4,
    description: 'Core architectural guidelines for least-privilege continuous micro-segmentation and ephemeral mTLS tokens.',
    sha256Hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    version: '3.2',
    versions: [
      {
        version: '3.2',
        uploadedAt: '2026-10-28 14:23',
        uploadedBy: 'Alex Morgan',
        size: '4.3 MB',
        changes: 'Updated policy enforcement points and egress gateway mTLS rotation',
        hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
      },
      {
        version: '3.1',
        uploadedAt: '2026-10-20 11:05',
        uploadedBy: 'Alex Morgan',
        size: '4.1 MB',
        changes: 'Added continuous posture assessment criteria for Linux endpoints',
        hash: '8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4'
      },
      {
        version: '3.0',
        uploadedAt: '2026-10-15 09:12',
        uploadedBy: 'Alex Morgan',
        size: '3.9 MB',
        changes: 'Initial draft of Zero Trust Architecture Framework v3.0',
        hash: '7c6a5273a5a5f10b5f08e5828daec841f2be02ecce80f3e7b93a46718d56b066'
      }
    ]
  },
  {
    id: 'doc-002',
    name: 'Security_Audit_Report_Q3_2026.pdf',
    type: 'pdf',
    size: 2840000,
    sizeFormatted: '2.7 MB',
    owner: 'Elena Rostova',
    ownerEmail: 'elena.rostova@zerotrust.sec',
    classification: 'Confidential',
    lastModified: '2026-10-26 16:45',
    uploadedAt: '2026-10-22 10:30',
    sharedWithCount: 8,
    description: 'Comprehensive third-party red team assessment and vulnerability penetration testing synthesis.',
    sha256Hash: '3a42798e16c35c6cf0e3b97b1a206c4bcf1b59074092b7754eb53503c7aaec57',
    version: '1.4',
    versions: [
      {
        version: '1.4',
        uploadedAt: '2026-10-26 16:45',
        uploadedBy: 'Elena Rostova',
        size: '2.7 MB',
        changes: 'Resolved false positives in API perimeter penetration report',
        hash: '3a42798e16c35c6cf0e3b97b1a206c4bcf1b59074092b7754eb53503c7aaec57'
      },
      {
        version: '1.0',
        uploadedAt: '2026-10-22 10:30',
        uploadedBy: 'Elena Rostova',
        size: '2.6 MB',
        changes: 'Initial assessment draft received from external auditor',
        hash: 'b14ca7c030d306b6b77df7f7300f2e0f06f5221081309df515865249a5b67e81'
      }
    ]
  },
  {
    id: 'doc-003',
    name: 'Incident_Response_Playbook_v2.pdf',
    type: 'pdf',
    size: 1950000,
    sizeFormatted: '1.9 MB',
    owner: 'Alex Morgan (You)',
    ownerEmail: 'alex.morgan@zerotrust.sec',
    classification: 'Internal',
    lastModified: '2026-10-24 09:30',
    uploadedAt: '2026-09-10 14:00',
    sharedWithCount: 15,
    description: 'Standard operating procedures for rapid containment of unauthorized data exfiltration attempts.',
    sha256Hash: 'a1b2c3d4e5f60718293a4b5c6d7e8f90123456789abcdef0123456789abcdef0',
    version: '2.0',
    versions: [
      {
        version: '2.0',
        uploadedAt: '2026-10-24 09:30',
        uploadedBy: 'Alex Morgan',
        size: '1.9 MB',
        changes: 'Added automated isolation triggers for ransomware payloads',
        hash: 'a1b2c3d4e5f60718293a4b5c6d7e8f90123456789abcdef0123456789abcdef0'
      }
    ]
  },
  {
    id: 'doc-004',
    name: 'Enterprise_Access_Control_Matrix.xlsx',
    type: 'xlsx',
    size: 1120000,
    sizeFormatted: '1.1 MB',
    owner: 'David Chen',
    ownerEmail: 'david.chen@zerotrust.sec',
    classification: 'Confidential',
    lastModified: '2026-10-27 18:10',
    uploadedAt: '2026-10-01 08:20',
    sharedWithCount: 6,
    description: 'Role-Based and Attribute-Based Access Control permissions across all tier-1 infrastructure assets.',
    sha256Hash: '4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945',
    version: '4.1',
    versions: [
      {
        version: '4.1',
        uploadedAt: '2026-10-27 18:10',
        uploadedBy: 'David Chen',
        size: '1.1 MB',
        changes: 'Updated cloud devops role clearances',
        hash: '4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945'
      }
    ]
  },
  {
    id: 'doc-005',
    name: 'Employee_Onboarding_Handbook.pdf',
    type: 'pdf',
    size: 5400000,
    sizeFormatted: '5.2 MB',
    owner: 'Sarah Jenkins',
    ownerEmail: 'sarah.jenkins@zerotrust.sec',
    classification: 'Public',
    lastModified: '2026-10-18 11:20',
    uploadedAt: '2026-08-01 13:40',
    sharedWithCount: 120,
    description: 'General organizational handbook, code of conduct, and public communications policy.',
    sha256Hash: '9e107d9d372bb6826bd81d3542a419d6ec4336eb838929b199e74288b8e3a7f8',
    version: '1.0',
    versions: [
      {
        version: '1.0',
        uploadedAt: '2026-10-18 11:20',
        uploadedBy: 'Sarah Jenkins',
        size: '5.2 MB',
        changes: 'Published official 2026 employee handbook edition',
        hash: '9e107d9d372bb6826bd81d3542a419d6ec4336eb838929b199e74288b8e3a7f8'
      }
    ]
  },
  {
    id: 'doc-006',
    name: 'Cryptographic_Key_Rotation_Specs.docx',
    type: 'docx',
    size: 890000,
    sizeFormatted: '870 KB',
    owner: 'Alex Morgan (You)',
    ownerEmail: 'alex.morgan@zerotrust.sec',
    classification: 'Highly Confidential',
    lastModified: '2026-10-25 13:00',
    uploadedAt: '2026-10-25 13:00',
    sharedWithCount: 2,
    description: 'HSM KMS envelope encryption key schedule and automated 90-day rotation workflows.',
    sha256Hash: '112233445566778899aabbccddeeff00112233445566778899aabbccddeeff00',
    version: '1.0',
    versions: [
      {
        version: '1.0',
        uploadedAt: '2026-10-25 13:00',
        uploadedBy: 'Alex Morgan',
        size: '870 KB',
        changes: 'Initial release for cryptographic infrastructure committee review',
        hash: '112233445566778899aabbccddeeff00112233445566778899aabbccddeeff00'
      }
    ]
  },
  {
    id: 'doc-007',
    name: 'Executive_Board_Security_Deck.pptx',
    type: 'pptx',
    size: 8700000,
    sizeFormatted: '8.3 MB',
    owner: 'Marcus Vance',
    ownerEmail: 'marcus.vance@zerotrust.sec',
    classification: 'Confidential',
    lastModified: '2026-10-21 17:15',
    uploadedAt: '2026-10-20 15:00',
    sharedWithCount: 5,
    description: 'Quarterly board presentation on cybersecurity investments, threat landscape, and Zero-Trust rollout.',
    sha256Hash: '556677889900aabbccddeeff0011223344556677889900aabbccddeeff001122',
    version: '2.1',
    versions: [
      {
        version: '2.1',
        uploadedAt: '2026-10-21 17:15',
        uploadedBy: 'Marcus Vance',
        size: '8.3 MB',
        changes: 'Integrated Q3 compliance certification milestones',
        hash: '556677889900aabbccddeeff0011223344556677889900aabbccddeeff001122'
      }
    ]
  },
  {
    id: 'doc-008',
    name: 'Zero_Trust_Enclave_Scripts.zip',
    type: 'zip',
    size: 15400000,
    sizeFormatted: '14.7 MB',
    owner: 'Alex Morgan (You)',
    ownerEmail: 'alex.morgan@zerotrust.sec',
    classification: 'Internal',
    lastModified: '2026-10-19 12:40',
    uploadedAt: '2026-10-10 08:30',
    sharedWithCount: 11,
    description: 'Terraform and Ansible automation scripts for isolated micro-segmentation security zones.',
    sha256Hash: 'ddeeff00112233445566778899aabbccddeeff00112233445566778899aabbcc',
    version: '1.2',
    versions: [
      {
        version: '1.2',
        uploadedAt: '2026-10-19 12:40',
        uploadedBy: 'Alex Morgan',
        size: '14.7 MB',
        changes: 'Hardened bastion host configuration scripts',
        hash: 'ddeeff00112233445566778899aabbccddeeff00112233445566778899aabbcc'
      }
    ]
  }
];

export const INITIAL_SHARED_WITH_ME: SharedWithMeItem[] = [
  {
    id: 'swm-001',
    documentId: 'doc-002',
    name: 'Security_Audit_Report_Q3_2026.pdf',
    type: 'pdf',
    size: '2.7 MB',
    owner: 'Elena Rostova',
    ownerEmail: 'elena.rostova@zerotrust.sec',
    classification: 'Confidential',
    sharedDate: '2026-10-26 17:00',
    accessType: 'View Only',
    expiryDate: '2026-11-15 23:59',
    status: 'Active'
  },
  {
    id: 'swm-002',
    documentId: 'doc-004',
    name: 'Enterprise_Access_Control_Matrix.xlsx',
    type: 'xlsx',
    size: '1.1 MB',
    owner: 'David Chen',
    ownerEmail: 'david.chen@zerotrust.sec',
    classification: 'Confidential',
    sharedDate: '2026-10-27 19:15',
    accessType: 'Edit',
    expiryDate: '2026-11-05 23:59',
    status: 'Expiring Soon'
  },
  {
    id: 'swm-003',
    documentId: 'doc-007',
    name: 'Executive_Board_Security_Deck.pptx',
    type: 'pptx',
    size: '8.3 MB',
    owner: 'Marcus Vance',
    ownerEmail: 'marcus.vance@zerotrust.sec',
    classification: 'Confidential',
    sharedDate: '2026-10-22 09:10',
    accessType: 'Restricted Download',
    expiryDate: '2026-11-30 23:59',
    status: 'Active'
  },
  {
    id: 'swm-004',
    documentId: 'doc-009',
    name: 'Disaster_Recovery_Failover_Plan.pdf',
    type: 'pdf',
    size: '3.4 MB',
    owner: 'Tariq Al-Mansoor',
    ownerEmail: 'tariq.mansoor@zerotrust.sec',
    classification: 'Internal',
    sharedDate: '2026-10-10 14:00',
    accessType: 'View Only',
    expiryDate: '2026-10-25 23:59',
    status: 'Expired'
  }
];

export const INITIAL_SHARED_BY_ME: SharedByMeItem[] = [
  {
    id: 'sbm-001',
    documentId: 'doc-001',
    documentName: 'Zero_Trust_Architecture_v3.docx',
    classification: 'Highly Confidential',
    recipientName: 'David Chen',
    recipientEmail: 'david.chen@zerotrust.sec',
    permissions: 'Can Download',
    sharedDate: '2026-10-28 15:00',
    expiryDate: '2026-11-12 23:59',
    status: 'Active'
  },
  {
    id: 'sbm-002',
    documentId: 'doc-001',
    documentName: 'Zero_Trust_Architecture_v3.docx',
    classification: 'Highly Confidential',
    recipientName: 'Elena Rostova',
    recipientEmail: 'elena.rostova@zerotrust.sec',
    permissions: 'Full Access',
    sharedDate: '2026-10-28 15:05',
    expiryDate: '2026-11-20 23:59',
    status: 'Active'
  },
  {
    id: 'sbm-003',
    documentId: 'doc-003',
    documentName: 'Incident_Response_Playbook_v2.pdf',
    classification: 'Internal',
    recipientName: 'Security Operations Team (SOC)',
    recipientEmail: 'soc-team@zerotrust.sec',
    permissions: 'View Only',
    sharedDate: '2026-10-24 10:15',
    expiryDate: '2026-12-31 23:59',
    status: 'Active'
  },
  {
    id: 'sbm-004',
    documentId: 'doc-006',
    documentName: 'Cryptographic_Key_Rotation_Specs.docx',
    classification: 'Highly Confidential',
    recipientName: 'External Compliance Auditor',
    recipientEmail: 'auditor.external@security-firm.io',
    permissions: 'View Only',
    sharedDate: '2026-10-25 14:00',
    expiryDate: '2026-10-27 23:59',
    status: 'Expired'
  },
  {
    id: 'sbm-005',
    documentId: 'doc-008',
    documentName: 'Zero_Trust_Enclave_Scripts.zip',
    classification: 'Internal',
    recipientName: 'DevOps Infrastructure Lead',
    recipientEmail: 'devops-lead@zerotrust.sec',
    permissions: 'Can Download',
    sharedDate: '2026-10-19 14:30',
    expiryDate: '2026-10-26 23:59',
    status: 'Revoked'
  }
];

export const INITIAL_USERS: UserItem[] = [
  {
    id: 'usr-001',
    name: 'Alex Morgan',
    email: 'alex.morgan@zerotrust.sec',
    department: 'Cybersecurity Operations',
    role: 'Admin',
    status: 'Active',
    clearanceLevel: 'Highly Confidential',
    lastActive: 'Just now'
  },
  {
    id: 'usr-002',
    name: 'Elena Rostova',
    email: 'elena.rostova@zerotrust.sec',
    department: 'Threat Intelligence',
    role: 'Security Officer',
    status: 'Active',
    clearanceLevel: 'Highly Confidential',
    lastActive: '12 minutes ago'
  },
  {
    id: 'usr-003',
    name: 'David Chen',
    email: 'david.chen@zerotrust.sec',
    department: 'Cloud Infrastructure',
    role: 'Security Officer',
    status: 'Active',
    clearanceLevel: 'Confidential',
    lastActive: '1 hour ago'
  },
  {
    id: 'usr-004',
    name: 'Marcus Vance',
    email: 'marcus.vance@zerotrust.sec',
    department: 'Executive Governance',
    role: 'Admin',
    status: 'Active',
    clearanceLevel: 'Highly Confidential',
    lastActive: '3 hours ago'
  },
  {
    id: 'usr-005',
    name: 'Sarah Jenkins',
    email: 'sarah.jenkins@zerotrust.sec',
    department: 'People Operations',
    role: 'Standard User',
    status: 'Active',
    clearanceLevel: 'Internal',
    lastActive: '5 hours ago'
  },
  {
    id: 'usr-006',
    name: 'Tariq Al-Mansoor',
    email: 'tariq.mansoor@zerotrust.sec',
    department: 'Network Operations',
    role: 'Compliance Officer',
    status: 'Pending MFA',
    clearanceLevel: 'Confidential',
    lastActive: 'Yesterday'
  },
  {
    id: 'usr-007',
    name: 'Chloe Dubois',
    email: 'chloe.dubois@zerotrust.sec',
    department: 'Legal & Risk Compliance',
    role: 'Auditor',
    status: 'Active',
    clearanceLevel: 'Confidential',
    lastActive: '2 days ago'
  },
  {
    id: 'usr-008',
    name: 'Ryan O\'Connor',
    email: 'ryan.oconnor@contractor.sec',
    department: 'External Vendor Support',
    role: 'Standard User',
    status: 'Suspended',
    clearanceLevel: 'Public',
    lastActive: '1 week ago'
  }
];

export const INITIAL_SECURITY_ACTIVITIES: SecurityActivityItem[] = [
  {
    id: 'act-001',
    user: 'Alex Morgan',
    userEmail: 'alex.morgan@zerotrust.sec',
    action: 'LOGIN_SUCCESS',
    document: 'Session Authentication Gateway',
    timestamp: '2026-10-29 18:42:15',
    status: 'Success',
    ipAddress: '192.168.10.45 (Zero-Trust Enclave)',
    device: 'Edge Chromium v130 / Windows 11 Secure Workstation',
    details: 'Zero-Trust continuous posture check passed; hardware token verified.'
  },
  {
    id: 'act-002',
    user: 'Alex Morgan',
    userEmail: 'alex.morgan@zerotrust.sec',
    action: 'SHARE_CREATED',
    document: 'Zero_Trust_Architecture_v3.docx',
    timestamp: '2026-10-28 15:05:00',
    status: 'Success',
    ipAddress: '192.168.10.45',
    device: 'Edge Chromium v130 / Windows 11 Secure Workstation',
    details: 'Generated time-limited ephemeral access token for Elena Rostova with 14-day expiry.'
  },
  {
    id: 'act-003',
    user: 'Ryan O\'Connor',
    userEmail: 'ryan.oconnor@contractor.sec',
    action: 'ACCESS_BLOCKED',
    document: 'Cryptographic_Key_Rotation_Specs.docx',
    timestamp: '2026-10-28 11:14:02',
    status: 'Blocked',
    ipAddress: '203.0.113.88 (External Untrusted IP)',
    device: 'Unknown Agent / Android 14',
    details: 'Zero-Trust Policy Block: User clearance level (Public) insufficient for Highly Confidential resource.'
  },
  {
    id: 'act-004',
    user: 'Elena Rostova',
    userEmail: 'elena.rostova@zerotrust.sec',
    action: 'FILE_DOWNLOAD',
    document: 'Security_Audit_Report_Q3_2026.pdf',
    timestamp: '2026-10-28 09:22:45',
    status: 'Success',
    ipAddress: '10.200.4.12',
    device: 'Firefox v129 / macOS Sonoma Encrypted',
    details: 'Watermarked copy exported with cryptographically signed user stamp.'
  },
  {
    id: 'act-005',
    user: 'Tariq Al-Mansoor',
    userEmail: 'tariq.mansoor@zerotrust.sec',
    action: 'POLICY_VIOLATION',
    document: 'Disaster_Recovery_Failover_Plan.pdf',
    timestamp: '2026-10-27 22:04:19',
    status: 'Warning',
    ipAddress: '198.51.100.24',
    device: 'Chrome v129 / Linux Ubuntu',
    details: 'Attempted access outside designated working hours without pre-approved emergency ticket.'
  },
  {
    id: 'act-006',
    user: 'David Chen',
    userEmail: 'david.chen@zerotrust.sec',
    action: 'PERMISSION_CHANGE',
    document: 'Enterprise_Access_Control_Matrix.xlsx',
    timestamp: '2026-10-27 18:12:30',
    status: 'Success',
    ipAddress: '10.200.4.88',
    device: 'Chrome v130 / Windows 11 Secure Workstation',
    details: 'Elevated editor role granted to Security Operations lead.'
  },
  {
    id: 'act-007',
    user: 'Alex Morgan',
    userEmail: 'alex.morgan@zerotrust.sec',
    action: 'SHARE_REVOKED',
    document: 'Zero_Trust_Enclave_Scripts.zip',
    timestamp: '2026-10-26 14:30:11',
    status: 'Success',
    ipAddress: '192.168.10.45',
    device: 'Edge Chromium v130 / Windows 11 Secure Workstation',
    details: 'Immediate revocation of contractor access upon project completion milestone.'
  },
  {
    id: 'act-008',
    user: 'Unknown Attacker',
    userEmail: 'anonymous@darknet.mesh',
    action: 'LOGIN_FAILED',
    document: 'Admin Portal Endpoint /api/v1/auth',
    timestamp: '2026-10-26 03:11:45',
    status: 'Blocked',
    ipAddress: '185.220.101.5 (Tor Exit Node)',
    device: 'Automated Python/Requests 2.31',
    details: 'Brute force credential stuffing attempt blocked automatically by Zero-Trust WAF.'
  }
];

export const STORAGE_STATS: StorageStats = {
  usedBytes: 37400000,
  totalBytes: 107374182400, // 100 GB
  usedFormatted: '37.4 MB',
  totalFormatted: '100 GB',
  percentage: 0.035,
  byCategory: {
    documents: 14.8,
    spreadsheets: 1.1,
    presentations: 8.3,
    archives: 14.7,
    other: 0.5
  }
};
