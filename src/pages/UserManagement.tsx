import React, { useState, useMemo } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  UserPlus, 
  Edit, 
  Trash2, 
  ShieldCheck, 
  Building, 
  Mail,
  UserCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { StatusBadge, ClassificationBadge } from '../components/common/Badge';
import { EmptyState } from '../components/common/EmptyState';
import { AddUserModal } from '../components/modals/AddUserModal';
import { EditUserModal } from '../components/modals/EditUserModal';
import { UserItem, UserRole, UserStatus } from '../types';

export const UserManagement: React.FC = () => {
  const { users, deleteUser } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const [addUserOpen, setAddUserOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<UserItem | null>(null);

  const filteredUsers = useMemo(() => {
    return users.filter((u) => {
      const matchesSearch = 
        u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.department.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesRole = 
        roleFilter === 'All' || u.role === roleFilter;

      const matchesStatus = 
        statusFilter === 'All' || u.status === statusFilter;

      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [users, searchQuery, roleFilter, statusFilter]);

  const handleDeleteQuick = (u: UserItem) => {
    if (window.confirm(`Remove user ${u.name} from the Zero-Trust directory?`)) {
      deleteUser(u.id);
    }
  };

  return (
    <div className="user-management-page">
      <div className="page-header" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
        <div>
          <h1 className="page-title">
            <Users size={24} color="var(--cyan-primary)" />
            <span>Identity & User Access Directory</span>
          </h1>
          <p className="page-subtitle">
            Configure Zero-Trust user security clearances, roles, and device posture compliance states.
          </p>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setAddUserOpen(true)}
        >
          <UserPlus size={16} />
          <span>Provision New User</span>
        </button>
      </div>

      {/* Toolbar */}
      <div className="zt-card" style={{ padding: '16px 20px', marginBottom: '24px', display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: '260px' }}>
          <Search size={16} style={{ position: 'absolute', left: '12px', top: '11px', color: 'var(--text-muted)' }} />
          <input
            type="text"
            className="form-input"
            style={{ paddingLeft: '36px' }}
            placeholder="Search by user name, email, department..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Role:</span>
            <select
              className="form-select"
              style={{ width: 'auto', padding: '6px 10px', fontSize: '0.8rem' }}
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
            >
              <option value="All">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="Security Officer">Security Officer</option>
              <option value="Compliance Officer">Compliance Officer</option>
              <option value="Auditor">Auditor</option>
              <option value="Standard User">Standard User</option>
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
              <option value="Pending MFA">Pending MFA</option>
              <option value="Suspended">Suspended</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Table */}
      {filteredUsers.length === 0 ? (
        <EmptyState
          title="No Users Found"
          description="No identity records matched your current query or role filter."
          actionText="Clear Filters"
          onAction={() => {
            setSearchQuery('');
            setRoleFilter('All');
            setStatusFilter('All');
          }}
        />
      ) : (
        <div className="table-responsive">
          <table className="zt-table">
            <thead>
              <tr>
                <th>User Identity</th>
                <th>Department</th>
                <th>Role</th>
                <th>Clearance Level</th>
                <th>Status</th>
                <th>Last Active</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((u) => (
                <tr key={u.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #0284C7, #0F766E)',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '0.78rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        {u.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{u.name}</div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{u.email}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    {u.department}
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
                      {u.role}
                    </span>
                  </td>
                  <td>
                    <ClassificationBadge level={u.clearanceLevel} showIcon={false} />
                  </td>
                  <td>
                    <StatusBadge status={u.status} />
                  </td>
                  <td style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {u.lastActive}
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <button
                        type="button"
                        className="btn-icon"
                        title="Edit User Clearance & Role"
                        onClick={() => setEditingUser(u)}
                      >
                        <Edit size={15} />
                      </button>
                      <button
                        type="button"
                        className="btn-icon"
                        style={{ color: 'var(--rose)' }}
                        title="Delete User Record"
                        onClick={() => handleDeleteQuick(u)}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modals */}
      <AddUserModal
        isOpen={addUserOpen}
        onClose={() => setAddUserOpen(false)}
      />

      <EditUserModal
        isOpen={Boolean(editingUser)}
        onClose={() => setEditingUser(null)}
        user={editingUser}
      />
    </div>
  );
};
