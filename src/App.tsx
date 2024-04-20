import { createContext, useState } from 'react';

import {
  Button,
} from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";

import DrawerNav from './components/DrawerNav';
import NotificationRouter from './components/NotificationRouter';
import { NotificationProvider } from './provider/NotificationProvider';

import './App.css';

export const ContextData = createContext({});

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="Anomaly-Notification-App m-10">
      <BrowserRouter>
        <NotificationProvider>
          <header className="">
            <nav className="flex items-center justify-between flex-wrap bg-black p-6">
              <h1 className='text-white text-xl'>
                Anomaly Notification Client
              </h1>
              <Button
                color='white'
                onClick={() => { setIsDrawerOpen((prev) => !prev) }}
                variant="outlined"
              >Check Notifications</Button>
            </nav>
          </header>
          <DrawerNav isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
          <NotificationRouter />
        </NotificationProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
