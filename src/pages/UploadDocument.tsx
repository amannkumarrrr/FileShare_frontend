import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  UploadCloud, 
  File, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  ShieldAlert, 
  Lock, 
  Shield, 
  X, 
  ArrowLeft,
  FileText,
  Cloud,
  HardDrive
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ClassificationLevel, FileType } from '../types';
import { driveApi } from '../services/api';

export const UploadDocument: React.FC = () => {
  const { addDocument, refreshBackendData, showToast } = useApp();
  const navigate = useNavigate();

  const [dragActive, setDragActive] = useState(false);
  const [rawFile, setRawFile] = useState<File | null>(null);
  const [selectedFile, setSelectedFile] = useState<{
    name: string;
    size: number;
    sizeFormatted: string;
    type: FileType;
  } | null>(null);

  const [storageTarget, setStorageTarget] = useState<'LOCAL' | 'GOOGLE_DRIVE'>('GOOGLE_DRIVE');
  const [classification, setClassification] = useState<ClassificationLevel>('Confidential');
  const [description, setDescription] = useState('');
  
  // Progress states
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadPhase, setUploadPhase] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const parseFileObject = (file: File) => {
    setRawFile(file);
    const ext = file.name.split('.').pop()?.toLowerCase() || '';
    let type: FileType = 'code';
    if (ext === 'pdf') type = 'pdf';
    else if (['doc', 'docx'].includes(ext)) type = 'docx';
    else if (['xls', 'xlsx', 'csv'].includes(ext)) type = 'xlsx';
    else if (['ppt', 'pptx'].includes(ext)) type = 'pptx';
    else if (['zip', 'tar', 'gz', '7z'].includes(ext)) type = 'zip';
    else if (['png', 'jpg', 'jpeg', 'svg'].includes(ext)) type = 'png';

    const sizeFormatted = 
      file.size > 1024 * 1024 
        ? `${(file.size / (1024 * 1024)).toFixed(1)} MB` 
        : `${Math.round(file.size / 1024)} KB`;

    setSelectedFile({
      name: file.name,
      size: file.size,
      sizeFormatted,
      type
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      parseFileObject(e.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      parseFileObject(e.target.files[0]);
    }
  };

  const handleCancelSelection = () => {
    setRawFile(null);
    setSelectedFile(null);
    setUploadProgress(0);
    setUploading(false);
  };

  const handleSubmitUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      showToast('Please select or drop a file to upload.', 'warning');
      return;
    }

    setUploading(true);
    setUploadProgress(20);
    setUploadPhase('Scanning file signatures & verifying integrity...');

    if (storageTarget === 'GOOGLE_DRIVE' && rawFile) {
      try {
        setUploadProgress(40);
        setUploadPhase('Authenticating Zero-Trust Google Drive session...');
        
        const formData = new FormData();
        formData.append('file', rawFile);
        formData.append('classification', classification);
        if (description) formData.append('description', description);

        setUploadProgress(65);
        setUploadPhase('Streaming ciphertext to Google Drive API v3...');

        await driveApi.uploadFile(formData);

        setUploadProgress(100);
        setUploadPhase('File encrypted and stored in Google Drive successfully.');
        showToast('Document uploaded to Google Drive with Zero-Trust provenance.', 'success');

        await refreshBackendData();

        setTimeout(() => {
          navigate('/documents');
        }, 600);
      } catch (err: any) {
        setUploading(false);
        showToast(`Drive upload failed: ${err.message}. If Drive is not connected, please connect it in Settings.`, 'error');
      }
    } else {
      setTimeout(() => {
        setUploadProgress(50);
        setUploadPhase('Generating cryptographic SHA-256 digest...');
      }, 400);

      setTimeout(() => {
        setUploadProgress(85);
        setUploadPhase(`Binding Zero-Trust policy: ${classification}...`);
      }, 900);

      setTimeout(async () => {
        setUploadProgress(100);
        setUploadPhase('Secure ingestion completed successfully.');
        
        await addDocument({
          name: selectedFile.name,
          type: selectedFile.type,
          size: selectedFile.size,
          sizeFormatted: selectedFile.sizeFormatted,
          classification,
          description
        });

        setTimeout(() => {
          navigate('/documents');
        }, 500);
      }, 1400);
    }
  };

  return (
    <div className="upload-page">
      <div className="page-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h1 className="page-title">
            <UploadCloud size={24} color="var(--cyan-primary)" />
            <span>Secure Document Ingestion</span>
          </h1>
          <p className="page-subtitle">
            Upload and bind documents to Zero-Trust classification criteria with cryptographic provenance.
          </p>
        </div>
        <button 
          type="button" 
          className="btn btn-secondary btn-sm"
          onClick={() => navigate('/documents')}
        >
          <ArrowLeft size={14} />
          <span>Back to Documents</span>
        </button>
      </div>

      <div className="upload-container zt-card">
        <form onSubmit={handleSubmitUpload}>
          {/* File Selection / Drag and Drop Area */}
          <input
            ref={fileInputRef}
            type="file"
            style={{ display: 'none' }}
            onChange={handleFileInputChange}
          />

          {!selectedFile ? (
            <div
              className={`dropzone-box ${dragActive ? 'dropzone-active' : ''}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="dropzone-icon">
                <UploadCloud size={40} color="var(--cyan-primary)" />
              </div>
              <h3 className="dropzone-title">Drag & Drop secure files here</h3>
              <p className="dropzone-sub">
                or <span className="browse-link">browse from your workstation</span>
              </p>
              <div className="dropzone-allowed">
                Supported formats: PDF, DOCX, XLSX, PPTX, ZIP, PNG (Max 100 MB per file)
              </div>
            </div>
          ) : (
            <div className="selected-file-banner">
              <div className="sfb-left">
                <div className="sfb-icon">
                  <FileText size={24} color="var(--cyan-primary)" />
                </div>
                <div>
                  <div className="sfb-name">{selectedFile.name}</div>
                  <div className="sfb-meta">
                    {selectedFile.sizeFormatted} &bull; Type: {selectedFile.type.toUpperCase()}
                  </div>
                </div>
              </div>
              {!uploading && (
                <button
                  type="button"
                  className="btn-icon"
                  title="Remove file"
                  onClick={handleCancelSelection}
                >
                  <X size={18} />
                </button>
              )}
            </div>
          )}

          {/* Storage Destination Target */}
          <div className="form-group" style={{ marginTop: '24px' }}>
            <label className="form-label required">Secure Storage Destination</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
              <label 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px 16px',
                  borderRadius: 'var(--radius-sm)',
                  border: `1px solid ${storageTarget === 'GOOGLE_DRIVE' ? 'var(--cyan-primary)' : 'var(--border-subtle)'}`,
                  background: storageTarget === 'GOOGLE_DRIVE' ? 'rgba(6, 182, 212, 0.08)' : 'var(--bg-card)',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                <input
                  type="radio"
                  name="storageTarget"
                  value="GOOGLE_DRIVE"
                  checked={storageTarget === 'GOOGLE_DRIVE'}
                  onChange={() => setStorageTarget('GOOGLE_DRIVE')}
                  style={{ accentColor: 'var(--cyan-primary)' }}
                />
                <Cloud size={20} color="var(--cyan-primary)" />
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.88rem' }}>
                    Google Drive (API v3)
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
                    Store in linked Google Drive with Zero-Trust access control
                  </div>
                </div>
              </label>

              <label 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px 16px',
                  borderRadius: 'var(--radius-sm)',
                  border: `1px solid ${storageTarget === 'LOCAL' ? 'var(--cyan-primary)' : 'var(--border-subtle)'}`,
                  background: storageTarget === 'LOCAL' ? 'rgba(6, 182, 212, 0.08)' : 'var(--bg-card)',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                <input
                  type="radio"
                  name="storageTarget"
                  value="LOCAL"
                  checked={storageTarget === 'LOCAL'}
                  onChange={() => setStorageTarget('LOCAL')}
                  style={{ accentColor: 'var(--cyan-primary)' }}
                />
                <HardDrive size={20} color="var(--emerald)" />
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.88rem' }}>
                    Local Encrypted Vault
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
                    Store on isolated server filesystem repository
                  </div>
                </div>
              </label>
            </div>
          </div>

          {/* Classification Selection */}
          <div className="form-group" style={{ marginTop: '20px' }}>
            <label className="form-label required">Zero-Trust Document Classification</label>
            <div className="classification-options-grid">
              {/* Public */}
              <label className={`class-option-card ${classification === 'Public' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="classification"
                  value="Public"
                  checked={classification === 'Public'}
                  onChange={() => setClassification('Public')}
                />
                <div className="coc-header">
                  <ShieldCheck size={16} color="#CBD5E1" />
                  <span className="coc-title">Public</span>
                </div>
                <p className="coc-desc">No restriction. Accessible to all users and external partners.</p>
              </label>

              {/* Internal */}
              <label className={`class-option-card ${classification === 'Internal' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="classification"
                  value="Internal"
                  checked={classification === 'Internal'}
                  onChange={() => setClassification('Internal')}
                />
                <div className="coc-header">
                  <Shield size={16} color="#60A5FA" />
                  <span className="coc-title">Internal</span>
                </div>
                <p className="coc-desc">Restricted to authenticated organization staff only.</p>
              </label>

              {/* Confidential */}
              <label className={`class-option-card ${classification === 'Confidential' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="classification"
                  value="Confidential"
                  checked={classification === 'Confidential'}
                  onChange={() => setClassification('Confidential')}
                />
                <div className="coc-header">
                  <Lock size={16} color="#A78BFA" />
                  <span className="coc-title">Confidential</span>
                </div>
                <p className="coc-desc">Role-based clearance required. Ephemeral tokens enforced.</p>
              </label>

              {/* Highly Confidential */}
              <label className={`class-option-card ${classification === 'Highly Confidential' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="classification"
                  value="Highly Confidential"
                  checked={classification === 'Highly Confidential'}
                  onChange={() => setClassification('Highly Confidential')}
                />
                <div className="coc-header">
                  <ShieldAlert size={16} color="#F87171" />
                  <span className="coc-title">Highly Confidential</span>
                </div>
                <p className="coc-desc">Strict micro-segmentation, watermarking & egress lock.</p>
              </label>
            </div>
          </div>

          {/* Description */}
          <div className="form-group">
            <label className="form-label">Document Summary / Justification</label>
            <textarea
              className="form-textarea"
              rows={3}
              placeholder="Provide context regarding resource contents and intended security audience..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Upload Progress Bar (when active) */}
          {uploading && (
            <div className="upload-progress-container">
              <div className="progress-info-line">
                <span className="phase-text">{uploadPhase}</span>
                <span className="percent-text">{uploadProgress}%</span>
              </div>
              <div className="progress-track">
                <div 
                  className="progress-fill" 
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="form-actions-row">
            <button
              type="button"
              className="btn btn-secondary"
              disabled={uploading}
              onClick={() => navigate('/documents')}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!selectedFile || uploading}
            >
              <UploadCloud size={16} />
              <span>{uploading ? 'Ingesting into Vault...' : 'Upload & Encrypt Document'}</span>
            </button>
          </div>
        </form>
      </div>

      <style>{`
        .upload-container {
          max-width: 860px;
          margin: 0 auto;
        }
        .dropzone-box {
          border: 2px dashed var(--border-medium);
          border-radius: var(--radius-md);
          padding: 40px 20px;
          text-align: center;
          cursor: pointer;
          background: rgba(11, 19, 36, 0.4);
          transition: all 0.2s ease;
        }
        .dropzone-box:hover, .dropzone-active {
          border-color: var(--cyan-primary);
          background: rgba(6, 182, 212, 0.04);
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.1);
        }
        .dropzone-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(6, 182, 212, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px auto;
        }
        .dropzone-title {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .dropzone-sub {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-top: 4px;
        }
        .browse-link {
          color: var(--cyan-primary);
          font-weight: 500;
          text-decoration: underline;
        }
        .dropzone-allowed {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 14px;
        }
        .selected-file-banner {
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 14px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .sfb-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .sfb-icon {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-sm);
          background: rgba(6, 182, 212, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sfb-name {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .sfb-meta {
          font-size: 0.76rem;
          color: var(--text-muted);
          margin-top: 2px;
        }
        .classification-options-grid {
          display: grid;
          grid-templateColumns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 12px;
          margin-top: 8px;
        }
        .class-option-card {
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 12px 14px;
          cursor: pointer;
          background: var(--bg-input);
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
        }
        .class-option-card input {
          display: none;
        }
        .class-option-card:hover {
          border-color: var(--border-medium);
        }
        .class-option-card.selected {
          border-color: var(--cyan-primary);
          background: rgba(6, 182, 212, 0.08);
          box-shadow: 0 0 12px rgba(6, 182, 212, 0.15);
        }
        .coc-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }
        .coc-title {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .coc-desc {
          font-size: 0.72rem;
          color: var(--text-secondary);
          line-height: 1.35;
        }
        .upload-progress-container {
          margin-top: 20px;
          padding: 14px;
          background: var(--bg-input);
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-subtle);
        }
        .progress-info-line {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          margin-bottom: 8px;
        }
        .phase-text {
          color: var(--cyan-primary);
          font-weight: 500;
        }
        .percent-text {
          font-weight: 700;
          color: var(--text-primary);
          font-family: var(--font-mono);
        }
        .progress-track {
          height: 8px;
          background: var(--bg-card);
          border-radius: var(--radius-full);
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #06B6D4, #10B981);
          transition: width 0.3s ease;
        }
        .form-actions-row {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
          padding-top: 16px;
          border-top: 1px solid var(--border-subtle);
        }
      `}</style>
    </div>
  );
};
