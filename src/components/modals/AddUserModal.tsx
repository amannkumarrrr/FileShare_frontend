import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { useApp } from '../../context/AppContext';
import { UserPlus, Shield, Mail, User, Building } from 'lucide-react';
import { UserRole, ClassificationLevel } from '../../types';

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddUserModal: React.FC<AddUserModalProps> = ({ isOpen, onClose }) => {
  const { addUser, showToast } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('Cybersecurity Operations');
  const [role, setRole] = useState<UserRole>('Standard User');
  const [clearanceLevel, setClearanceLevel] = useState<ClassificationLevel>('Internal');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      showToast('Name and email are required', 'warning');
      return;
    }

    addUser({
      name,
      email,
      department,
      role,
      status: 'Active',
      clearanceLevel
    });

    setName('');
    setEmail('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <UserPlus size={18} color="var(--cyan-primary)" />
          <span>Provision New Zero-Trust Identity</span>
        </div>
      }
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label required">Full Name</label>
          <div style={{ position: 'relative' }}>
            <User size={16} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-muted)' }} />
            <input
              type="text"
              className="form-input"
              style={{ paddingLeft: '38px' }}
              placeholder="e.g. Jordan Hayes"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label required">Work Email Address</label>
          <div style={{ position: 'relative' }}>
            <Mail size={16} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-muted)' }} />
            <input
              type="email"
              className="form-input"
              style={{ paddingLeft: '38px' }}
              placeholder="e.g. jordan.hayes@zerotrust.sec"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Department / Unit</label>
          <div style={{ position: 'relative' }}>
            <Building size={16} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-muted)' }} />
            <input
              type="text"
              className="form-input"
              style={{ paddingLeft: '38px' }}
              placeholder="e.g. Cloud Security Architecture"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
          <div>
            <label className="form-label">System Role</label>
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
            <label className="form-label">Security Clearance Level</label>
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
        </div>

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
          <Shield size={16} color="var(--cyan-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <span>
            Identity will require hardware posture registration and MFA enrollment upon first access gateway challenge.
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Provision Identity
          </button>
        </div>
      </form>
    </Modal>
  );
};
