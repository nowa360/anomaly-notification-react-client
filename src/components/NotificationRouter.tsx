import React from "react";


import {
    Drawer,
    Button,
    Typography,
    List,
  } from "@material-tailwind/react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NotificationContainer from "./NotificationContainer";
import { useNotificationContext } from "../provider/NotificationProvider";

const NotificationRouter = () => {
    const {
        currentRecord
      } = useNotificationContext();
    return (
        <Routes>
            <Route path={'/'} element={
              <Typography variant="h3" color="blue-gray">
                Anomaly Home
              </Typography>}
            />
            <Route path={`/notification/${currentRecord}`} element={
              <NotificationContainer
                description="kirebkj aksdjh faksjdh kaj dkfja"
                isRead={true}
                title="Notification Title 1"
                msgType="SUCCESS"
                recordId={currentRecord}
              />}
            />

          </Routes>
    )
}

export default NotificationRouter;