import React, { useState, useEffect } from 'react';
import { 
  Settings as SettingsIcon, 
  User, 
  Lock, 
  ShieldCheck, 
  Smartphone, 
  Key, 
  Sliders, 
  Bell, 
  CheckCircle2, 
  AlertTriangle, 
  Info,
  Save,
  KeyRound,
  Cloud,
  ExternalLink,
  RefreshCw,
  Unlink,
  Check
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { driveApi, GoogleDriveStatus } from '../services/api';

export const Settings: React.FC = () => {
  const { showToast } = useApp();

  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'preferences' | 'mfa' | 'gdrive'>('profile');

  // Google Drive Integration state
  const [driveStatus, setDriveStatus] = useState<GoogleDriveStatus>({
    configured: false,
    connected: false,
    googleEmail: '',
    connectedAt: '',
    scope: 'https://www.googleapis.com/auth/drive.file',
    message: ''
  });
  const [driveLoading, setDriveLoading] = useState(false);
  const [sandboxEmail, setSandboxEmail] = useState('alex.morgan.gdrive@zerotrust.sec');

  // Profile Form state
  const [fullName, setFullName] = useState('Alex Morgan');
  const [email, setEmail] = useState('alex.morgan@zerotrust.sec');
  const [department, setDepartment] = useState('Cybersecurity Operations');
  const [jobTitle, setJobTitle] = useState('Lead Zero-Trust Security Architect');

  // Security Form state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Preferences Form state
  const [sessionTimeout, setSessionTimeout] = useState('15');
  const [enforceMtls, setEnforceMtls] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [siemSync, setSiemSync] = useState(true);

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Profile configuration updated.', 'success');
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPassword || !newPassword || !confirmPassword) {
      showToast('Please fill in all password fields.', 'warning');
      return;
    }
    if (newPassword !== confirmPassword) {
      showToast('New passwords do not match.', 'error');
      return;
    }
    showToast('Password credentials updated successfully.', 'success');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handlePreferencesSave = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Session and zero-trust perimeter preferences saved.', 'success');
  };

  const handleMfaPlaceholderAction = (methodName: string) => {
    showToast(`Phase 2 Notice: ${methodName} hardware integration will be implemented in Phase 2.`, 'info');
  };

  // Google Drive Status Check & OAuth Callback Handler
  const fetchDriveStatus = async () => {
    try {
      setDriveLoading(true);
      const status = await driveApi.getStatus();
      setDriveStatus(status);
    } catch (_) {
      // Backend may be offline or initializing
    } finally {
      setDriveLoading(false);
    }
  };

  useEffect(() => {
    fetchDriveStatus();

    // Check URL parameters for tab and OAuth code callback
    const searchParams = new URLSearchParams(window.location.search);
    const tabParam = searchParams.get('tab');
    if (tabParam === 'gdrive') {
      setActiveTab('gdrive');
    }

    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const connected = searchParams.get('connected');
    const errorParam = searchParams.get('error');

    if (connected === 'true') {
      setActiveTab('gdrive');
      showToast('Google Drive successfully authenticated and connected under Zero-Trust perimeter.', 'success');
      window.history.replaceState({}, document.title, window.location.pathname + '?tab=gdrive');
    } else if (errorParam) {
      setActiveTab('gdrive');
      showToast(`Google Drive authorization failed: ${errorParam}`, 'error');
      window.history.replaceState({}, document.title, window.location.pathname + '?tab=gdrive');
    } else if (code) {
      setActiveTab('gdrive');
      setDriveLoading(true);
      driveApi.handleCallback(code, state || undefined)
        .then((res) => {
          setDriveStatus(res);
          showToast('Google Drive successfully authenticated and connected under Zero-Trust perimeter.', 'success');
          // Clean URL params without reloading page
          window.history.replaceState({}, document.title, window.location.pathname + '?tab=gdrive');
        })
        .catch((err) => {
          showToast(`Google OAuth exchange failed: ${err.message}`, 'error');
        })
        .finally(() => setDriveLoading(false));
    }
  }, []);

  const handleConnectDrive = async () => {
    try {
      setDriveLoading(true);
      const res = await driveApi.getAuthUrl();
      if (res.url.includes('sandbox=true')) {
        // Sandbox simulation mode
        showToast('Initiating Developer Sandbox OAuth flow...', 'info');
        const updated = await driveApi.handleCallback('sim-code-manual-connect', 'state:manual');
        setDriveStatus(updated);
        showToast('Google Drive connected in Developer Sandbox Mode.', 'success');
      } else {
        // Redirect to real Google OAuth Consent screen
        window.location.href = res.url;
      }
    } catch (err: any) {
      showToast(err.message || 'Unable to start Google Drive authentication.', 'error');
    } finally {
      setDriveLoading(false);
    }
  };

  const handleDisconnectDrive = async () => {
    if (!window.confirm('Are you sure you want to disconnect Google Drive? Active Google Drive storage links will require reconnection.')) {
      return;
    }
    try {
      setDriveLoading(true);
      await driveApi.disconnect();
      setDriveStatus((prev) => ({
        ...prev,
        connected: false,
        googleEmail: undefined,
        connectedAt: undefined,
        message: 'Google Drive disconnected.'
      }));
      showToast('Google Drive unlinked and OAuth tokens purged.', 'success');
    } catch (err: any) {
      showToast(err.message || 'Failed to disconnect Google Drive.', 'error');
    } finally {
      setDriveLoading(false);
    }
  };

  const handleSandboxSimulate = async () => {
    try {
      setDriveLoading(true);
      const updated = await driveApi.handleCallback(`sim-code-${Date.now()}`, 'sandbox:direct');
      setDriveStatus(updated);
      showToast(`Google Drive connected for ${sandboxEmail} (Developer Sandbox).`, 'success');
    } catch (err: any) {
      showToast(err.message || 'Simulation failed.', 'error');
    } finally {
      setDriveLoading(false);
    }
  };

  return (
    <div className="settings-page">
      <div className="page-header">
        <h1 className="page-title">
          <SettingsIcon size={24} color="var(--cyan-primary)" />
          <span>Security & Account Settings</span>
        </h1>
        <p className="page-subtitle">
          Manage Zero-Trust credentials, session policies, hardware tokens, and identity profile.
        </p>
      </div>

      <div className="settings-layout">
        {/* Settings Navigation Tabs */}
        <div className="settings-sidebar-nav zt-card">
          <button
            type="button"
            className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <User size={16} />
            <span>Profile Identity</span>
          </button>

          <button
            type="button"
            className={`tab-btn ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <Lock size={16} />
            <span>Password & Security</span>
          </button>

          <button
            type="button"
            className={`tab-btn ${activeTab === 'preferences' ? 'active' : ''}`}
            onClick={() => setActiveTab('preferences')}
          >
            <Sliders size={16} />
            <span>Session & Policies</span>
          </button>

          <button
            type="button"
            className={`tab-btn ${activeTab === 'mfa' ? 'active' : ''}`}
            onClick={() => setActiveTab('mfa')}
          >
            <Key size={16} />
            <span>MFA Security Tokens</span>
            <span className="tab-pill">Phase 2</span>
          </button>

          <button
            type="button"
            className={`tab-btn ${activeTab === 'gdrive' ? 'active' : ''}`}
            onClick={() => setActiveTab('gdrive')}
          >
            <Cloud size={16} />
            <span>Google Drive</span>
            <span 
              className="tab-pill" 
              style={{ 
                background: driveStatus.connected ? 'rgba(16, 185, 129, 0.15)' : 'rgba(6, 182, 212, 0.15)', 
                color: driveStatus.connected ? 'var(--emerald)' : 'var(--cyan-primary)' 
              }}
            >
              {driveStatus.connected ? 'Connected' : 'API v3'}
            </span>
          </button>
        </div>

        {/* Tab Content Panel */}
        <div className="settings-content zt-card">
          {/* TAB 1: PROFILE */}
          {activeTab === 'profile' && (
            <div>
              <div className="zt-card-header">
                <div className="zt-card-title">
                  <User size={18} color="var(--cyan-primary)" />
                  <span>Profile Identity Settings</span>
                </div>
              </div>

              <form onSubmit={handleProfileSave}>
                <div className="avatar-section">
                  <div className="avatar-big">AM</div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 600 }}>Alex Morgan</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      Clearance: Highly Confidential (Level 4) &bull; Primary Admin
                    </p>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '18px' }}>
                  <div className="form-group">
                    <label className="form-label required">Full Legal Name</label>
                    <input
                      type="text"
                      className="form-input"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label required">Organizational Email</label>
                    <input
                      type="email"
                      className="form-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                  <div className="form-group">
                    <label className="form-label">Assigned Department</label>
                    <input
                      type="text"
                      className="form-input"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Job Title</label>
                    <input
                      type="text"
                      className="form-input"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button type="submit" className="btn btn-primary">
                    <Save size={16} />
                    <span>Save Profile Changes</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 2: SECURITY */}
          {activeTab === 'security' && (
            <div>
              <div className="zt-card-header">
                <div className="zt-card-title">
                  <Lock size={18} color="var(--cyan-primary)" />
                  <span>Security & Password Management</span>
                </div>
              </div>

              <form onSubmit={handlePasswordChange}>
                <div className="form-group">
                  <label className="form-label required">Current Secure Password</label>
                  <input
                    type="password"
                    className="form-input"
                    placeholder="••••••••••••"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label required">New Zero-Trust Compliant Password</label>
                  <input
                    type="password"
                    className="form-input"
                    placeholder="Min 12 chars, upper, lower, symbol, number"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  {newPassword && (
                    <div style={{ marginTop: '8px', fontSize: '0.75rem', color: 'var(--emerald)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 size={13} />
                      <span>Password meets NIST 800-63B Zero-Trust complexity requirements</span>
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label required">Confirm New Password</label>
                  <input
                    type="password"
                    className="form-input"
                    placeholder="••••••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                  <button type="submit" className="btn btn-primary">
                    <Lock size={16} />
                    <span>Update Vault Password</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 3: PREFERENCES */}
          {activeTab === 'preferences' && (
            <div>
              <div className="zt-card-header">
                <div className="zt-card-title">
                  <Sliders size={18} color="var(--cyan-primary)" />
                  <span>Session Posture & Security Preferences</span>
                </div>
              </div>

              <form onSubmit={handlePreferencesSave}>
                <div className="form-group">
                  <label className="form-label">Inactivity Session Timeout</label>
                  <select
                    className="form-select"
                    value={sessionTimeout}
                    onChange={(e) => setSessionTimeout(e.target.value)}
                  >
                    <option value="5">5 Minutes (Strict Security Mode)</option>
                    <option value="15">15 Minutes (Standard Zero-Trust Recommendation)</option>
                    <option value="30">30 Minutes</option>
                    <option value="60">60 Minutes</option>
                  </select>
                  <span className="form-hint">Session locks automatically upon timeout; re-authentication challenge triggered.</span>
                </div>

                <div className="toggle-list">
                  <label className="toggle-row">
                    <input
                      type="checkbox"
                      checked={enforceMtls}
                      onChange={(e) => setEnforceMtls(e.target.checked)}
                    />
                    <div>
                      <div className="toggle-title">Enforce Continuous Micro-segmentation</div>
                      <div className="toggle-sub">Periodically verify endpoint network parameters against zero-trust allowlist.</div>
                    </div>
                  </label>

                  <label className="toggle-row">
                    <input
                      type="checkbox"
                      checked={emailAlerts}
                      onChange={(e) => setEmailAlerts(e.target.checked)}
                    />
                    <div>
                      <div className="toggle-title">Instant Security Telemetry Alerts</div>
                      <div className="toggle-sub">Receive email notifications on unauthorized file access attempts.</div>
                    </div>
                  </label>

                  <label className="toggle-row">
                    <input
                      type="checkbox"
                      checked={siemSync}
                      onChange={(e) => setSiemSync(e.target.checked)}
                    />
                    <div>
                      <div className="toggle-title">Synchronize Audit Logs to SIEM Pipeline</div>
                      <div className="toggle-sub">Stream tamper-evident audit packets to enterprise monitoring agents.</div>
                    </div>
                  </label>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
                  <button type="submit" className="btn btn-primary">
                    <Save size={16} />
                    <span>Save Policy Preferences</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 4: MFA SETTINGS (UI PLACEHOLDER ONLY) */}
          {activeTab === 'mfa' && (
            <div>
              <div className="zt-card-header">
                <div className="zt-card-title">
                  <Key size={18} color="var(--cyan-primary)" />
                  <span>Multi-Factor Authentication (MFA) Setup</span>
                </div>
                <span className="badge badge-warning">UI PLACEHOLDER ONLY</span>
              </div>

              {/* Security Banner Alert */}
              <div className="security-status-banner">
                <Info size={16} color="var(--cyan-primary)" style={{ flexShrink: 0 }} />
                <span>
                  <strong>Phase 1 UI Notice:</strong> As specified in the project guidelines, hardware MFA, TOTP seed generation, and FIDO2 WebAuthn keys are displayed as UI placeholders for frontend demonstration. Backend cryptographic integration is scheduled for Phase 2.
                </span>
              </div>

              <div className="mfa-cards-list">
                {/* Method 1: Authenticator App */}
                <div className="mfa-card">
                  <div className="mfa-icon-col">
                    <Smartphone size={24} color="var(--cyan-primary)" />
                  </div>
                  <div className="mfa-info-col">
                    <div className="mfa-title">
                      <span>Authenticator App (TOTP)</span>
                      <span className="badge badge-active">Recommended</span>
                    </div>
                    <div className="mfa-desc">
                      Use Google Authenticator, Microsoft Authenticator, or 1Password to generate time-based one-time codes.
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleMfaPlaceholderAction('TOTP Authenticator')}
                  >
                    Configure
                  </button>
                </div>

                {/* Method 2: Hardware Security Key (FIDO2) */}
                <div className="mfa-card">
                  <div className="mfa-icon-col">
                    <KeyRound size={24} color="var(--emerald)" />
                  </div>
                  <div className="mfa-info-col">
                    <div className="mfa-title">
                      <span>Hardware Security Key (FIDO2 / WebAuthn)</span>
                      <span className="badge badge-highly-confidential">Max Security</span>
                    </div>
                    <div className="mfa-desc">
                      Authenticate using a physical USB or NFC hardware token (e.g. YubiKey) with cryptographic attestation.
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleMfaPlaceholderAction('FIDO2 Hardware Key')}
                  >
                    Register Key
                  </button>
                </div>

                {/* Method 3: Emergency Backup Codes */}
                <div className="mfa-card">
                  <div className="mfa-icon-col">
                    <Lock size={24} color="var(--amber)" />
                  </div>
                  <div className="mfa-info-col">
                    <div className="mfa-title">
                      <span>Offline Disaster Recovery Keys</span>
                    </div>
                    <div className="mfa-desc">
                      Generate 10 single-use offline recovery bypass keys for emergency break-glass vault access.
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleMfaPlaceholderAction('Emergency Backup Codes')}
                  >
                    Generate Keys
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: GOOGLE DRIVE INTEGRATION (API v3) */}
          {activeTab === 'gdrive' && (
            <div>
              <div className="zt-card-header">
                <div className="zt-card-title">
                  <Cloud size={18} color="var(--cyan-primary)" />
                  <span>Google Drive API v3 Integration</span>
                </div>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={fetchDriveStatus}
                  disabled={driveLoading}
                  title="Refresh Drive connection status"
                >
                  <RefreshCw size={14} className={driveLoading ? 'spin' : ''} />
                  <span>Refresh</span>
                </button>
              </div>

              {/* Status Banner */}
              <div style={{
                padding: '16px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: driveStatus.connected ? 'rgba(16, 185, 129, 0.08)' : 'rgba(245, 158, 11, 0.08)',
                border: `1px solid ${driveStatus.connected ? 'rgba(16, 185, 129, 0.3)' : 'rgba(245, 158, 11, 0.3)'}`,
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '16px'
              }}>
                <div style={{ display: 'flex', gap: '14px' }}>
                  {driveStatus.connected ? (
                    <CheckCircle2 size={24} color="var(--emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  ) : (
                    <AlertTriangle size={24} color="var(--amber)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  )}
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.96rem' }}>
                      {driveStatus.connected ? 'Google Drive Connected & Active' : 'Google Drive Not Connected'}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.5 }}>
                      {driveStatus.message || (driveStatus.connected 
                        ? 'Your Google Drive is linked under Zero-Trust perimeter. Minimal scope enforced.'
                        : 'Connect your Google account to upload, manage, and share documents directly via Google Drive API v3.')}
                    </div>
                  </div>
                </div>

                <div>
                  {driveStatus.connected ? (
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={handleDisconnectDrive}
                      disabled={driveLoading}
                    >
                      <Unlink size={14} />
                      <span>Disconnect</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={handleConnectDrive}
                      disabled={driveLoading}
                    >
                      <Cloud size={14} />
                      <span>Connect Google Drive</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Connection Details (When Connected) */}
              {driveStatus.connected && (
                <div style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '18px',
                  marginBottom: '24px'
                }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--cyan-primary)', letterSpacing: '0.05em', marginBottom: '14px' }}>
                    ACTIVE ZERO-TRUST DRIVE SESSION
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                    <div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>LINKED GOOGLE ACCOUNT</div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '2px' }}>
                        {driveStatus.googleEmail || 'Account Synchronized'}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>ZERO-TRUST PERMISSION SCOPE</div>
                      <div style={{ fontSize: '0.82rem', fontFamily: 'monospace', color: 'var(--emerald)', marginTop: '2px' }}>
                        drive.file (Least Privilege)
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>INITIAL CONNECTION TIMESTAMP</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginTop: '2px' }}>
                        {driveStatus.connectedAt || 'Active Session'}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>TOKEN ENCRYPTION STATUS</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--cyan-primary)', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <ShieldCheck size={14} /> Encrypted in Vault DB
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Developer Sandbox / Quick Simulation Connect */}
              <div style={{
                background: 'var(--bg-card)',
                border: '1px dashed var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '18px',
                marginBottom: '24px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Smartphone size={16} color="var(--cyan-primary)" />
                      <span>Instant Developer Sandbox Mode</span>
                      <span className="tab-pill" style={{ background: 'rgba(6, 182, 212, 0.15)', color: 'var(--cyan-primary)' }}>Live Demo</span>
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                      Simulate a full Google OAuth token exchange right now without setting up Google Cloud Console keys.
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input
                      type="email"
                      className="form-input"
                      style={{ width: '240px', padding: '6px 12px', fontSize: '0.82rem' }}
                      value={sandboxEmail}
                      onChange={(e) => setSandboxEmail(e.target.value)}
                      placeholder="sandbox.user@gmail.com"
                    />
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={handleSandboxSimulate}
                      disabled={driveLoading}
                    >
                      <Check size={14} />
                      <span>Simulate OAuth</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Step-by-Step Google Cloud Configuration Guide */}
              <div style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '20px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <Info size={18} color="var(--cyan-primary)" />
                  <h3 style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Google Cloud Console Production Setup Guide
                  </h3>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.5 }}>
                  Follow these 5 steps to configure real Google OAuth 2.0 Client credentials for your project:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.82rem' }}>
                  <div style={{ padding: '12px', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                    <strong>Step 1: Create a Google Cloud Project</strong>
                    <div style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>
                      Navigate to <a href="https://console.cloud.google.com" target="_blank" rel="noreferrer" style={{ color: 'var(--cyan-primary)', textDecoration: 'underline' }}>Google Cloud Console</a> and create a new project named <code>Zero-Trust Secure Vault</code>.
                    </div>
                  </div>

                  <div style={{ padding: '12px', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                    <strong>Step 2: Enable Google Drive API v3</strong>
                    <div style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>
                      Go to <em>APIs & Services &gt; Library</em>, search for <strong>Google Drive API</strong>, and click <strong>Enable</strong>.
                    </div>
                  </div>

                  <div style={{ padding: '12px', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                    <strong>Step 3: Configure OAuth Consent Screen</strong>
                    <div style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>
                      Select <strong>External</strong> user type, add application name, developer email, and add the least-privilege scope: <code>https://www.googleapis.com/auth/drive.file</code>.
                    </div>
                  </div>

                  <div style={{ padding: '12px', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                    <strong>Step 4: Create OAuth 2.0 Web Application Credentials</strong>
                    <div style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>
                      Go to <em>Credentials &gt; Create Credentials &gt; OAuth client ID</em>:
                      <ul style={{ marginTop: '6px', paddingLeft: '18px', lineHeight: 1.6 }}>
                        <li>Application Type: <strong>Web Application</strong></li>
                        <li>Authorized JavaScript Origins: <code>http://localhost:3000</code> and <code>http://localhost:5173</code></li>
                        <li>Authorized Redirect URIs: <code>http://localhost:3000/settings?tab=gdrive</code></li>
                      </ul>
                    </div>
                  </div>

                  <div style={{ padding: '12px', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                    <strong>Step 5: Set Environment Variables on Backend</strong>
                    <div style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>
                      Supply your credentials to Spring Boot via environment variables or <code>backend/src/main/resources/application.yml</code>:
                      <pre style={{
                        marginTop: '8px',
                        padding: '10px',
                        background: 'var(--bg-input)',
                        borderRadius: '4px',
                        color: 'var(--cyan-primary)',
                        fontFamily: 'monospace',
                        fontSize: '0.76rem',
                        overflowX: 'auto'
                      }}>
{`GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret
GOOGLE_REDIRECT_URI=http://localhost:3000/settings?tab=gdrive`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .settings-layout {
          display: grid;
          grid-templateColumns: 240px 1fr;
          gap: 24px;
        }
        .settings-sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 6px;
          height: fit-content;
          padding: 12px;
        }
        .tab-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.86rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all 0.2s;
          text-align: left;
          position: relative;
        }
        .tab-btn:hover {
          color: var(--text-primary);
          background-color: var(--bg-elevated);
        }
        .tab-btn.active {
          color: var(--cyan-primary);
          background: rgba(6, 182, 212, 0.1);
          font-weight: 600;
        }
        .tab-pill {
          margin-left: auto;
          font-size: 0.65rem;
          background: rgba(245, 158, 11, 0.15);
          color: var(--amber);
          padding: 2px 6px;
          border-radius: 4px;
          font-weight: 700;
        }
        .avatar-section {
          display: flex;
          align-items: center;
          gap: 16px;
          padding-bottom: 20px;
          margin-bottom: 20px;
          border-bottom: 1px solid var(--border-subtle);
        }
        .avatar-big {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0284C7, #0F766E);
          color: white;
          font-size: 1.2rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.25);
        }
        .toggle-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .toggle-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          cursor: pointer;
          padding: 10px 14px;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
        }
        .toggle-row input {
          margin-top: 4px;
          accent-color: var(--cyan-primary);
          cursor: pointer;
        }
        .toggle-title {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .toggle-sub {
          font-size: 0.76rem;
          color: var(--text-secondary);
          margin-top: 2px;
        }
        .mfa-cards-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .mfa-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
        }
        .mfa-icon-col {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          background: var(--bg-card);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .mfa-info-col {
          flex: 1;
        }
        .mfa-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .mfa-desc {
          font-size: 0.78rem;
          color: var(--text-secondary);
          margin-top: 3px;
          line-height: 1.4;
        }

        @media (max-width: 800px) {
          .settings-layout {
            grid-templateColumns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
