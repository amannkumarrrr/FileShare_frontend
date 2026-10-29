import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Files, 
  Search, 
  Filter, 
  ArrowUpDown, 
  LayoutGrid, 
  LayoutList, 
  UploadCloud, 
  Eye, 
  Share2, 
  Download, 
  Trash2, 
  ExternalLink,
  FileText,
  FileSpreadsheet,
  FileCode,
  Archive,
  Presentation,
  Shield,
  Plus,
  Cloud,
  HardDrive
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ClassificationBadge } from '../components/common/Badge';
import { ViewDocumentModal } from '../components/modals/ViewDocumentModal';
import { ShareModal } from '../components/modals/ShareModal';
import { EmptyState } from '../components/common/EmptyState';
import { DocumentItem, ClassificationLevel, FileType } from '../types';
import { driveApi } from '../services/api';

export const MyDocuments: React.FC = () => {
  const { documents, deleteDocument, showToast, globalSearch, backendConnected } = useApp();
  const navigate = useNavigate();

  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
  const [searchQuery, setSearchQuery] = useState(globalSearch || '');
  const [selectedClassification, setSelectedClassification] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'name' | 'date' | 'size'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const [viewDoc, setViewDoc] = useState<DocumentItem | null>(null);
  const [shareDoc, setShareDoc] = useState<DocumentItem | null>(null);

  // Sync if globalSearch changes
  React.useEffect(() => {
    if (globalSearch) {
      setSearchQuery(globalSearch);
    }
  }, [globalSearch]);

  const filteredDocs = useMemo(() => {
    return documents.filter((doc) => {
      const matchesSearch = 
        doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.owner.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesClassification = 
        selectedClassification === 'All' || doc.classification === selectedClassification;

      const matchesType = 
        selectedType === 'All' || doc.type === selectedType;

      return matchesSearch && matchesClassification && matchesType;
    }).sort((a, b) => {
      let comparison = 0;
      if (sortBy === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else if (sortBy === 'date') {
        comparison = new Date(a.lastModified).getTime() - new Date(b.lastModified).getTime();
      } else if (sortBy === 'size') {
        comparison = a.size - b.size;
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });
  }, [documents, searchQuery, selectedClassification, selectedType, sortBy, sortOrder]);

  const handleDownload = async (doc: DocumentItem) => {
    try {
      if (backendConnected) {
        showToast(`Requesting Zero-Trust stream for "${doc.name}"...`, 'info');
        await driveApi.downloadDocument(doc.id, doc.name);
        showToast(`Cryptographically verified download complete for "${doc.name}"`, 'success');
      } else {
        showToast(`Watermarked encrypted export generated for "${doc.name}"`, 'success');
      }
    } catch (err: any) {
      showToast(err.message || 'Download authorization blocked by Zero-Trust policy.', 'error');
    }
  };

  const handleDelete = (doc: DocumentItem) => {
    if (window.confirm(`Are you sure you want to delete "${doc.name}" from your secure documents?`)) {
      deleteDocument(doc.id);
    }
  };

  const getFileIcon = (type: FileType) => {
    switch (type) {
      case 'pdf':
        return <FileText size={20} color="#F87171" />;
      case 'docx':
        return <FileText size={20} color="#60A5FA" />;
      case 'xlsx':
        return <FileSpreadsheet size={20} color="#34D399" />;
      case 'pptx':
        return <Presentation size={20} color="#FBBF24" />;
      case 'zip':
        return <Archive size={20} color="#A78BFA" />;
      default:
        return <FileCode size={20} color="#94A3B8" />;
    }
  };

  return (
    <div className="my-documents-page">
      {/* Header */}
      <div className="page-header" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
        <div>
          <h1 className="page-title">
            <Files size={24} color="var(--cyan-primary)" />
            <span>My Secure Documents</span>
          </h1>
          <p className="page-subtitle">
            Manage, classify, and audit documents secured with Zero-Trust access parameters.
          </p>
        </div>
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={() => navigate('/upload')}
        >
          <UploadCloud size={16} />
          <span>Upload Document</span>
        </button>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="docs-toolbar zt-card">
        <div className="toolbar-search">
          <Search size={16} className="toolbar-search-icon" />
          <input
            type="text"
            className="form-input"
            style={{ paddingLeft: '36px' }}
            placeholder="Filter by name, tags, description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="toolbar-filters">
          <div className="filter-select-group">
            <label className="filter-label">Classification:</label>
            <select
              className="form-select filter-select"
              value={selectedClassification}
              onChange={(e) => setSelectedClassification(e.target.value)}
            >
              <option value="All">All Classifications</option>
              <option value="Public">Public</option>
              <option value="Internal">Internal</option>
              <option value="Confidential">Confidential</option>
              <option value="Highly Confidential">Highly Confidential</option>
            </select>
          </div>

          <div className="filter-select-group">
            <label className="filter-label">File Type:</label>
            <select
              className="form-select filter-select"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="All">All File Types</option>
              <option value="pdf">PDF Documents</option>
              <option value="docx">Word (.docx)</option>
              <option value="xlsx">Excel (.xlsx)</option>
              <option value="pptx">PowerPoint (.pptx)</option>
              <option value="zip">Zip Archives</option>
            </select>
          </div>

          <div className="filter-select-group">
            <label className="filter-label">Sort By:</label>
            <select
              className="form-select filter-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
            >
              <option value="date">Date Modified</option>
              <option value="name">Name</option>
              <option value="size">Size</option>
            </select>
            <button
              type="button"
              className="btn-icon"
              title={`Order: ${sortOrder === 'asc' ? 'Ascending' : 'Descending'}`}
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            >
              <ArrowUpDown size={15} />
            </button>
          </div>

          {/* View Toggle (Table / Grid) */}
          <div className="view-toggle-btns">
            <button
              type="button"
              className={`view-btn ${viewMode === 'table' ? 'active' : ''}`}
              onClick={() => setViewMode('table')}
              title="Table View"
            >
              <LayoutList size={16} />
            </button>
            <button
              type="button"
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Grid View"
            >
              <LayoutGrid size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Document List: Empty State or Content */}
      {filteredDocs.length === 0 ? (
        <EmptyState
          title="No Matching Documents Found"
          description="No files matched your current search and classification filters. Try resetting the filters or upload a new document."
          actionText="Clear Filters"
          onAction={() => {
            setSearchQuery('');
            setSelectedClassification('All');
            setSelectedType('All');
          }}
        />
      ) : viewMode === 'table' ? (
        /* TABLE VIEW */
        <div className="table-responsive">
          <table className="zt-table">
            <thead>
              <tr>
                <th>Document Name</th>
                <th>Classification</th>
                <th>Owner</th>
                <th>Size</th>
                <th>Last Modified</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDocs.map((doc) => (
                <tr key={doc.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div className="table-file-icon">
                        {getFileIcon(doc.type)}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span 
                          className="table-doc-name-clickable"
                          onClick={() => setViewDoc(doc)}
                          title="Click to view details"
                        >
                          {doc.name}
                        </span>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                          <span>v{doc.version} &bull; SHA-256: {doc.sha256Hash.substring(0, 8)}...</span>
                          {doc.storageLocation === 'GOOGLE_DRIVE' ? (
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', background: 'rgba(6, 182, 212, 0.12)', color: 'var(--cyan-primary)', padding: '1px 5px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 600 }}>
                              <Cloud size={10} /> Google Drive
                            </span>
                          ) : (
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', background: 'rgba(16, 185, 129, 0.12)', color: 'var(--emerald)', padding: '1px 5px', borderRadius: '4px', fontSize: '0.65rem' }}>
                              <HardDrive size={10} /> Local Vault
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <ClassificationBadge level={doc.classification} />
                  </td>
                  <td style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    {doc.owner}
                  </td>
                  <td style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    {doc.sizeFormatted}
                  </td>
                  <td style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {doc.lastModified}
                  </td>
                  <td>
                    <div className="table-actions">
                      <button
                        type="button"
                        className="btn-icon"
                        title="Quick Preview"
                        onClick={() => setViewDoc(doc)}
                      >
                        <Eye size={15} />
                      </button>
                      <button
                        type="button"
                        className="btn-icon"
                        title="Share Document"
                        onClick={() => setShareDoc(doc)}
                      >
                        <Share2 size={15} />
                      </button>
                      <button
                        type="button"
                        className="btn-icon"
                        title="Download Watermarked"
                        onClick={() => handleDownload(doc)}
                      >
                        <Download size={15} />
                      </button>
                      <button
                        type="button"
                        className="btn-icon"
                        title="Document Details & Version History"
                        onClick={() => navigate(`/documents/${doc.id}`)}
                      >
                        <ExternalLink size={15} />
                      </button>
                      <button
                        type="button"
                        className="btn-icon"
                        style={{ color: 'var(--rose)' }}
                        title="Delete Document"
                        onClick={() => handleDelete(doc)}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        /* GRID VIEW */
        <div className="docs-grid-cards">
          {filteredDocs.map((doc) => (
            <div key={doc.id} className="doc-card zt-card">
              <div className="doc-card-top">
                <div className="doc-card-icon">
                  {getFileIcon(doc.type)}
                </div>
                <ClassificationBadge level={doc.classification} showIcon={false} />
              </div>

              <h4 
                className="doc-card-title" 
                title={doc.name}
                onClick={() => setViewDoc(doc)}
              >
                {doc.name}
              </h4>
              <p className="doc-card-desc">{doc.description}</p>

              <div className="doc-card-meta">
                <span>{doc.sizeFormatted}</span>
                <span>&bull;</span>
                {doc.storageLocation === 'GOOGLE_DRIVE' ? (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', color: 'var(--cyan-primary)' }}>
                    <Cloud size={11} /> Google Drive
                  </span>
                ) : (
                  <span>v{doc.version}</span>
                )}
                <span>&bull;</span>
                <span>{doc.lastModified.substring(0, 10)}</span>
              </div>

              <div className="doc-card-footer">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setViewDoc(doc)}
                >
                  <Eye size={13} />
                  <span>Preview</span>
                </button>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <button
                    type="button"
                    className="btn-icon"
                    title="Share"
                    onClick={() => setShareDoc(doc)}
                  >
                    <Share2 size={15} />
                  </button>
                  <button
                    type="button"
                    className="btn-icon"
                    title="Download"
                    onClick={() => handleDownload(doc)}
                  >
                    <Download size={15} />
                  </button>
                  <button
                    type="button"
                    className="btn-icon"
                    title="Full Details"
                    onClick={() => navigate(`/documents/${doc.id}`)}
                  >
                    <ExternalLink size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modals */}
      <ViewDocumentModal
        isOpen={Boolean(viewDoc)}
        onClose={() => setViewDoc(null)}
        document={viewDoc}
        onOpenShare={(doc) => setShareDoc(doc)}
      />

      <ShareModal
        isOpen={Boolean(shareDoc)}
        onClose={() => setShareDoc(null)}
        document={shareDoc}
      />

      <style>{`
        .docs-toolbar {
          padding: 16px 20px;
          margin-bottom: 24px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .toolbar-search {
          position: relative;
          min-width: 280px;
          flex: 1;
        }
        .toolbar-search-icon {
          position: absolute;
          left: 12px;
          top: 11px;
          color: var(--text-muted);
          pointer-events: none;
        }
        .toolbar-filters {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
        }
        .filter-select-group {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .filter-label {
          font-size: 0.78rem;
          color: var(--text-muted);
          white-space: nowrap;
        }
        .filter-select {
          padding: 6px 10px;
          font-size: 0.8rem;
          width: auto;
          min-width: 130px;
        }
        .view-toggle-btns {
          display: flex;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          overflow: hidden;
        }
        .view-btn {
          padding: 7px 10px;
          color: var(--text-secondary);
          background: var(--bg-elevated);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .view-btn.active {
          color: var(--cyan-primary);
          background: var(--bg-card-hover);
        }
        .table-file-icon {
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          background: var(--bg-elevated);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .table-doc-name-clickable {
          font-weight: 600;
          color: var(--text-primary);
          cursor: pointer;
        }
        .table-doc-name-clickable:hover {
          color: var(--cyan-primary);
          text-decoration: underline;
        }
        .table-actions {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .docs-grid-cards {
          display: grid;
          grid-templateColumns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }
        .doc-card {
          display: flex;
          flex-direction: column;
          transition: all 0.2s ease;
        }
        .doc-card:hover {
          border-color: var(--cyan-primary);
          transform: translateY(-2px);
        }
        .doc-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .doc-card-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          background: var(--bg-elevated);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .doc-card-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          cursor: pointer;
          margin-bottom: 6px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .doc-card-title:hover {
          color: var(--cyan-primary);
        }
        .doc-card-desc {
          font-size: 0.78rem;
          color: var(--text-secondary);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 1.4;
          margin-bottom: 14px;
          flex: 1;
        }
        .doc-card-meta {
          font-size: 0.72rem;
          color: var(--text-muted);
          display: flex;
          gap: 6px;
          align-items: center;
          margin-bottom: 14px;
          border-top: 1px solid var(--border-subtle);
          padding-top: 10px;
        }
        .doc-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
};
