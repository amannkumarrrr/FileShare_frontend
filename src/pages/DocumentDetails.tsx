import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  FileText, 
  ArrowLeft, 
  Download, 
  Share2, 
  Trash2, 
  Calendar, 
  HardDrive, 
  User, 
  Hash, 
  ShieldCheck, 
  History, 
  Lock, 
  AlertTriangle,
  GitCommit,
  CheckCircle2,
  Cloud,
  ExternalLink
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ClassificationBadge } from '../components/common/Badge';
import { ShareModal } from '../components/modals/ShareModal';
import { EmptyState } from '../components/common/EmptyState';
import { DocumentVersion } from '../types';
import { driveApi } from '../services/api';

export const DocumentDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { documents, deleteDocument, showToast, backendConnected } = useApp();

  const [shareModalOpen, setShareModalOpen] = useState(false);

  const doc = documents.find((d) => d.id === id);

  if (!doc) {
    return (
      <div className="doc-details-not-found">
        <EmptyState
          title="Document Not Located"
          description="The requested document does not exist or your Zero-Trust session lacks permission to view it."
          actionText="Back to Documents"
          onAction={() => navigate('/documents')}
        />
      </div>
    );
  }

  const handleDownloadCurrent = async () => {
    try {
      if (backendConnected) {
        showToast(`Requesting Zero-Trust stream for "${doc.name}"...`, 'info');
        await driveApi.downloadDocument(doc.id, doc.name);
        showToast(`Cryptographically verified download complete for "${doc.name}"`, 'success');
      } else {
        showToast(`Generating signed export for "${doc.name}" v${doc.version}...`, 'success');
      }
    } catch (err: any) {
      showToast(err.message || 'Zero-Trust Policy Blocked: Access Denied', 'error');
    }
  };

  const handleDownloadVersion = (ver: DocumentVersion) => {
    showToast(`Downloading historical revision v${ver.version} (${ver.hash.substring(0, 8)})...`, 'info');
  };

  const handleDelete = () => {
    if (window.confirm(`Permanently remove "${doc.name}" from the secure vault?`)) {
      deleteDocument(doc.id);
      navigate('/documents');
    }
  };

  return (
    <div className="doc-details-page">
      {/* Top Navigation */}
      <div className="details-header-nav">
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={() => navigate('/documents')}
        >
          <ArrowLeft size={14} />
          <span>Back to Documents</span>
        </button>

        <div className="header-actions">
          {doc.webViewLink && (
            <a
              href={doc.webViewLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <ExternalLink size={14} />
              <span>Open in Drive</span>
            </a>
          )}
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => setShareModalOpen(true)}
          >
            <Share2 size={14} />
            <span>Share</span>
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={handleDownloadCurrent}
          >
            <Download size={14} />
            <span>Download (v{doc.version})</span>
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={handleDelete}
          >
            <Trash2 size={14} />
            <span>Delete</span>
          </button>
        </div>
      </div>

      {/* Main Document Info Card */}
      <div className="zt-card details-main-card">
        <div className="dmc-top">
          <div className="dmc-title-box">
            <div className="dmc-icon">
              <FileText size={28} color="var(--cyan-primary)" />
            </div>
            <div>
              <h1 className="dmc-title">{doc.name}</h1>
              <p className="dmc-desc">{doc.description}</p>
            </div>
          </div>
          <ClassificationBadge level={doc.classification} />
        </div>

        {/* Metadata Grid */}
        <div className="details-meta-grid">
          <div className="dmg-item">
            <span className="dmg-label"><User size={13} /> Owner & Creator</span>
            <span className="dmg-val">{doc.owner}</span>
            <span className="dmg-sub">{doc.ownerEmail}</span>
          </div>

          <div className="dmg-item">
            <span className="dmg-label"><HardDrive size={13} /> Resource Size</span>
            <span className="dmg-val">{doc.sizeFormatted}</span>
            <span className="dmg-sub">{doc.size.toLocaleString()} bytes</span>
          </div>

          <div className="dmg-item">
            <span className="dmg-label"><Calendar size={13} /> Upload Date</span>
            <span className="dmg-val">{doc.uploadedAt}</span>
            <span className="dmg-sub">Modified: {doc.lastModified}</span>
          </div>

          <div className="dmg-item">
            <span className="dmg-label"><ShieldCheck size={13} /> Active Shares</span>
            <span className="dmg-val">{doc.sharedWithCount} recipients</span>
            <span className="dmg-sub">Token bound access</span>
          </div>

          <div className="dmg-item">
            <span className="dmg-label">
              {doc.storageLocation === 'GOOGLE_DRIVE' ? <Cloud size={13} color="var(--cyan-primary)" /> : <HardDrive size={13} />} Storage Destination
            </span>
            <span className="dmg-val" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {doc.storageLocation === 'GOOGLE_DRIVE' ? (
                <>
                  <Cloud size={14} color="var(--cyan-primary)" /> Google Drive API v3
                </>
              ) : (
                'Local Encrypted Vault'
              )}
            </span>
            <span className="dmg-sub">
              {doc.googleDriveFileId ? `File ID: ${doc.googleDriveFileId.substring(0, 16)}...` : 'Filesystem Enclave'}
            </span>
          </div>
        </div>

        {/* Cryptographic Digest Card */}
        <div className="hash-banner">
          <div className="hash-header">
            <Hash size={15} color="var(--cyan-primary)" />
            <span>SHA-256 INTEGRITY HASH (CURRENT REVISION v{doc.version})</span>
          </div>
          <div className="hash-code">
            {doc.sha256Hash}
          </div>
        </div>

        {/* Phase 2 Planned Banner */}
        <div className="phase2-planned-badge">
          <Lock size={15} color="var(--cyan-primary)" />
          <span>
            <strong>Zero-Trust Architecture Note:</strong> End-to-end envelope encryption (AES-256-GCM) with client-side key wrapping is scheduled for Phase 2 implementation.
          </span>
        </div>
      </div>

      {/* Version History Section */}
      <div className="zt-card version-history-card">
        <div className="zt-card-header">
          <div className="zt-card-title">
            <History size={18} color="var(--cyan-primary)" />
            <span>Version History & Cryptographic Provenance</span>
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            {doc.versions?.length || 1} Revisions Logged
          </span>
        </div>

        <div className="timeline-container">
          {(doc.versions || []).map((ver, idx) => (
            <div key={ver.version} className="timeline-row">
              <div className="timeline-bullet-col">
                <div className={`timeline-bullet ${idx === 0 ? 'current' : ''}`}>
                  <GitCommit size={14} />
                </div>
                {idx < (doc.versions?.length || 1) - 1 && <div className="timeline-line"></div>}
              </div>

              <div className="timeline-content-card">
                <div className="tcc-header">
                  <div className="tcc-ver">
                    <span className="ver-badge">v{ver.version}</span>
                    {idx === 0 && <span className="current-tag">ACTIVE HEAD</span>}
                    <span className="tcc-author">by {ver.uploadedBy}</span>
                  </div>
                  <div className="tcc-time">{ver.uploadedAt}</div>
                </div>

                <div className="tcc-changes">{ver.changes}</div>

                <div className="tcc-footer">
                  <span className="tcc-hash">SHA: {ver.hash.substring(0, 16)}...</span>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleDownloadVersion(ver)}
                  >
                    <Download size={13} />
                    <span>Download v{ver.version}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        document={doc}
      />

      <style>{`
        .details-header-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .header-actions {
          display: flex;
          gap: 10px;
        }
        .details-main-card {
          margin-bottom: 24px;
        }
        .dmc-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
        }
        .dmc-title-box {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .dmc-icon {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-sm);
          background: rgba(6, 182, 212, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .dmc-title {
          font-size: 1.45rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .dmc-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-top: 4px;
        }
        .details-meta-grid {
          display: grid;
          grid-templateColumns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }
        .dmg-item {
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 14px 16px;
        }
        .dmg-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .dmg-val {
          display: block;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .dmg-sub {
          display: block;
          font-size: 0.72rem;
          color: var(--text-secondary);
          margin-top: 2px;
        }
        .hash-banner {
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 12px 16px;
          margin-bottom: 16px;
        }
        .hash-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--cyan-primary);
          margin-bottom: 6px;
        }
        .hash-code {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-secondary);
          word-break: break-all;
        }
        .phase2-planned-badge {
          background: rgba(6, 182, 212, 0.08);
          border: 1px solid rgba(6, 182, 212, 0.25);
          border-radius: var(--radius-sm);
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        .phase2-planned-badge strong {
          color: var(--cyan-primary);
        }
        .version-history-card {
          margin-bottom: 24px;
        }
        .timeline-container {
          display: flex;
          flex-direction: column;
        }
        .timeline-row {
          display: flex;
          gap: 16px;
        }
        .timeline-bullet-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 32px;
        }
        .timeline-bullet {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--bg-elevated);
          border: 1px solid var(--border-medium);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          z-index: 1;
        }
        .timeline-bullet.current {
          background: rgba(6, 182, 212, 0.15);
          border-color: var(--cyan-primary);
          color: var(--cyan-primary);
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.3);
        }
        .timeline-line {
          flex: 1;
          width: 2px;
          background: var(--border-subtle);
          margin: 4px 0;
        }
        .timeline-content-card {
          flex: 1;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 14px 18px;
          margin-bottom: 16px;
        }
        .tcc-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
        }
        .tcc-ver {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ver-badge {
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--text-primary);
        }
        .current-tag {
          font-size: 0.65rem;
          font-weight: 700;
          background: rgba(16, 185, 129, 0.15);
          color: var(--emerald);
          padding: 2px 6px;
          border-radius: 4px;
        }
        .tcc-author {
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        .tcc-time {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .tcc-changes {
          font-size: 0.84rem;
          color: var(--text-secondary);
          margin-bottom: 12px;
          line-height: 1.4;
        }
        .tcc-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--border-subtle);
          padding-top: 10px;
        }
        .tcc-hash {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
};
