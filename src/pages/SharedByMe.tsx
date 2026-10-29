import React, { useState, useMemo } from 'react';
import { 
  FolderUp, 
  Search, 
  Filter, 
  UserCheck, 
  ShieldCheck, 
  Calendar, 
  Clock, 
  Edit3, 
  Trash2, 
  FileText,
  AlertCircle,
  Cloud,
  Zap
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ClassificationBadge, StatusBadge } from '../components/common/Badge';
import { EmptyState } from '../components/common/EmptyState';
import { EditPermissionsModal } from '../components/modals/EditPermissionsModal';
import { SharedByMeItem } from '../types';

export const SharedByMe: React.FC = () => {
  const { sharedByMe, revokeSharedAccess } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [permissionFilter, setPermissionFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const [editingItem, setEditingItem] = useState<SharedByMeItem | null>(null);

  const filteredItems = useMemo(() => {
    return sharedByMe.filter((item) => {
      const matchesSearch = 
        item.documentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.recipientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.recipientEmail.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesPerm = 
        permissionFilter === 'All' || item.permissions === permissionFilter;

      const matchesStatus = 
        statusFilter === 'All' || item.status === statusFilter;

      return matchesSearch && matchesPerm && matchesStatus;
    });
  }, [sharedByMe, searchQuery, permissionFilter, statusFilter]);

  const handleRevokeQuick = (item: SharedByMeItem) => {
    if (window.confirm(`Revoke secure access for ${item.recipientEmail}?`)) {
      revokeSharedAccess(item.id);
    }
  };

  return (
    <div className="shared-by-me-page">
      <div className="page-header">
        <h1 className="page-title">
          <FolderUp size={24} color="var(--cyan-primary)" />
          <span>Shared By Me</span>
        </h1>
        <p className="page-subtitle">
          Manage outgoing Zero-Trust access grants, configure ephemeral permissions, and audit active recipients.
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
            placeholder="Search by recipient or document..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Permissions:</span>
            <select
              className="form-select"
              style={{ width: 'auto', padding: '6px 10px', fontSize: '0.8rem' }}
              value={permissionFilter}
              onChange={(e) => setPermissionFilter(e.target.value)}
            >
              <option value="All">All Permissions</option>
              <option value="View Only">View Only</option>
              <option value="Can Download">Can Download</option>
              <option value="Full Access">Full Access</option>
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
              <option value="Revoked">Revoked</option>
              <option value="Expired">Expired</option>
            </select>
          </div>
        </div>
      </div>

      {/* Items Table */}
      {filteredItems.length === 0 ? (
        <EmptyState
          title="No Active Shared Grants"
          description="You have not created any shared links matching the current filters. Go to My Documents to share a file."
          actionText="Clear Filters"
          onAction={() => {
            setSearchQuery('');
            setPermissionFilter('All');
            setStatusFilter('All');
          }}
        />
      ) : (
        <div className="table-responsive">
          <table className="zt-table">
            <thead>
              <tr>
                <th>Document</th>
                <th>Classification</th>
                <th>Recipient</th>
                <th>Granted Permissions</th>
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
                        <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                          {item.documentName}
                        </span>
                        {item.storageLocation === 'GOOGLE_DRIVE' && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.68rem', color: 'var(--cyan-primary)', marginTop: '2px' }}>
                            <Cloud size={11} /> Google Drive API v3
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td>
                    <ClassificationBadge level={item.classification} showIcon={false} />
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <UserCheck size={14} color="var(--cyan-primary)" />
                      <div>
                        <div style={{ fontSize: '0.82rem', color: 'var(--text-primary)' }}>{item.recipientName}</div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{item.recipientEmail}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        background: 'rgba(6, 182, 212, 0.1)',
                        color: 'var(--cyan-primary)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        width: 'fit-content'
                      }}>
                        {item.permissions}
                      </span>
                      {item.oneTimeAccess && (
                        <span style={{
                          fontSize: '0.68rem',
                          background: 'rgba(239, 68, 68, 0.12)',
                          color: '#F87171',
                          padding: '1px 6px',
                          borderRadius: '4px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '3px',
                          width: 'fit-content'
                        }}>
                          <Zap size={10} /> 1-Time ({item.accessCount || 0}/1 used)
                        </span>
                      )}
                    </div>
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
                        title="Manage Permissions & Expiry"
                        onClick={() => setEditingItem(item)}
                      >
                        <Edit3 size={15} />
                      </button>
                      {item.status !== 'Revoked' && (
                        <button
                          type="button"
                          className="btn-icon"
                          style={{ color: 'var(--rose)' }}
                          title="Immediately Revoke Access"
                          onClick={() => handleRevokeQuick(item)}
                        >
                          <Trash2 size={15} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit Permissions Modal */}
      <EditPermissionsModal
        isOpen={Boolean(editingItem)}
        onClose={() => setEditingItem(null)}
        sharedItem={editingItem}
      />
    </div>
  );
};
