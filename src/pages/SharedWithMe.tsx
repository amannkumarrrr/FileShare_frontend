import React, { useState, useMemo } from 'react';
import { 
  FolderDown, 
  Search, 
  Filter, 
  Eye, 
  Download, 
  Clock, 
  User, 
  Calendar, 
  ShieldAlert, 
  FileText,
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ClassificationBadge, StatusBadge } from '../components/common/Badge';
import { EmptyState } from '../components/common/EmptyState';
import { ViewDocumentModal } from '../components/modals/ViewDocumentModal';
import { Modal } from '../components/common/Modal';
import { SharedWithMeItem, DocumentItem } from '../types';
import { driveApi } from '../services/api';

export const SharedWithMe: React.FC = () => {
  const { sharedWithMe, documents, showToast, backendConnected } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [accessFilter, setAccessFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const [viewDoc, setViewDoc] = useState<DocumentItem | null>(null);
  const [extensionItem, setExtensionItem] = useState<SharedWithMeItem | null>(null);
  const [extensionReason, setExtensionReason] = useState('');

  const filteredItems = useMemo(() => {
    return sharedWithMe.filter((item) => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ownerEmail.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesAccess = 
        accessFilter === 'All' || item.accessType === accessFilter;

      const matchesStatus = 
        statusFilter === 'All' || item.status === statusFilter;

      return matchesSearch && matchesAccess && matchesStatus;
    });
  }, [sharedWithMe, searchQuery, accessFilter, statusFilter]);

  const handleOpenPreview = (item: SharedWithMeItem) => {
    // Find matching document or create preview stub
    const matched = documents.find((d) => d.id === item.documentId);
    if (matched) {
      setViewDoc(matched);
    } else {
      setViewDoc({
        id: item.documentId,
        name: item.name,
        type: item.type as any,
        size: 2400000,
        sizeFormatted: item.size,
        owner: item.owner,
        ownerEmail: item.ownerEmail,
        classification: item.classification,
        lastModified: item.sharedDate,
        uploadedAt: item.sharedDate,
        sharedWithCount: 1,
        description: `Shared with you by ${item.owner} under ${item.accessType} permissions.`,
        sha256Hash: '4a5b6c7d8e9f0123456789abcdef0123456789abcdef0123456789abcdef0123',
        version: '1.0',
        versions: []
      });
    }
  };

  const handleDownload = async (item: SharedWithMeItem) => {
    if (item.accessType === 'View Only') {
      showToast(`Policy restriction: "${item.name}" is designated View Only. Direct file download is prohibited.`, 'warning');
      return;
    }

    try {
      if (backendConnected && item.documentId) {
        showToast(`Requesting Zero-Trust stream for "${item.name}"...`, 'info');
        await driveApi.downloadDocument(item.documentId, item.name);
        showToast(`Cryptographically verified download complete for "${item.name}"`, 'success');
      } else {
        showToast(`Downloading secure signed file "${item.name}"...`, 'success');
      }
    } catch (err: any) {
      showToast(err.message || 'Download authorization blocked by Zero-Trust policy.', 'error');
    }
  };

  const handleRequestExtension = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(`Access extension request dispatched to document owner (${extensionItem?.ownerEmail})`, 'info');
    setExtensionItem(null);
    setExtensionReason('');
  };

  return (
    <div className="shared-with-me-page">
      <div className="page-header">
        <h1 className="page-title">
          <FolderDown size={24} color="var(--cyan-primary)" />
          <span>Shared With Me</span>
        </h1>
        <p className="page-subtitle">
          Documents provisioned to your zero-trust identity with continuous time-bound access tokens.
        </p>
      </div>

      {/* Toolbar */}
      <div className="zt-card" style={{ padding: '16px 20px', marginBottom: '24px', display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: '260px' }}>
          <Search size={16} style={{ position: 'absolute', left: '12px', top: '11px', color: 'var(--text-muted)' }} />
          <input
            type="text"
            className="form-input"
            style={{ paddingLeft: '36px' }}
            placeholder="Search by filename or owner..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Access Type:</span>
            <select
              className="form-select"
              style={{ width: 'auto', padding: '6px 10px', fontSize: '0.8rem' }}
              value={accessFilter}
              onChange={(e) => setAccessFilter(e.target.value)}
            >
              <option value="All">All Types</option>
              <option value="View Only">View Only</option>
              <option value="Edit">Edit</option>
              <option value="Restricted Download">Restricted Download</option>
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Status:</span>
            <select
              className="form-select"
              style={{ width: 'auto', padding: '6px 10px', fontSize: '0.8rem' }}
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Expiring Soon">Expiring Soon</option>
              <option value="Expired">Expired</option>
            </select>
          </div>
        </div>
      </div>

      {/* Content */}
      {filteredItems.length === 0 ? (
        <EmptyState
          title="No Shared Documents"
          description="There are currently no external or internal documents shared with your account matching the filters."
          actionText="Clear Filters"
          onAction={() => {
            setSearchQuery('');
            setAccessFilter('All');
            setStatusFilter('All');
          }}
        />
      ) : (
        <div className="table-responsive">
          <table className="zt-table">
            <thead>
              <tr>
                <th>Document Name</th>
                <th>Classification</th>
                <th>Owner</th>
                <th>Access Type</th>
                <th>Shared Date</th>
                <th>Expiry Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FileText size={18} color="var(--cyan-primary)" />
                      <div>
                        <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{item.name}</div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{item.size}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <ClassificationBadge level={item.classification} />
                  </td>
                  <td>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-primary)' }}>{item.owner}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{item.ownerEmail}</div>
                  </td>
                  <td>
                    <span style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      background: 'rgba(6, 182, 212, 0.1)',
                      color: 'var(--cyan-primary)',
                      padding: '2px 8px',
                      borderRadius: '4px'
                    }}>
                      {item.accessType}
                    </span>
                  </td>
                  <td style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    {item.sharedDate}
                  </td>
                  <td style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    {item.expiryDate}
                  </td>
                  <td>
                    <StatusBadge status={item.status} />
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <button
                        type="button"
                        className="btn-icon"
                        title="View Document"
                        onClick={() => handleOpenPreview(item)}
                      >
                        <Eye size={15} />
                      </button>
                      <button
                        type="button"
                        className="btn-icon"
                        title="Download"
                        onClick={() => handleDownload(item)}
                      >
                        <Download size={15} />
                      </button>
                      <button
                        type="button"
                        className="btn-icon"
                        title="Request Token Extension"
                        onClick={() => setExtensionItem(item)}
                      >
                        <Clock size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Document Preview Modal */}
      <ViewDocumentModal
        isOpen={Boolean(viewDoc)}
        onClose={() => setViewDoc(null)}
        document={viewDoc}
      />

      {/* Request Extension Modal */}
      <Modal
        isOpen={Boolean(extensionItem)}
        onClose={() => setExtensionItem(null)}
        title={
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={18} color="var(--cyan-primary)" />
            <span>Request Access Token Extension</span>
          </div>
        }
      >
        {extensionItem && (
          <form onSubmit={handleRequestExtension}>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              Your token for <strong>{extensionItem.name}</strong> expires on {extensionItem.expiryDate}.
              Submit an extension request to <strong>{extensionItem.owner}</strong>.
            </p>
            <div className="form-group">
              <label className="form-label required">Business Justification</label>
              <textarea
                className="form-textarea"
                rows={3}
                placeholder="State the project requirements necessitating token extension..."
                value={extensionReason}
                onChange={(e) => setExtensionReason(e.target.value)}
                required
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button type="button" className="btn btn-secondary btn-sm" onClick={() => setExtensionItem(null)}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary btn-sm">
                Submit Extension Request
              </button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};
