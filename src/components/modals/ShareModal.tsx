import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { DocumentItem } from '../../types';
import { useApp } from '../../context/AppContext';
import { Share2, Shield, Calendar, Mail, UserCheck } from 'lucide-react';
import { ClassificationBadge } from '../common/Badge';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  document: DocumentItem | null;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  document: doc
}) => {
  const { shareDocument, showToast } = useApp();

  const [recipientEmail, setRecipientEmail] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [permission, setPermission] = useState<'View Only' | 'Can Download' | 'Full Access'>('View Only');
  const [expiryDays, setExpiryDays] = useState('14');
  const [oneTimeAccess, setOneTimeAccess] = useState(false);

  if (!doc) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipientEmail) {
      showToast('Please specify a recipient email address', 'warning');
      return;
    }

    const expiryDate = new Date(Date.now() + parseInt(expiryDays, 10) * 24 * 60 * 60 * 1000)
      .toISOString()
      .replace('T', ' ')
      .substring(0, 16);

    shareDocument(doc.id, recipientEmail, recipientName, permission, expiryDate, oneTimeAccess);
    onClose();
    setRecipientEmail('');
    setRecipientName('');
    setOneTimeAccess(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Share2 size={18} color="var(--cyan-primary)" />
          <span>Zero-Trust Document Sharing</span>
        </div>
      }
    >
      <form onSubmit={handleSubmit}>
        {/* Document Target Card */}
        <div style={{
          backgroundColor: 'var(--bg-elevated)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-sm)',
          padding: '12px 16px',
          marginBottom: '20px'
        }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
            TARGET RESOURCE
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
            <span style={{ fontWeight: 600, color: 'var(--text-primary)', wordBreak: 'break-all' }}>
              {doc.name}
            </span>
            <ClassificationBadge level={doc.classification} showIcon={false} />
          </div>
        </div>

        {/* Form fields */}
        <div className="form-group">
          <label className="form-label required">Recipient Work Email</label>
          <div style={{ position: 'relative' }}>
            <Mail size={16} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-muted)' }} />
            <input
              type="email"
              className="form-input"
              style={{ paddingLeft: '38px' }}
              placeholder="e.g. colleague@zerotrust.sec"
              value={recipientEmail}
              onChange={(e) => setRecipientEmail(e.target.value)}
              required
            />
          </div>
          <span className="form-hint">Recipient must pass continuous Zero-Trust posture verification.</span>
        </div>

        <div className="form-group">
          <label className="form-label">Recipient Full Name (Optional)</label>
          <div style={{ position: 'relative' }}>
            <UserCheck size={16} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-muted)' }} />
            <input
              type="text"
              className="form-input"
              style={{ paddingLeft: '38px' }}
              placeholder="e.g. Elena Rostova"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '18px' }}>
          <div>
            <label className="form-label">Granted Access Level</label>
            <select
              className="form-select"
              value={permission}
              onChange={(e) => setPermission(e.target.value as any)}
            >
              <option value="View Only">View Only (Protected Preview)</option>
              <option value="Can Download">Can Download (Signed Watermark)</option>
              <option value="Full Access">Full Access (Edit & Re-share)</option>
            </select>
          </div>

          <div>
            <label className="form-label">Access Expiration</label>
            <div style={{ position: 'relative' }}>
              <select
                className="form-select"
                value={expiryDays}
                onChange={(e) => setExpiryDays(e.target.value)}
              >
                <option value="1">24 Hours (Ephemeral Token)</option>
                <option value="7">7 Days</option>
                <option value="14">14 Days (Standard)</option>
                <option value="30">30 Days (Maximum)</option>
              </select>
            </div>
          </div>
        </div>

        {/* One-Time Access Checkbox */}
        <div 
          style={{
            backgroundColor: 'var(--bg-elevated)',
            border: `1px solid ${oneTimeAccess ? 'var(--cyan-primary)' : 'var(--border-subtle)'}`,
            borderRadius: 'var(--radius-sm)',
            padding: '12px 14px',
            marginBottom: '18px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onClick={() => setOneTimeAccess(!oneTimeAccess)}
        >
          <input
            type="checkbox"
            checked={oneTimeAccess}
            onChange={(e) => setOneTimeAccess(e.target.checked)}
            style={{ marginTop: '3px', accentColor: 'var(--cyan-primary)', cursor: 'pointer' }}
          />
          <div>
            <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.86rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>Single-Use Token (One-Time Access)</span>
              <span className="tab-pill" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#F87171', fontSize: '0.65rem' }}>
                Self-Destruct
              </span>
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', marginTop: '2px', lineHeight: 1.4 }}>
              Zero-Trust ephemeral grant: the link and permissions will be permanently revoked and invalidated immediately after the recipient downloads or opens the document once.
            </div>
          </div>
        </div>

        {/* Zero-Trust Notice */}
        <div style={{
          backgroundColor: 'rgba(6, 182, 212, 0.08)',
          border: '1px solid rgba(6, 182, 212, 0.25)',
          borderRadius: 'var(--radius-sm)',
          padding: '12px',
          display: 'flex',
          gap: '10px',
          fontSize: '0.78rem',
          color: 'var(--text-secondary)',
          marginBottom: '20px'
        }}>
          <Shield size={18} color="var(--cyan-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <strong>Zero-Trust Protocol:</strong> Ephemeral links are single-identity bound. Access logs will be recorded in the security audit trail.
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            <Share2 size={16} />
            <span>Generate Secure Share</span>
          </button>
        </div>
      </form>
    </Modal>
  );
};
