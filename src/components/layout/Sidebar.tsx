import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  LayoutDashboard, 
  Files, 
  FolderDown, 
  FolderUp, 
  UploadCloud, 
  Users, 
  Activity, 
  Settings, 
  ShieldAlert, 
  LogOut, 
  X,
  Lock,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Sidebar: React.FC = () => {
  const { sidebarOpen, setSidebarOpen, logoutUser, currentUser, backendConnected } = useApp();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate('/login');
  };

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'My Documents', path: '/documents', icon: Files },
    { name: 'Shared With Me', path: '/shared-with-me', icon: FolderDown },
    { name: 'Shared By Me', path: '/shared-by-me', icon: FolderUp },
    { name: 'Upload Document', path: '/upload', icon: UploadCloud },
    { name: 'User Management', path: '/users', icon: Users },
    { name: 'Security Activity', path: '/activity', icon: Activity },
    { name: 'Settings', path: '/settings', icon: Settings },
    { name: 'Access Denied (403)', path: '/access-denied', icon: ShieldAlert }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div 
          className="sidebar-backdrop"
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(3px)',
            zIndex: 998
          }}
        />
      )}

      <aside className={`zt-sidebar ${sidebarOpen ? 'sidebar-mobile-open' : ''}`}>
        {/* Sidebar Brand Header */}
        <div className="sidebar-header">
          <div className="brand-box">
            <div className="brand-logo-glow">
              <ShieldCheck size={26} color="#06B6D4" />
            </div>
            <div className="brand-text">
              <div className="brand-title">ZERO-TRUST</div>
              <div className="brand-subtitle">SECURE DOC VAULT</div>
            </div>
          </div>
          <button 
            type="button" 
            className="mobile-close-btn"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Security Posture Status */}
        <div className="sidebar-security-badge">
          <div className="status-dot-pulse"></div>
          <div className="posture-info">
            <span className="posture-title">Perimeter: Strict</span>
            <span className="posture-sub">{backendConnected ? 'Spring Boot + Postgres' : 'Zero-Trust UI Sandbox'}</span>
          </div>
          <Lock size={13} color="#06B6D4" />
        </div>

        {/* Navigation Links */}
        <nav className="sidebar-nav">
          <div className="nav-group-label">SECURE NAVIGATION</div>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                <div className="nav-icon-wrap">
                  <Icon size={18} />
                </div>
                <span className="nav-text">{item.name}</span>
                <ChevronRight size={14} className="nav-arrow" />
              </NavLink>
            );
          })}
        </nav>

        {/* Sidebar Footer User Info & Logout */}
        <div className="sidebar-footer">
          <div className="user-profile-preview">
            <div className="avatar-circle">
              {currentUser?.fullName ? currentUser.fullName.split(' ').map(n => n[0]).join('') : 'AM'}
            </div>
            <div className="user-text">
              <div className="user-name">{currentUser?.fullName || 'Alex Morgan'}</div>
              <div className="user-role">{currentUser?.role || 'SecOps Admin'}</div>
            </div>
          </div>
          <button 
            type="button" 
            className="logout-button" 
            onClick={handleLogout}
            title="End Session"
          >
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      <style>{`
        .zt-sidebar {
          width: 260px;
          background-color: var(--bg-secondary);
          border-right: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          height: 100vh;
          flex-shrink: 0;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 999;
          position: sticky;
          top: 0;
        }
        .sidebar-header {
          padding: 20px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-subtle);
        }
        .brand-box {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .brand-logo-glow {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          background: rgba(6, 182, 212, 0.12);
          border: 1px solid rgba(6, 182, 212, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.2);
        }
        .brand-title {
          font-size: 0.95rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--text-primary);
        }
        .brand-subtitle {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--cyan-primary);
        }
        .mobile-close-btn {
          display: none;
          color: var(--text-secondary);
        }
        .sidebar-security-badge {
          margin: 14px 16px 8px 16px;
          padding: 8px 12px;
          background: rgba(11, 19, 36, 0.8);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .status-dot-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--emerald);
          box-shadow: 0 0 8px var(--emerald);
        }
        .posture-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .posture-title {
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .posture-sub {
          font-size: 0.68rem;
          color: var(--text-muted);
        }
        .nav-group-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          padding: 14px 20px 6px 20px;
        }
        .sidebar-nav {
          flex: 1;
          overflow-y: auto;
          padding: 8px 10px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 9px 12px;
          color: var(--text-secondary);
          border-radius: var(--radius-sm);
          font-size: 0.86rem;
          font-weight: 500;
          transition: all 0.2s ease;
          position: relative;
        }
        .nav-link:hover {
          color: var(--text-primary);
          background-color: var(--bg-card);
        }
        .nav-link-active {
          color: #FFFFFF;
          background: linear-gradient(90deg, rgba(6, 182, 212, 0.16), rgba(6, 182, 212, 0.04));
          border-left: 3px solid var(--cyan-primary);
          font-weight: 600;
        }
        .nav-icon-wrap {
          display: flex;
          align-items: center;
          color: inherit;
        }
        .nav-link-active .nav-icon-wrap {
          color: var(--cyan-primary);
        }
        .nav-text {
          flex: 1;
        }
        .nav-arrow {
          opacity: 0;
          transition: opacity 0.2s, transform 0.2s;
        }
        .nav-link:hover .nav-arrow, .nav-link-active .nav-arrow {
          opacity: 0.7;
          transform: translateX(2px);
        }
        .sidebar-footer {
          padding: 16px;
          border-top: 1px solid var(--border-subtle);
          background-color: rgba(11, 19, 36, 0.5);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .user-profile-preview {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .avatar-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0284C7, #0F766E);
          color: white;
          font-size: 0.8rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .user-text {
          display: flex;
          flex-direction: column;
        }
        .user-name {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .user-role {
          font-size: 0.7rem;
          color: var(--cyan-primary);
        }
        .logout-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          color: var(--rose);
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.2);
          transition: all 0.2s;
        }
        .logout-button:hover {
          background: rgba(239, 68, 68, 0.2);
        }

        @media (max-width: 900px) {
          .zt-sidebar {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            transform: translateX(-100%);
            box-shadow: var(--shadow-lg);
          }
          .zt-sidebar.sidebar-mobile-open {
            transform: translateX(0);
          }
          .mobile-close-btn {
            display: block;
          }
        }
      `}</style>
    </>
  );
};
