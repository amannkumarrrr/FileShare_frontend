import React, { useState, useEffect } from 'react';
import { Modal } from '../common/Modal';
import { UserItem, UserRole, UserStatus, ClassificationLevel } from '../../types';
import { useApp } from '../../context/AppContext';
import { UserCheck, Shield, Trash2 } from 'lucide-react';

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserItem | null;
}

export const EditUserModal: React.FC<EditUserModalProps> = ({
  isOpen,
  onClose,
  user
}) => {
  const { updateUser, deleteUser, showToast } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState<UserRole>('Standard User');
  const [status, setStatus] = useState<UserStatus>('Active');
  const [clearanceLevel, setClearanceLevel] = useState<ClassificationLevel>('Internal');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setDepartment(user.department);
      setRole(user.role);
      setStatus(user.status);
      setClearanceLevel(user.clearanceLevel);
    }
  }, [user]);

  if (!user) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser(user.id, {
      name,
      email,
      department,
      role,
      status,
      clearanceLevel
    });
    onClose();
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to remove ${user.name} from the Zero-Trust directory?`)) {
      deleteUser(user.id);
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <UserCheck size={18} color="var(--cyan-primary)" />
          <span>Edit User Clearance & Role</span>
        </div>
      }
    >
      <form onSubmit={handleSave}>
        <div className="form-group">
          <label className="form-label required">Full Name</label>
          <input
            type="text"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label required">Work Email</label>
          <input
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Department</label>
          <input
            type="text"
            className="form-input"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label className="form-label">Role</label>
            <select
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value as UserRole)}
            >
              <option value="Standard User">Standard User</option>
              <option value="Security Officer">Security Officer</option>
              <option value="Compliance Officer">Compliance Officer</option>
              <option value="Auditor">Auditor</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div>
            <label className="form-label">Status</label>
            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value as UserStatus)}
            >
              <option value="Active">Active</option>
              <option value="Pending MFA">Pending MFA</option>
              <option value="Suspended">Suspended</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Zero-Trust Clearance Level</label>
          <select
            className="form-select"
            value={clearanceLevel}
            onChange={(e) => setClearanceLevel(e.target.value as ClassificationLevel)}
          >
            <option value="Public">Public (Level 1)</option>
            <option value="Internal">Internal (Level 2)</option>
            <option value="Confidential">Confidential (Level 3)</option>
            <option value="Highly Confidential">Highly Confidential (Level 4)</option>
          </select>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '24px',
          paddingTop: '16px',
          borderTop: '1px solid var(--border-subtle)'
        }}>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={handleDelete}
          >
            <Trash2 size={14} />
            <span>Delete User</span>
          </button>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button type="button" className="btn btn-secondary btn-sm" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary btn-sm">
              Update User
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};
