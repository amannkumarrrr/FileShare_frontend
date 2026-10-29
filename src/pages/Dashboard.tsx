import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Files, 
  FolderDown, 
  FolderUp, 
  Activity, 
  HardDrive, 
  UploadCloud, 
  Share2, 
  Users, 
  Lock, 
  ArrowUpRight, 
  Eye, 
  Download, 
  FileText,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Info
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ClassificationBadge, StatusBadge } from '../components/common/Badge';
import { ViewDocumentModal } from '../components/modals/ViewDocumentModal';
import { ShareModal } from '../components/modals/ShareModal';
import { DocumentItem } from '../types';

export const Dashboard: React.FC = () => {
  const { 
    documents, 
    sharedWithMe, 
    sharedByMe, 
    securityActivities, 
    storageStats, 
    showToast,
    currentUser,
    backendConnected
  } = useApp();
  
  const navigate = useNavigate();

  const [selectedDocForView, setSelectedDocForView] = useState<DocumentItem | null>(null);
  const [selectedDocForShare, setSelectedDocForShare] = useState<DocumentItem | null>(null);

  const totalSharedDocs = sharedWithMe.length + sharedByMe.length;
  const recentActivities = securityActivities.slice(0, 5);
  const recentDocs = documents.slice(0, 5);

  const handleDownloadQuick = (docName: string) => {
    showToast(`Downloading secure watermarked copy of "${docName}"...`, 'success');
  };

  return (
    <div className="dashboard-page">
      {/* Welcome & Posture Banner */}
      <div className="dashboard-welcome-card">
        <div className="welcome-left">
          <div className="posture-pill">
            <span className="dot-live"></span>
            <span>Continuous Zero-Trust Posture: <strong>Verified</strong> {backendConnected && '(Live Spring Boot)'}</span>
          </div>
          <h1 className="welcome-title">Welcome back, {currentUser?.fullName || 'Alex Morgan'}</h1>
          <p className="welcome-subtitle">
            Zero-Trust security perimeter enforced. Hardware token verified, egress gateway mTLS active.
          </p>
        </div>
        <div className="welcome-right">
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={() => navigate('/upload')}
          >
            <UploadCloud size={16} />
            <span>Upload Document</span>
          </button>
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={() => navigate('/documents')}
          >
            <span>Explore All Files</span>
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="metrics-grid">
        <div className="metric-card" onClick={() => navigate('/documents')}>
          <div className="metric-header">
            <span className="metric-title">TOTAL VAULT DOCUMENTS</span>
            <div className="metric-icon-wrap cyan">
              <Files size={20} />
            </div>
          </div>
          <div className="metric-value">{documents.length}</div>
          <div className="metric-footer">
            <span className="metric-subtext">All classified & hashed</span>
            <span className="metric-link">Manage &rarr;</span>
          </div>
        </div>

        <div className="metric-card" onClick={() => navigate('/shared-by-me')}>
          <div className="metric-header">
            <span className="metric-title">ACTIVE SHARED LINKS</span>
            <div className="metric-icon-wrap emerald">
              <FolderUp size={20} />
            </div>
          </div>
          <div className="metric-value">{totalSharedDocs}</div>
          <div className="metric-footer">
            <span className="metric-subtext">
              {sharedByMe.length} shared by you &bull; {sharedWithMe.length} received
            </span>
            <span className="metric-link">View &rarr;</span>
          </div>
        </div>

        <div className="metric-card" onClick={() => navigate('/activity')}>
          <div className="metric-header">
            <span className="metric-title">RECENT AUDIT EVENTS</span>
            <div className="metric-icon-wrap amber">
              <Activity size={20} />
            </div>
          </div>
          <div className="metric-value">{securityActivities.length}</div>
          <div className="metric-footer">
            <span className="metric-subtext">100% SIEM indexed (mock)</span>
            <span className="metric-link">Audit &rarr;</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-title">ENCRYPTED STORAGE</span>
            <div className="metric-icon-wrap purple">
              <HardDrive size={20} />
            </div>
          </div>
          <div className="metric-value">{storageStats.usedFormatted}</div>
          <div className="metric-footer">
            <span className="metric-subtext">Quota: {storageStats.totalFormatted}</span>
            <span className="metric-badge">0.04% used</span>
          </div>
        </div>
      </div>

      {/* Storage Usage Visual Bar Card */}
      <div className="zt-card storage-card-section">
        <div className="zt-card-header">
          <div className="zt-card-title">
            <HardDrive size={18} color="var(--cyan-primary)" />
            <span>Encrypted Storage Allocation & Quota</span>
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            <strong>{storageStats.usedFormatted}</strong> of {storageStats.totalFormatted} allocated
          </span>
        </div>
        
        {/* Visual Progress Bar */}
        <div className="storage-progress-bar">
          <div className="progress-fill docs" style={{ width: '40%' }} title="Documents (40%)"></div>
          <div className="progress-fill archives" style={{ width: '38%' }} title="Encrypted Archives (38%)"></div>
          <div className="progress-fill presentations" style={{ width: '18%' }} title="Presentations (18%)"></div>
          <div className="progress-fill spreadsheets" style={{ width: '4%' }} title="Sheets (4%)"></div>
        </div>

        <div className="storage-legend">
          <div className="legend-item"><span className="legend-dot docs"></span> Documents ({storageStats.byCategory.documents} MB)</div>
          <div className="legend-item"><span className="legend-dot archives"></span> Secure Archives ({storageStats.byCategory.archives} MB)</div>
          <div className="legend-item"><span className="legend-dot presentations"></span> Presentations ({storageStats.byCategory.presentations} MB)</div>
          <div className="legend-item"><span className="legend-dot spreadsheets"></span> Data Sheets ({storageStats.byCategory.spreadsheets} MB)</div>
        </div>
      </div>

      {/* Split Grid: Recent Documents & Recent Security Activity */}
      <div className="dashboard-split-grid">
        {/* Left Column: Recent Documents */}
        <div className="zt-card">
          <div className="zt-card-header">
            <div className="zt-card-title">
              <FileText size={18} color="var(--cyan-primary)" />
              <span>Recent Documents</span>
            </div>
            <button 
              type="button" 
              className="btn-ghost btn-sm"
              onClick={() => navigate('/documents')}
            >
              View All ({documents.length})
            </button>
          </div>

          <div className="table-responsive">
            <table className="zt-table">
              <thead>
                <tr>
                  <th>Document Name</th>
                  <th>Classification</th>
                  <th>Size</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentDocs.map((doc) => (
                  <tr key={doc.id}>
                    <td>
                      <div className="table-doc-info">
                        <span className="doc-name-text" title={doc.name}>{doc.name}</span>
                        <span className="doc-meta-text">v{doc.version} &bull; {doc.lastModified}</span>
                      </div>
                    </td>
                    <td>
                      <ClassificationBadge level={doc.classification} showIcon={false} />
                    </td>
                    <td style={{ color: 'var(--text-secondary)' }}>{doc.sizeFormatted}</td>
                    <td>
                      <div className="table-actions">
                        <button 
                          type="button" 
                          className="btn-icon" 
                          title="View Document"
                          onClick={() => setSelectedDocForView(doc)}
                        >
                          <Eye size={15} />
                        </button>
                        <button 
                          type="button" 
                          className="btn-icon" 
                          title="Share Document"
                          onClick={() => setSelectedDocForShare(doc)}
                        >
                          <Share2 size={15} />
                        </button>
                        <button 
                          type="button" 
                          className="btn-icon" 
                          title="Download"
                          onClick={() => handleDownloadQuick(doc.name)}
                        >
                          <Download size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Security Activity */}
        <div className="zt-card">
          <div className="zt-card-header">
            <div className="zt-card-title">
              <Activity size={18} color="var(--cyan-primary)" />
              <span>Recent Security Activity</span>
            </div>
            <button 
              type="button" 
              className="btn-ghost btn-sm"
              onClick={() => navigate('/activity')}
            >
              Full Audit Trail
            </button>
          </div>

          <div className="activity-stream">
            {recentActivities.map((act) => (
              <div key={act.id} className="stream-item">
                <div className={`stream-icon-badge ${act.status.toLowerCase()}`}>
                  {act.status === 'Success' && <CheckCircle2 size={14} />}
                  {act.status === 'Blocked' && <Lock size={14} />}
                  {act.status === 'Warning' && <AlertTriangle size={14} />}
                  {act.status === 'Flagged' && <Info size={14} />}
                </div>
                <div className="stream-details">
                  <div className="stream-line-top">
                    <span className="stream-user">{act.user}</span>
                    <span className="stream-action">{act.action}</span>
                    <span className="stream-time">{act.timestamp.substring(11, 16)}</span>
                  </div>
                  <div className="stream-doc">{act.document}</div>
                  <div className="stream-info">{act.details}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Action Dock */}
      <div className="quick-action-dock">
        <div className="dock-title">SECURITY VAULT QUICK ACTIONS</div>
        <div className="dock-buttons">
          <button 
            type="button" 
            className="dock-btn"
            onClick={() => navigate('/upload')}
          >
            <UploadCloud size={18} color="var(--cyan-primary)" />
            <span>Ingest Document</span>
          </button>
          <button 
            type="button" 
            className="dock-btn"
            onClick={() => navigate('/shared-by-me')}
          >
            <Share2 size={18} color="var(--emerald)" />
            <span>Manage Access Grants</span>
          </button>
          <button 
            type="button" 
            className="dock-btn"
            onClick={() => navigate('/users')}
          >
            <Users size={18} color="var(--purple)" />
            <span>User Clearance Directory</span>
          </button>
          <button 
            type="button" 
            className="dock-btn"
            onClick={() => navigate('/activity')}
          >
            <Activity size={18} color="var(--amber)" />
            <span>Security SIEM Logs</span>
          </button>
        </div>
      </div>

      {/* Modals */}
      <ViewDocumentModal
        isOpen={Boolean(selectedDocForView)}
        onClose={() => setSelectedDocForView(null)}
        document={selectedDocForView}
        onOpenShare={(doc) => setSelectedDocForShare(doc)}
      />

      <ShareModal
        isOpen={Boolean(selectedDocForShare)}
        onClose={() => setSelectedDocForShare(null)}
        document={selectedDocForShare}
      />

      <style>{`
        .dashboard-welcome-card {
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(15, 23, 42, 0.95) 100%);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          padding: 28px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 24px;
          box-shadow: var(--shadow-md);
        }
        .posture-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 4px 12px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: var(--radius-full);
          font-size: 0.76rem;
          color: var(--text-secondary);
          margin-bottom: 10px;
        }
        .posture-pill strong {
          color: var(--emerald);
        }
        .welcome-title {
          font-size: 1.7rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }
        .welcome-subtitle {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-top: 6px;
          max-width: 600px;
        }
        .welcome-right {
          display: flex;
          gap: 12px;
          flex-shrink: 0;
        }
        .metrics-grid {
          display: grid;
          grid-templateColumns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
          margin-bottom: 24px;
        }
        .metric-card {
          background-color: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 20px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
        }
        .metric-card:hover {
          border-color: var(--cyan-primary);
          box-shadow: 0 4px 16px rgba(6, 182, 212, 0.15);
          transform: translateY(-2px);
        }
        .metric-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .metric-title {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }
        .metric-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .metric-icon-wrap.cyan {
          background: rgba(6, 182, 212, 0.12);
          color: var(--cyan-primary);
        }
        .metric-icon-wrap.emerald {
          background: rgba(16, 185, 129, 0.12);
          color: var(--emerald);
        }
        .metric-icon-wrap.amber {
          background: rgba(245, 158, 11, 0.12);
          color: var(--amber);
        }
        .metric-icon-wrap.purple {
          background: rgba(139, 92, 246, 0.12);
          color: var(--purple);
        }
        .metric-value {
          font-size: 1.85rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.1;
          margin-bottom: 8px;
        }
        .metric-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.76rem;
          color: var(--text-secondary);
          margin-top: auto;
          padding-top: 8px;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
        }
        .metric-link {
          color: var(--cyan-primary);
          font-weight: 600;
        }
        .metric-badge {
          background: rgba(139, 92, 246, 0.15);
          color: var(--purple);
          padding: 2px 6px;
          border-radius: var(--radius-sm);
          font-size: 0.7rem;
        }
        .storage-card-section {
          margin-bottom: 24px;
        }
        .storage-progress-bar {
          height: 10px;
          background: var(--bg-input);
          border-radius: var(--radius-full);
          overflow: hidden;
          display: flex;
          margin-bottom: 16px;
        }
        .progress-fill.docs { background: var(--cyan-primary); }
        .progress-fill.archives { background: var(--emerald); }
        .progress-fill.presentations { background: var(--purple); }
        .progress-fill.spreadsheets { background: var(--amber); }
        .storage-legend {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          font-size: 0.78rem;
          color: var(--text-secondary);
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .legend-dot.docs { background: var(--cyan-primary); }
        .legend-dot.archives { background: var(--emerald); }
        .legend-dot.presentations { background: var(--purple); }
        .legend-dot.spreadsheets { background: var(--amber); }
        .dashboard-split-grid {
          display: grid;
          grid-templateColumns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }
        .table-doc-info {
          display: flex;
          flex-direction: column;
        }
        .doc-name-text {
          font-weight: 500;
          color: var(--text-primary);
          max-width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .doc-meta-text {
          font-size: 0.72rem;
          color: var(--text-muted);
        }
        .table-actions {
          display: flex;
          gap: 4px;
        }
        .activity-stream {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .stream-item {
          display: flex;
          gap: 12px;
          padding: 8px 0;
          border-bottom: 1px solid var(--border-subtle);
        }
        .stream-item:last-child {
          border-bottom: none;
        }
        .stream-icon-badge {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .stream-icon-badge.success {
          background: var(--emerald-bg);
          color: var(--emerald);
        }
        .stream-icon-badge.blocked {
          background: var(--rose-bg);
          color: var(--rose);
        }
        .stream-icon-badge.warning {
          background: var(--amber-bg);
          color: var(--amber);
        }
        .stream-icon-badge.flagged {
          background: var(--blue-bg);
          color: var(--blue);
        }
        .stream-details {
          flex: 1;
        }
        .stream-line-top {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
        }
        .stream-user {
          font-weight: 600;
          color: var(--text-primary);
        }
        .stream-action {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--cyan-primary);
          background: rgba(6, 182, 212, 0.1);
          padding: 1px 5px;
          border-radius: 3px;
        }
        .stream-time {
          margin-left: auto;
          font-size: 0.7rem;
          color: var(--text-muted);
        }
        .stream-doc {
          font-size: 0.76rem;
          color: var(--text-secondary);
          margin-top: 2px;
          font-weight: 500;
        }
        .stream-info {
          font-size: 0.72rem;
          color: var(--text-muted);
          margin-top: 2px;
          line-height: 1.3;
        }
        .quick-action-dock {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 18px 24px;
        }
        .dock-title {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          margin-bottom: 14px;
        }
        .dock-buttons {
          display: grid;
          grid-templateColumns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 14px;
        }
        .dock-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.2s;
        }
        .dock-btn:hover {
          border-color: var(--cyan-primary);
          background: var(--bg-card-hover);
          transform: translateY(-1px);
        }

        @media (max-width: 900px) {
          .dashboard-welcome-card {
            flex-direction: column;
            align-items: flex-start;
          }
          .welcome-right {
            width: 100%;
            justify-content: flex-start;
          }
          .dashboard-split-grid {
            grid-templateColumns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
