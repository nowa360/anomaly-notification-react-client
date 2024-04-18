import React from 'react';

import { BrowserRouter } from "react-router-dom";

import DrawerNav from './components/DrawerNav';
import NotificationRouter from './components/NotificationRouter';
import { NotificationProvider, useNotificationContext } from './provider/NotificationProvider';

import './App.css';

export const ContextData = React.createContext({});

const App = () => {
  return (
    <div className="Anomaly-Notification-App m-10">
      <header className="text-3xl font-bold mb-5">
        <h1>
          Anomaly Notification React Client
        </h1>
      </header>
      <BrowserRouter>
        <NotificationProvider>
          <DrawerNav />
          <NotificationRouter />
        </NotificationProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
