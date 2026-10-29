import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  ShieldAlert, 
  KeyRound, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Modal } from '../components/common/Modal';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { showToast, loginUser } = useApp();

  const [email, setEmail] = useState('alex.morgan@zerotrust.sec');
  const [password, setPassword] = useState('SecurePass2026!');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [forgotModalOpen, setForgotModalOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      showToast('Please fill in both email and password.', 'warning');
      return;
    }

    setIsLoading(true);
    const success = await loginUser(email, password);
    setIsLoading(false);
    if (success) {
      navigate('/dashboard');
    }
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForgotModalOpen(false);
    showToast(`Password recovery link dispatched to ${resetEmail || email}`, 'info');
  };

  return (
    <div className="login-root">
      {/* Background Graphic Grid */}
      <div className="login-bg-grid" />

      <div className="login-card-container">
        {/* Security Alert Header Banner */}
        <div className="login-proto-notice">
          <ShieldAlert size={16} color="var(--cyan-primary)" style={{ flexShrink: 0 }} />
          <span>
            <strong>Phase 1 UI Prototype:</strong> Zero-Trust access control and authentication integration will be connected in subsequent phases.
          </span>
        </div>

        <div className="login-box">
          {/* Brand Header */}
          <div className="login-brand-header">
            <div className="login-shield-badge">
              <ShieldCheck size={36} color="var(--cyan-primary)" />
            </div>
            <h1 className="login-title">Zero-Trust Security Gateway</h1>
            <p className="login-desc">
              Continuous identity verification & encrypted document repository
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label className="form-label required">Organizational Email</label>
              <div className="input-icon-wrapper">
                <Mail size={16} className="input-icon" />
                <input
                  type="email"
                  className="form-input"
                  placeholder="name@zerotrust.sec"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <label className="form-label required" style={{ margin: 0 }}>Password</label>
                <button
                  type="button"
                  className="forgot-link"
                  onClick={() => setForgotModalOpen(true)}
                >
                  Forgot Password?
                </button>
              </div>
              <div className="input-icon-wrapper">
                <Lock size={16} className="input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-input"
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="login-options-row">
              <label className="remember-checkbox-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember this trusted device</span>
              </label>

              <span className="posture-tag" title="Continuous telemetry evaluation active">
                <span className="dot-live"></span> Posture Scan Active
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary login-submit-btn"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner-border" />
                  <span>Verifying Device Posture...</span>
                </>
              ) : (
                <>
                  <span>Authenticate & Enter Vault</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Credentials Tip */}
          <div className="demo-credentials-box">
            <div className="demo-box-title">
              <KeyRound size={13} color="var(--cyan-primary)" />
              <span>Demo Account Clearance:</span>
            </div>
            <div className="demo-box-creds">
              <code>alex.morgan@zerotrust.sec</code> (SecOps Admin / Level 4 Clearance)
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="login-footer-text">
          Zero-Trust Document Management & File Sharing System &bull; Phase 1 UI Sandbox
        </div>
      </div>

      {/* Forgot Password Modal */}
      <Modal
        isOpen={forgotModalOpen}
        onClose={() => setForgotModalOpen(false)}
        title={
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <KeyRound size={18} color="var(--cyan-primary)" />
            <span>Identity Recovery Challenge</span>
          </div>
        }
      >
        <form onSubmit={handleForgotSubmit}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Under Zero-Trust guidelines, identity reset requires secondary verification from your enterprise administrator. Enter your registered email to dispatch a challenge token.
          </p>
          <div className="form-group">
            <label className="form-label required">Registered Security Email</label>
            <input
              type="email"
              className="form-input"
              placeholder="alex.morgan@zerotrust.sec"
              value={resetEmail || email}
              onChange={(e) => setResetEmail(e.target.value)}
              required
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '20px' }}>
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => setForgotModalOpen(false)}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary btn-sm">
              Send Recovery Challenge
            </button>
          </div>
        </form>
      </Modal>

      <style>{`
        .login-root {
          min-height: 100vh;
          background-color: var(--bg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          position: relative;
          overflow: hidden;
        }
        .login-bg-grid {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 50% 30%, rgba(6, 182, 212, 0.08) 0%, transparent 60%),
            linear-gradient(rgba(30, 45, 74, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 45, 74, 0.15) 1px, transparent 1px);
          background-size: 100% 100%, 36px 36px, 36px 36px;
          pointer-events: none;
        }
        .login-card-container {
          width: 100%;
          max-width: 460px;
          position: relative;
          z-index: 10;
        }
        .login-proto-notice {
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.3);
          border-radius: var(--radius-sm);
          padding: 8px 14px;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.78rem;
          color: var(--text-secondary);
        }
        .login-proto-notice strong {
          color: var(--cyan-primary);
        }
        .login-box {
          background-color: var(--bg-card);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          padding: 32px 28px;
          box-shadow: var(--shadow-lg), 0 0 40px rgba(6, 182, 212, 0.12);
        }
        .login-brand-header {
          text-align: center;
          margin-bottom: 24px;
        }
        .login-shield-badge {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px auto;
          box-shadow: 0 0 25px rgba(6, 182, 212, 0.2);
        }
        .login-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }
        .login-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin-top: 4px;
        }
        .input-icon-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 12px;
          color: var(--text-muted);
          pointer-events: none;
        }
        .input-icon-wrapper .form-input {
          padding-left: 38px;
          padding-right: 38px;
        }
        .toggle-password-btn {
          position: absolute;
          right: 12px;
          color: var(--text-muted);
          padding: 4px;
          display: flex;
          align-items: center;
        }
        .toggle-password-btn:hover {
          color: var(--text-primary);
        }
        .forgot-link {
          font-size: 0.78rem;
          color: var(--cyan-primary);
        }
        .forgot-link:hover {
          text-decoration: underline;
        }
        .login-options-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          font-size: 0.82rem;
        }
        .remember-checkbox-label {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          cursor: pointer;
        }
        .remember-checkbox-label input {
          accent-color: var(--cyan-primary);
          cursor: pointer;
        }
        .posture-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          color: var(--emerald);
          font-family: var(--font-mono);
        }
        .dot-live {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--emerald);
          box-shadow: 0 0 6px var(--emerald);
        }
        .login-submit-btn {
          width: 100%;
          padding: 12px;
          font-size: 0.95rem;
          font-weight: 600;
        }
        .spinner-border {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .demo-credentials-box {
          margin-top: 24px;
          padding: 12px 14px;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
        }
        .demo-box-title {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--cyan-primary);
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .demo-box-creds {
          font-size: 0.78rem;
          color: var(--text-secondary);
        }
        .demo-box-creds code {
          background: rgba(6, 182, 212, 0.12);
          color: var(--text-primary);
          padding: 2px 6px;
          border-radius: 4px;
          font-family: var(--font-mono);
        }
        .login-footer-text {
          text-align: center;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 18px;
        }
      `}</style>
    </div>
  );
};
