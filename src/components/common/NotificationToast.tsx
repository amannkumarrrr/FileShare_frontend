import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, Info, AlertTriangle, AlertCircle } from 'lucide-react';

export const NotificationToast: React.FC = () => {
  const { toast } = useApp();

  if (!toast) return null;

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle2 size={18} className="text-emerald" style={{ color: 'var(--emerald)', flexShrink: 0 }} />;
      case 'warning':
        return <AlertTriangle size={18} className="text-amber" style={{ color: 'var(--amber)', flexShrink: 0 }} />;
      case 'error':
        return <AlertCircle size={18} className="text-rose" style={{ color: 'var(--rose)', flexShrink: 0 }} />;
      case 'info':
      default:
        return <Info size={18} className="text-cyan" style={{ color: 'var(--cyan-primary)', flexShrink: 0 }} />;
    }
  };

  return (
    <div className="toast-container">
      <div className={`toast-item toast-${toast.type}`}>
        {getIcon()}
        <span>{toast.message}</span>
      </div>
    </div>
  );
};
