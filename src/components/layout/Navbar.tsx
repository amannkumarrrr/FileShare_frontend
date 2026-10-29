import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Menu, 
  Search, 
  Bell, 
  ShieldCheck, 
  User, 
  Settings, 
  LogOut, 
  CheckCheck, 
  Info, 
  AlertTriangle,
  Lock,
  ChevronDown
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Navbar: React.FC = () => {
  const { 
    setSidebarOpen, 
    globalSearch, 
    setGlobalSearch, 
    notifications, 
    unreadNotificationCount, 
    markAllNotificationsRead,
    showToast,
    currentUser,
    logoutUser,
    backendConnected
  } = useApp();

  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotificationsOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (globalSearch.trim()) {
      navigate('/documents');
      showToast(`Filtering documents for "${globalSearch}"`, 'info');
    }
  };

  return (
    <header className="zt-navbar">
      <div className="navbar-left">
        <button 
          type="button" 
          className="hamburger-btn" 
          onClick={() => setSidebarOpen(true)}
          aria-label="Toggle navigation drawer"
        >
          <Menu size={22} />
        </button>

        <form onSubmit={handleSearchSubmit} className="search-box">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search documents, tags, audit logs... (Press Enter)"
            value={globalSearch}
            onChange={(e) => setGlobalSearch(e.target.value)}
          />
        </form>
      </div>

      <div className="navbar-right">
        {/* Zero-Trust Architecture Status Badge */}
        <div className="zt-status-pill d-none-mobile">
          <ShieldCheck size={15} color="#10B981" />
          <span className="zt-status-text">
            <strong>Zero-Trust Status:</strong> {backendConnected ? 'Connected (Spring Boot API + PostgreSQL)' : 'Perimeter Enforced'}
          </span>
        </div>

        {/* Notifications Dropdown */}
        <div className="dropdown-wrapper" ref={notifRef}>
          <button 
            type="button" 
            className="navbar-icon-btn" 
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            aria-label="View notifications"
          >
            <Bell size={19} />
            {unreadNotificationCount > 0 && (
              <span className="notif-badge">{unreadNotificationCount}</span>
            )}
          </button>

          {notificationsOpen && (
            <div className="dropdown-panel notif-dropdown">
              <div className="dropdown-panel-header">
                <div className="header-title">
                  <span>Security Notifications</span>
                  {unreadNotificationCount > 0 && (
                    <span className="count-pill">{unreadNotificationCount} new</span>
                  )}
                </div>
                {unreadNotificationCount > 0 && (
                  <button 
                    type="button" 
                    className="mark-read-btn" 
                    onClick={markAllNotificationsRead}
                  >
                    <CheckCheck size={14} />
                    <span>Mark all read</span>
                  </button>
                )}
              </div>

              <div className="notif-list">
                {notifications.length === 0 ? (
                  <div className="empty-notif">No notifications</div>
                ) : (
                  notifications.map((n) => (
                    <div key={n.id} className={`notif-item ${!n.read ? 'notif-unread' : ''}`}>
                      <div className="notif-icon">
                        {n.type === 'warning' ? (
                          <AlertTriangle size={15} color="#F59E0B" />
                        ) : n.type === 'success' ? (
                          <ShieldCheck size={15} color="#10B981" />
                        ) : (
                          <Info size={15} color="#06B6D4" />
                        )}
                      </div>
                      <div className="notif-content">
                        <div className="notif-title">{n.title}</div>
                        <div className="notif-msg">{n.message}</div>
                        <div className="notif-time">{n.time}</div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="dropdown-panel-footer">
                <button 
                  type="button" 
                  className="btn-view-all"
                  onClick={() => {
                    setNotificationsOpen(false);
                    navigate('/activity');
                  }}
                >
                  View Full Audit Log
                </button>
              </div>
            </div>
          )}
        </div>

        {/* User Profile Dropdown */}
        <div className="dropdown-wrapper" ref={profileRef}>
          <button 
            type="button" 
            className="user-profile-btn" 
            onClick={() => setProfileOpen(!profileOpen)}
            aria-label="User menu"
          >
            <div className="nav-avatar">
              {currentUser?.fullName ? currentUser.fullName.split(' ').map(n => n[0]).join('') : 'AM'}
            </div>
            <div className="nav-user-info d-none-mobile">
              <span className="nav-user-name">{currentUser?.fullName || 'Alex Morgan'}</span>
              <span className="nav-user-badge">{currentUser?.role || 'Clearance: Level 4'}</span>
            </div>
            <ChevronDown size={14} className="chevron-icon" />
          </button>

          {profileOpen && (
            <div className="dropdown-panel profile-dropdown">
              <div className="profile-header-info">
                <div className="ph-name">{currentUser?.fullName || 'Alex Morgan'}</div>
                <div className="ph-email">{currentUser?.email || 'alex.morgan@zerotrust.sec'}</div>
                <div className="ph-badge">{currentUser?.role || 'Security Operations Admin'}</div>
              </div>

              <div className="dropdown-divider" />

              <button 
                type="button" 
                className="dropdown-menu-item"
                onClick={() => {
                  setProfileOpen(false);
                  navigate('/settings');
                }}
              >
                <User size={16} />
                <span>Profile & Account</span>
              </button>

              <button 
                type="button" 
                className="dropdown-menu-item"
                onClick={() => {
                  setProfileOpen(false);
                  navigate('/settings');
                }}
              >
                <Settings size={16} />
                <span>Security Policies & MFA</span>
              </button>

              <button 
                type="button" 
                className="dropdown-menu-item"
                onClick={() => {
                  setProfileOpen(false);
                  navigate('/access-denied');
                }}
              >
                <Lock size={16} />
                <span>Simulate Policy Block (403)</span>
              </button>

              <div className="dropdown-divider" />

              <button 
                type="button" 
                className="dropdown-menu-item item-danger"
                onClick={async () => {
                  setProfileOpen(false);
                  await logoutUser();
                  navigate('/login');
                }}
              >
                <LogOut size={16} />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .zt-navbar {
          height: 64px;
          background-color: var(--bg-secondary);
          border-bottom: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .navbar-left {
          display: flex;
          align-items: center;
          gap: 16px;
          flex: 1;
          max-width: 520px;
        }
        .hamburger-btn {
          display: none;
          color: var(--text-secondary);
          padding: 6px;
          border-radius: var(--radius-sm);
        }
        .hamburger-btn:hover {
          color: var(--text-primary);
          background-color: var(--bg-elevated);
        }
        .search-box {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
        }
        .search-icon {
          position: absolute;
          left: 12px;
          color: var(--text-muted);
          pointer-events: none;
        }
        .search-input {
          width: 100%;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          padding: 8px 14px 8px 36px;
          font-size: 0.85rem;
          color: var(--text-primary);
          transition: all 0.2s;
        }
        .search-input:focus {
          outline: none;
          border-color: var(--cyan-primary);
          box-shadow: 0 0 0 3px var(--cyan-glow);
          background: var(--bg-card);
        }
        .navbar-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .zt-status-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          color: var(--text-secondary);
        }
        .zt-status-pill strong {
          color: var(--emerald);
        }
        .dropdown-wrapper {
          position: relative;
        }
        .navbar-icon-btn {
          position: relative;
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          transition: all 0.2s;
        }
        .navbar-icon-btn:hover {
          color: var(--cyan-primary);
          border-color: var(--border-medium);
        }
        .notif-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          background-color: var(--rose);
          color: white;
          font-size: 0.65rem;
          font-weight: 700;
          height: 18px;
          min-width: 18px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 4px;
          box-shadow: 0 0 8px rgba(239, 68, 68, 0.5);
        }
        .user-profile-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 4px 8px 4px 4px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          transition: all 0.2s;
        }
        .user-profile-btn:hover {
          border-color: var(--border-medium);
        }
        .nav-avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0284C7, #0F766E);
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nav-user-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        .nav-user-name {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.1;
        }
        .nav-user-badge {
          font-size: 0.68rem;
          color: var(--cyan-primary);
          line-height: 1.1;
        }
        .chevron-icon {
          color: var(--text-muted);
        }
        .dropdown-panel {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          background-color: var(--bg-card);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          z-index: 500;
          animation: slideUp 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .notif-dropdown {
          width: 360px;
        }
        .dropdown-panel-header {
          padding: 12px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-subtle);
        }
        .header-title {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .count-pill {
          background: var(--cyan-primary);
          color: var(--text-inverse);
          font-size: 0.68rem;
          font-weight: 700;
          padding: 1px 6px;
          border-radius: var(--radius-full);
        }
        .mark-read-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          color: var(--cyan-primary);
        }
        .mark-read-btn:hover {
          text-decoration: underline;
        }
        .notif-list {
          max-height: 280px;
          overflow-y: auto;
        }
        .notif-item {
          display: flex;
          gap: 12px;
          padding: 12px 16px;
          border-bottom: 1px solid var(--border-subtle);
          transition: background-color 0.2s;
        }
        .notif-item:hover {
          background-color: var(--bg-card-hover);
        }
        .notif-unread {
          background-color: rgba(6, 182, 212, 0.05);
        }
        .notif-icon {
          margin-top: 2px;
        }
        .notif-content {
          flex: 1;
        }
        .notif-title {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .notif-msg {
          font-size: 0.76rem;
          color: var(--text-secondary);
          margin-top: 2px;
          line-height: 1.35;
        }
        .notif-time {
          font-size: 0.68rem;
          color: var(--text-muted);
          margin-top: 4px;
        }
        .empty-notif {
          padding: 24px;
          text-align: center;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .dropdown-panel-footer {
          padding: 8px 12px;
          border-top: 1px solid var(--border-subtle);
          text-align: center;
        }
        .btn-view-all {
          font-size: 0.78rem;
          color: var(--cyan-primary);
          font-weight: 500;
          padding: 4px 8px;
        }
        .btn-view-all:hover {
          text-decoration: underline;
        }
        .profile-dropdown {
          width: 240px;
          padding: 8px 0;
        }
        .profile-header-info {
          padding: 10px 16px;
        }
        .ph-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .ph-email {
          font-size: 0.74rem;
          color: var(--text-secondary);
        }
        .ph-badge {
          display: inline-block;
          font-size: 0.68rem;
          color: var(--cyan-primary);
          background: rgba(6, 182, 212, 0.1);
          padding: 2px 6px;
          border-radius: var(--radius-sm);
          margin-top: 6px;
        }
        .dropdown-divider {
          height: 1px;
          background: var(--border-subtle);
          margin: 6px 0;
        }
        .dropdown-menu-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 16px;
          font-size: 0.82rem;
          color: var(--text-secondary);
          transition: all 0.15s;
          text-align: left;
        }
        .dropdown-menu-item:hover {
          color: var(--text-primary);
          background-color: var(--bg-card-hover);
        }
        .dropdown-menu-item.item-danger {
          color: var(--rose);
        }
        .dropdown-menu-item.item-danger:hover {
          background-color: var(--rose-bg);
        }

        @media (max-width: 900px) {
          .hamburger-btn {
            display: flex;
          }
        }
        @media (max-width: 640px) {
          .d-none-mobile {
            display: none !important;
          }
          .notif-dropdown {
            width: 300px;
            right: -60px;
          }
        }
      `}</style>
    </header>
  );
};
