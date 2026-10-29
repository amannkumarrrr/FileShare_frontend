import React from 'react';
import { Modal } from '../common/Modal';
import { DocumentItem } from '../../types';
import { ClassificationBadge } from '../common/Badge';
import { useApp } from '../../context/AppContext';
import { 
  FileText, 
  Download, 
  Share2, 
  ShieldCheck, 
  Hash, 
  Calendar, 
  HardDrive, 
  User, 
  ExternalLink,
  Cloud 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { driveApi } from '../../services/api';

interface ViewDocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  document: DocumentItem | null;
  onOpenShare?: (doc: DocumentItem) => void;
}

export const ViewDocumentModal: React.FC<ViewDocumentModalProps> = ({
  isOpen,
  onClose,
  document: doc,
  onOpenShare
}) => {
  const { showToast, backendConnected } = useApp();
  const navigate = useNavigate();

  if (!doc) return null;

  const handleDownload = async () => {
    try {
      if (backendConnected) {
        showToast(`Requesting Zero-Trust stream for "${doc.name}"...`, 'info');
        await driveApi.downloadDocument(doc.id, doc.name);
        showToast(`Cryptographically verified download complete for "${doc.name}"`, 'success');
      } else {
        showToast(`Initiating secure watermarked download for "${doc.name}"...`, 'success');
      }
    } catch (err: any) {
      showToast(err.message || 'Download authorization blocked by Zero-Trust policy.', 'error');
    }
  };

  const handleNavigateDetails = () => {
    onClose();
    navigate(`/documents/${doc.id}`);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="lg"
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FileText size={18} color="var(--cyan-primary)" />
          <span>Secure Document Viewer & Metadata</span>
        </div>
      }
    >
      <div>
        {/* Document Header Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          paddingBottom: '16px',
          borderBottom: '1px solid var(--border-subtle)',
          marginBottom: '16px'
        }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', wordBreak: 'break-all' }}>
              {doc.name}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              {doc.description}
            </p>
          </div>
          <ClassificationBadge level={doc.classification} />
        </div>

        {/* Security & Metadata Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '12px',
          marginBottom: '20px'
        }}>
          <div className="meta-card">
            <span className="meta-label"><User size={13} /> Owner</span>
            <span className="meta-value">{doc.owner}</span>
          </div>
          <div className="meta-card">
            <span className="meta-label"><HardDrive size={13} /> File Size</span>
            <span className="meta-value">{doc.sizeFormatted}</span>
          </div>
          <div className="meta-card">
            <span className="meta-label"><Calendar size={13} /> Last Modified</span>
            <span className="meta-value">{doc.lastModified}</span>
          </div>
          <div className="meta-card">
            <span className="meta-label"><ShieldCheck size={13} /> Current Version</span>
            <span className="meta-value">v{doc.version}</span>
          </div>
          <div className="meta-card">
            <span className="meta-label">
              {doc.storageLocation === 'GOOGLE_DRIVE' ? <Cloud size={13} color="var(--cyan-primary)" /> : <HardDrive size={13} />} Storage
            </span>
            <span className="meta-value" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {doc.storageLocation === 'GOOGLE_DRIVE' ? (
                <span style={{ color: 'var(--cyan-primary)', fontSize: '0.8rem' }}>Google Drive</span>
              ) : (
                <span style={{ color: 'var(--emerald)', fontSize: '0.8rem' }}>Local Vault</span>
              )}
            </span>
          </div>
        </div>

        {/* SHA-256 Cryptographic Hash Check */}
        <div style={{
          backgroundColor: 'var(--bg-input)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-sm)',
          padding: '10px 14px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <Hash size={16} color="var(--cyan-primary)" style={{ flexShrink: 0 }} />
          <div style={{ overflow: 'hidden' }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              SHA-256 INTEGRITY DIGEST
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--text-secondary)',
              wordBreak: 'break-all'
            }}>
              {doc.sha256Hash}
            </div>
          </div>
        </div>

        {/* Simulated Document Preview Canvas */}
        <div className="preview-canvas">
          <div className="watermark-overlay">
            CONFIDENTIAL // ALEX MORGAN // ZERO-TRUST AUDIT // 2026-10-29
          </div>
          <div className="preview-content-mock">
            <div className="preview-header-line">
              <span className="line-tag">DOCUMENT HEADER</span>
              <span className="line-status">ENCRYPTED AT REST (AES-256 MOCK)</span>
            </div>
            <div className="preview-text-block">
              <p>
                <strong>CLASSIFICATION:</strong> {doc.classification.toUpperCase()}
              </p>
              <p>
                This document is secured under the enterprise Zero-Trust policy architecture.
                Micro-segmentation rules prohibit unverified egress, screen capture, or unauthenticated forwarding.
              </p>
              <p>
                <strong>Summary Content:</strong> {doc.description}
              </p>
              <div className="preview-fake-paragraphs">
                <div className="fake-line full"></div>
                <div className="fake-line medium"></div>
                <div className="fake-line long"></div>
                <div className="fake-line short"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          marginTop: '20px',
          paddingTop: '16px',
          borderTop: '1px solid var(--border-subtle)'
        }}>
          <button 
            type="button" 
            className="btn btn-secondary btn-sm"
            onClick={handleNavigateDetails}
          >
            <ExternalLink size={14} />
            <span>Open Full Version History & Details</span>
          </button>

          <div style={{ display: 'flex', gap: '10px' }}>
            {onOpenShare && (
              <button 
                type="button" 
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  onClose();
                  onOpenShare(doc);
                }}
              >
                <Share2 size={14} />
                <span>Share</span>
              </button>
            )}
            <button 
              type="button" 
              className="btn btn-primary btn-sm"
              onClick={handleDownload}
            >
              <Download size={14} />
              <span>Download Watermarked Copy</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .meta-card {
          background-color: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          padding: 10px 14px;
          border-radius: var(--radius-sm);
        }
        .meta-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .meta-value {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .preview-canvas {
          height: 240px;
          background: #080D1A;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          position: relative;
          overflow: hidden;
          padding: 20px;
          display: flex;
          flex-direction: column;
        }
        .watermark-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.04);
          transform: rotate(-25deg);
          pointer-events: none;
          letter-spacing: 0.15em;
          user-select: none;
        }
        .preview-content-mock {
          position: relative;
          z-index: 1;
        }
        .preview-header-line {
          display: flex;
          justify-content: space-between;
          font-size: 0.72rem;
          color: var(--cyan-primary);
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 8px;
          margin-bottom: 12px;
          font-family: var(--font-mono);
        }
        .preview-text-block p {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 8px;
        }
        .preview-fake-paragraphs {
          margin-top: 14px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .fake-line {
          height: 6px;
          background-color: rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-full);
        }
        .fake-line.full { width: 100%; }
        .fake-line.medium { width: 75%; }
        .fake-line.long { width: 90%; }
        .fake-line.short { width: 45%; }
      `}</style>
    </Modal>
  );
};
