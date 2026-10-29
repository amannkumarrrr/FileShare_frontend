import React from 'react';
import { ClassificationLevel } from '../../types';
import { Shield, ShieldAlert, ShieldCheck, Lock, AlertCircle, CheckCircle2, Clock } from 'lucide-react';

interface ClassificationBadgeProps {
  level: ClassificationLevel;
  showIcon?: boolean;
}

export const ClassificationBadge: React.FC<ClassificationBadgeProps> = ({ level, showIcon = true }) => {
  switch (level) {
    case 'Highly Confidential':
      return (
        <span className="badge badge-highly-confidential" title="Zero-Trust Strict Egress & Envelope Encryption Required">
          {showIcon && <ShieldAlert size={12} />}
          Highly Confidential
        </span>
      );
    case 'Confidential':
      return (
        <span className="badge badge-confidential" title="Zero-Trust Role-Based Isolation Enforced">
          {showIcon && <Lock size={12} />}
          Confidential
        </span>
      );
    case 'Internal':
      return (
        <span className="badge badge-internal" title="Organization-wide secure access">
          {showIcon && <Shield size={12} />}
          Internal
        </span>
      );
    case 'Public':
    default:
      return (
        <span className="badge badge-public" title="Public domain or unrestricted internal">
          {showIcon && <ShieldCheck size={12} />}
          Public
        </span>
      );
  }
};

interface StatusBadgeProps {
  status: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const normalized = status.toLowerCase();
  
  if (normalized === 'active' || normalized === 'success') {
    return (
      <span className="badge badge-active">
        <CheckCircle2 size={12} />
        {status}
      </span>
    );
  }

  if (normalized === 'expiring soon' || normalized === 'warning' || normalized === 'pending mfa') {
    return (
      <span className="badge badge-warning">
        <Clock size={12} />
        {status}
      </span>
    );
  }

  if (normalized === 'expired' || normalized === 'revoked' || normalized === 'blocked' || normalized === 'suspended') {
    return (
      <span className="badge badge-danger">
        <AlertCircle size={12} />
        {status}
      </span>
    );
  }

  return (
    <span className="badge badge-neutral">
      {status}
    </span>
  );
};
