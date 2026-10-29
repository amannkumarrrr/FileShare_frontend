import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { SharedByMeItem } from '../../types';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, UserCheck, Trash2, Calendar, Lock } from 'lucide-react';
import { ClassificationBadge } from '../common/Badge';

interface EditPermissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  sharedItem: SharedByMeItem | null;
}

export const EditPermissionsModal: React.FC<EditPermissionsModalProps> = ({
  isOpen,
  onClose,
  sharedItem
}) => {
  const { updateSharedPermission, revokeSharedAccess } = useApp();

  const [permission, setPermission] = useState<'View Only' | 'Can Download' | 'Full Access'>(
    sharedItem?.permissions || 'View Only'
  );
  const [expiryDate, setExpiryDate] = useState(
    sharedItem?.expiryDate || '2026-11-30 23:59'
  );

  // Sync state if modal opens with fresh item
  React.useEffect(() => {
    if (sharedItem) {
      setPermission(sharedItem.permissions);
      setExpiryDate(sharedItem.expiryDate);
    }
  }, [sharedItem]);

  if (!sharedItem) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSharedPermission(sharedItem.id, permission, expiryDate);
    onClose();
  };

  const handleRevoke = () => {
    if (window.confirm(`Are you sure you want to immediately revoke access for ${sharedItem.recipientEmail}?`)) {
      revokeSharedAccess(sharedItem.id);
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldCheck size={18} color="var(--cyan-primary)" />
          <span>Manage Sharing Permissions</span>
        </div>
      }
    >
      <form onSubmit={handleSave}>
        {/* Recipient & Document info */}
        <div style={{
          backgroundColor: 'var(--bg-elevated)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-sm)',
          padding: '14px',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                DOCUMENT
              </div>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginTop: '2px' }}>
                {sharedItem.documentName}
              </div>
            </div>
            <ClassificationBadge level={sharedItem.classification} showIcon={false} />
          </div>

          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '8px', marginTop: '8px' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              RECIPIENT
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
              <UserCheck size={14} color="var(--cyan-primary)" />
              <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                {sharedItem.recipientName} ({sharedItem.recipientEmail})
              </span>
            </div>
          </div>
        </div>

        {/* Permissions Select */}
        <div className="form-group">
          <label className="form-label">Access Permissions Level</label>
          <div style={{ position: 'relative' }}>
            <select
              className="form-select"
              value={permission}
              onChange={(e) => setPermission(e.target.value as any)}
            >
              <option value="View Only">View Only (Strict In-Browser Preview)</option>
              <option value="Can Download">Can Download (Signed & Watermarked)</option>
              <option value="Full Access">Full Access (Edit & Manage)</option>
            </select>
          </div>
          <span className="form-hint">
            Zero-Trust policy applies continuous posture validation regardless of granted level.
          </span>
        </div>

        {/* Expiry Date */}
        <div className="form-group">
          <label className="form-label">Access Expiration Timestamp</label>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              className="form-input"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="YYYY-MM-DD HH:mm"
            />
          </div>
          <span className="form-hint">Format: YYYY-MM-DD HH:mm (Zero-Trust auto-expiry)</span>
        </div>

        {/* Modal Actions */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '24px',
          paddingTop: '16px',
          borderTop: '1px solid var(--border-subtle)'
        }}>
          {sharedItem.status !== 'Revoked' ? (
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={handleRevoke}
            >
              <Trash2 size={14} />
              <span>Revoke Access</span>
            </button>
          ) : (
            <span style={{ fontSize: '0.8rem', color: 'var(--rose)' }}>Access is currently revoked</span>
          )}

          <div style={{ display: 'flex', gap: '10px' }}>
            <button type="button" className="btn btn-secondary btn-sm" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary btn-sm">
              Save Permissions
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};
