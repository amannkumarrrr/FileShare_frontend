import React, { useState, useMemo } from 'react';
import { 
  Activity, 
  Search, 
  Filter, 
  Download, 
  ShieldCheck, 
  ShieldAlert, 
  AlertTriangle, 
  Lock, 
  Info, 
  Eye, 
  Clock, 
  Terminal,
  FileText
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { StatusBadge } from '../components/common/Badge';
import { EmptyState } from '../components/common/EmptyState';
import { Modal } from '../components/common/Modal';
import { SecurityActivityItem, ActivityStatus, ActivityAction } from '../types';

export const SecurityActivity: React.FC = () => {
  const { securityActivities, showToast } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [actionFilter, setActionFilter] = useState('All');
  const [selectedActivity, setSelectedActivity] = useState<SecurityActivityItem | null>(null);

  const filteredActivities = useMemo(() => {
    return securityActivities.filter((act) => {
      const matchesSearch = 
        act.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
        act.userEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
        act.document.toLowerCase().includes(searchQuery.toLowerCase()) ||
        act.details.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus = 
        statusFilter === 'All' || act.status === statusFilter;

      const matchesAction = 
        actionFilter === 'All' || act.action === actionFilter;

      return matchesSearch && matchesStatus && matchesAction;
    });
  }, [securityActivities, searchQuery, statusFilter, actionFilter]);

  const handleExportLogs = () => {
    const csvContent = 
      "data:text/csv;charset=utf-8," + 
      ["Timestamp,User,Email,Action,Document,Status,IP,Device,Details"]
        .concat(
          filteredActivities.map(
            (a) => `"${a.timestamp}","${a.user}","${a.userEmail}","${a.action}","${a.document}","${a.status}","${a.ipAddress}","${a.device}","${a.details.replace(/"/g, '""')}"`
          )
        ).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `zero_trust_audit_log_${new Date().toISOString().substring(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('Zero-Trust audit trail CSV exported.', 'success');
  };

  return (
    <div className="security-activity-page">
      <div className="page-header" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
        <div>
          <h1 className="page-title">
            <Activity size={24} color="var(--cyan-primary)" />
            <span>Zero-Trust Security & Audit Trail</span>
          </h1>
          <p className="page-subtitle">
            Immutable log of continuous authentication challenges, authorization events, and file access tokens.
          </p>
        </div>
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={handleExportLogs}
        >
          <Download size={14} />
          <span>Export Audit Trail (CSV)</span>
        </button>
      </div>

      {/* Security Banner Alert */}
      <div className="security-status-banner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ShieldCheck size={18} color="var(--emerald)" />
          <span>
            <strong>SIEM & Audit Status:</strong> All mock events cryptographically bound. Real-time Splunk/Elastic SIEM ingestion will be connected in Phase 3.
          </span>
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem' }}>
          {securityActivities.length} Events Logged
        </span>
      </div>

      {/* Toolbar */}
      <div className="zt-card" style={{ padding: '16px 20px', marginBottom: '24px', display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: '260px' }}>
          <Search size={16} style={{ position: 'absolute', left: '12px', top: '11px', color: 'var(--text-muted)' }} />
          <input
            type="text"
            className="form-input"
            style={{ paddingLeft: '36px' }}
            placeholder="Search by user, document, or event details..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Status:</span>
            <select
              className="form-select"
              style={{ width: 'auto', padding: '6px 10px', fontSize: '0.8rem' }}
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Success">Success</option>
              <option value="Blocked">Blocked</option>
              <option value="Warning">Warning</option>
              <option value="Flagged">Flagged</option>
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Action:</span>
            <select
              className="form-select"
              style={{ width: 'auto', padding: '6px 10px', fontSize: '0.8rem' }}
              value={actionFilter}
              onChange={(e) => setActionFilter(e.target.value)}
            >
              <option value="All">All Actions</option>
              <option value="LOGIN_SUCCESS">LOGIN_SUCCESS</option>
              <option value="LOGIN_FAILED">LOGIN_FAILED</option>
              <option value="FILE_ACCESS">FILE_ACCESS</option>
              <option value="FILE_DOWNLOAD">FILE_DOWNLOAD</option>
              <option value="FILE_UPLOAD">FILE_UPLOAD</option>
              <option value="SHARE_CREATED">SHARE_CREATED</option>
              <option value="SHARE_REVOKED">SHARE_REVOKED</option>
              <option value="PERMISSION_CHANGE">PERMISSION_CHANGE</option>
              <option value="ACCESS_BLOCKED">ACCESS_BLOCKED</option>
              <option value="POLICY_VIOLATION">POLICY_VIOLATION</option>
            </select>
          </div>
        </div>
      </div>

      {/* Activity Table */}
      {filteredActivities.length === 0 ? (
        <EmptyState
          title="No Audit Events Found"
          description="No security activities matched your query and filter criteria."
          actionText="Reset Filters"
          onAction={() => {
            setSearchQuery('');
            setStatusFilter('All');
            setActionFilter('All');
          }}
        />
      ) : (
        <div className="table-responsive">
          <table className="zt-table">
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>Identity</th>
                <th>Action Type</th>
                <th>Target Resource</th>
                <th>Status</th>
                <th>Origin IP / Node</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredActivities.map((act) => (
                <tr key={act.id}>
                  <td style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {act.timestamp}
                  </td>
                  <td>
                    <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {act.user}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {act.userEmail}
                    </div>
                  </td>
                  <td>
                    <span style={{
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-mono)',
                      background: 'rgba(6, 182, 212, 0.1)',
                      color: 'var(--cyan-primary)',
                      padding: '2px 8px',
                      borderRadius: '4px'
                    }}>
                      {act.action}
                    </span>
                  </td>
                  <td style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={act.document}>
                    {act.document}
                  </td>
                  <td>
                    <StatusBadge status={act.status} />
                  </td>
                  <td style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {act.ipAddress.split(' ')[0]}
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn-icon"
                      title="Inspect Security Audit Packet"
                      onClick={() => setSelectedActivity(act)}
                    >
                      <Eye size={15} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Activity Inspector Modal */}
      <Modal
        isOpen={Boolean(selectedActivity)}
        onClose={() => setSelectedActivity(null)}
        title={
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Terminal size={18} color="var(--cyan-primary)" />
            <span>Zero-Trust Security Event Inspector</span>
          </div>
        }
      >
        {selectedActivity && (
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px',
              paddingBottom: '12px',
              borderBottom: '1px solid var(--border-subtle)'
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                color: 'var(--cyan-primary)',
                fontWeight: 700
              }}>
                {selectedActivity.action}
              </span>
              <StatusBadge status={selectedActivity.status} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '16px' }}>
              <div style={{ background: 'var(--bg-elevated)', padding: '10px 14px', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>User Identity</div>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginTop: '2px' }}>{selectedActivity.user}</div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>{selectedActivity.userEmail}</div>
              </div>

              <div style={{ background: 'var(--bg-elevated)', padding: '10px 14px', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Timestamp</div>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginTop: '2px', fontFamily: 'var(--font-mono)' }}>
                  {selectedActivity.timestamp}
                </div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>Event ID: {selectedActivity.id}</div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Target Resource / Endpoint</label>
              <div style={{
                background: 'var(--bg-input)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '8px 12px',
                fontSize: '0.85rem',
                color: 'var(--text-primary)'
              }}>
                {selectedActivity.document}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Client Host & Posture Details</label>
              <div style={{
                background: 'var(--bg-input)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '8px 12px',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-mono)'
              }}>
                <div><strong>Source IP:</strong> {selectedActivity.ipAddress}</div>
                <div style={{ marginTop: '4px' }}><strong>Host Device:</strong> {selectedActivity.device}</div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Security Audit Telemetry Details</label>
              <div style={{
                background: 'rgba(6, 182, 212, 0.06)',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                borderRadius: 'var(--radius-sm)',
                padding: '12px',
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.5
              }}>
                {selectedActivity.details}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => setSelectedActivity(null)}
              >
                Close Inspector
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
