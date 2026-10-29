import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { AppLayout } from './components/layout/AppLayout';

// Pages
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { MyDocuments } from './pages/MyDocuments';
import { DocumentDetails } from './pages/DocumentDetails';
import { SharedWithMe } from './pages/SharedWithMe';
import { SharedByMe } from './pages/SharedByMe';
import { UploadDocument } from './pages/UploadDocument';
import { UserManagement } from './pages/UserManagement';
import { SecurityActivity } from './pages/SecurityActivity';
import { Settings } from './pages/Settings';
import { AccessDenied } from './pages/AccessDenied';

export const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Auth Gateway */}
          <Route path="/login" element={<Login />} />

          {/* Secure Vault Layout Protected Routes */}
          <Route element={<AppLayout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/documents" element={<MyDocuments />} />
            <Route path="/documents/:id" element={<DocumentDetails />} />
            <Route path="/shared-with-me" element={<SharedWithMe />} />
            <Route path="/shared-by-me" element={<SharedByMe />} />
            <Route path="/upload" element={<UploadDocument />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/activity" element={<SecurityActivity />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/access-denied" element={<AccessDenied />} />
          </Route>

          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
