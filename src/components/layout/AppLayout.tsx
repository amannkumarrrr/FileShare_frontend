import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { NotificationToast } from '../common/NotificationToast';

export const AppLayout: React.FC = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content-wrapper">
        <Navbar />
        <main className="page-container">
          <Outlet />
        </main>
      </div>
      <NotificationToast />
    </div>
  );
};
