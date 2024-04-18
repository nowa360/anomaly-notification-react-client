import React from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  Drawer,
  Button,
  Typography,
  List,
} from "@material-tailwind/react";

import IconError from "./icons/IconCloseBtn";
import IconCloseBtn from "./icons/IconCloseBtn";
import NotificationListItem from "./NotificationListItem";
import NotificationContainer from "./NotificationContainer";
import NotificationList from "./NotificationList";
import { mockNotificationData } from "../data/notification";
import { useNotificationContext } from "../provider/NotificationProvider";

const DrawerNav = () => {

  const {allRecords} = useNotificationContext();
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <>
      <Button onClick={openDrawer}>Check Notifications</Button>
      <Drawer open={open} onClose={closeDrawer} size={600}>
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h3" color="blue-gray">
            Anomaly Notification
          </Typography>
          <IconCloseBtn onClickClose={closeDrawer} />
        </div>

        {/* TODO: can render on !error and !isLoading if not using mock data */}
        {
          allRecords.length === 0 ? <></> : 
          <NotificationList notificationDataArray={allRecords} /> 
        }
        <Button className="mt-3 ml-5" size="sm">
          Mark all as read
        </Button>
      </Drawer>
    </>
  );
}

export default DrawerNav;