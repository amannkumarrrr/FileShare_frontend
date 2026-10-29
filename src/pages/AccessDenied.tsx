import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldAlert, 
  Lock, 
  ArrowLeft, 
  AlertOctagon, 
  Terminal, 
  FileCheck2, 
  CheckCircle2, 
  Home,
  Send
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Modal } from '../components/common/Modal';

export const AccessDenied: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useApp();

  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [justification, setJustification] = useState('');
  const [clearanceRequested, setClearanceRequested] = useState('Confidential');

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestModalOpen(false);
    showToast(`Clearance elevation ticket dispatched to Security Operations (Ticket: ZT-${Math.floor(Math.random() * 90000 + 10000)})`, 'success');
    setJustification('');
  };

  return (
    <div className="access-denied-page">
      <div className="denied-box zt-card">
        {/* Shield Icon Badge */}
        <div className="denied-icon-glow">
          <ShieldAlert size={48} color="var(--rose)" />
        </div>

        <div className="denied-code-pill">
          ERROR 403 &bull; ZERO-TRUST POLICY REJECTION
        </div>

        <h1 className="denied-title">Access Denied: Clearance Insufficient</h1>

        <p className="denied-message">
          Continuous zero-trust posture evaluation blocked access to this protected resource.
          Your current session attributes, network origin, or identity clearance do not meet the micro-segmentation threshold.
        </p>

        {/* Telemetry Details Box */}
        <div className="denied-telemetry-box">
          <div className="telemetry-item">
            <span className="telemetry-label">POLICY RULE:</span>
            <span className="telemetry-value">Strict Least-Privilege Enclave (POL-902-ZT)</span>
          </div>
          <div className="telemetry-item">
            <span className="telemetry-label">REQUIRED CLEARANCE:</span>
            <span className="telemetry-value highlight-red">Highly Confidential (Level 4)</span>
          </div>
          <div className="telemetry-item">
            <span className="telemetry-label">CURRENT IDENTITY:</span>
            <span className="telemetry-value">alex.morgan@zerotrust.sec</span>
          </div>
          <div className="telemetry-item">
            <span className="telemetry-label">INCIDENT REF:</span>
            <span className="telemetry-value">INC-20261029-BLOCK-8832</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="denied-buttons-row">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate('/dashboard')}
          >
            <Home size={16} />
            <span>Return to Secure Dashboard</span>
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setRequestModalOpen(true)}
          >
            <Send size={15} />
            <span>Request Temporary Clearance Elevation</span>
          </button>
        </div>
      </div>

      {/* Request Elevation Modal */}
      <Modal
        isOpen={requestModalOpen}
        onClose={() => setRequestModalOpen(false)}
        title={
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileCheck2 size={18} color="var(--cyan-primary)" />
            <span>Zero-Trust Clearance Elevation Request</span>
          </div>
        }
      >
        <form onSubmit={handleRequestSubmit}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Emergency clearance elevations are logged to SIEM audit trails and require cryptographic sign-off by the Security Operations Lead.
          </p>

          <div className="form-group">
            <label className="form-label required">Requested Clearance Level</label>
            <select
              className="form-select"
              value={clearanceRequested}
              onChange={(e) => setClearanceRequested(e.target.value)}
            >
              <option value="Internal">Internal (Level 2)</option>
              <option value="Confidential">Confidential (Level 3)</option>
              <option value="Highly Confidential">Highly Confidential (Level 4)</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label required">Business Need & Urgency Justification</label>
            <textarea
              className="form-textarea"
              rows={4}
              placeholder="State the active incident number, change request ID, or project operational necessity..."
              value={justification}
              onChange={(e) => setJustification(e.target.value)}
              required
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '20px' }}>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => setRequestModalOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary btn-sm"
            >
              Dispatch Approval Ticket
            </button>
          </div>
        </form>
      </Modal>

      <style>{`
        .access-denied-page {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }
        .denied-box {
          max-width: 620px;
          width: 100%;
          text-align: center;
          padding: 40px 32px;
          border-color: rgba(239, 68, 68, 0.3);
          box-shadow: 0 0 40px rgba(239, 68, 68, 0.12);
        }
        .denied-icon-glow {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px auto;
          box-shadow: 0 0 25px rgba(239, 68, 68, 0.25);
        }
        .denied-code-pill {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--rose);
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.25);
          padding: 3px 10px;
          border-radius: var(--radius-full);
          margin-bottom: 14px;
        }
        .denied-title {
          font-size: 1.55rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }
        .denied-message {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .denied-telemetry-box {
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 16px;
          text-align: left;
          font-family: var(--font-mono);
          font-size: 0.76rem;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 28px;
        }
        .telemetry-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .telemetry-label {
          color: var(--text-muted);
        }
        .telemetry-value {
          color: var(--text-primary);
        }
        .telemetry-value.highlight-red {
          color: var(--rose);
          font-weight: 600;
        }
        .denied-buttons-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
        }
      `}</style>
    </div>
  );
};
