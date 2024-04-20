import { useCallback } from "react";

import {
  Button,
  Drawer,
  Typography,
} from "@material-tailwind/react";

import IconCloseBtn from "./icons/IconCloseBtn";
import NotificationList from "./NotificationList";
import { notificationDrawerWidth } from "../utility/notification-utility";
import { useMarkAllAsReadPost } from "../hooks/useMarkAllAsReadPost";
import { useMarkAsReadPost } from "../hooks/useMarkAsReadPost";
import { useNotificationContext } from "../provider/NotificationProvider";

interface DrawerNavProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
}

const DrawerNav = ({
  isDrawerOpen,
  setIsDrawerOpen,
}: DrawerNavProps) => {
  const {
    allRecords,
    orgId,
    setAllRecords,
    setAllUnreadRecords,
    setMarkedRecords,
    allUnreadRecords,
    markedRecords,
  } = useNotificationContext();
  const {
    postMarkAllAsRead,
  } = useMarkAllAsReadPost(
    allRecords,
    orgId,
    setAllRecords,
    setAllUnreadRecords,
    setMarkedRecords
  );
  const { postMarkAsRead } = useMarkAsReadPost();

  const handleMarkCheckedItemsAsRead = useCallback(() => {
    postMarkAsRead();
  }, [postMarkAsRead])

  const handleMarkAllAsRead = useCallback(() => {
    postMarkAllAsRead()
  }, [postMarkAllAsRead])


  return (
    <div className="drawer-main h-96">
      <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} size={notificationDrawerWidth}>
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h3" color="blue-gray">
            Anomaly Notifications
          </Typography>
          <IconCloseBtn onClickClose={() => setIsDrawerOpen(false)} />
        </div>

        {/* TODO: can render on !error and !isLoading if not using mock data */}
        <div className="overflow-y-auto h-2/3">
          {
            allUnreadRecords.length === 0 ? <></> :
              <NotificationList
                notificationDataArray={allUnreadRecords} />
          }
        </div>
        <div className="h-full min-h-[60px]">
          <Button
            className="mt-3 ml-5"
            disabled={markedRecords.length === 0}
            onClick={handleMarkCheckedItemsAsRead}
            size="sm">
            Mark checked items as read
          </Button>
          <Button
            className="mt-3 ml-5"
            disabled={allUnreadRecords.length === 0}
            onClick={handleMarkAllAsRead}
            size="sm">
            Mark all as read
          </Button>
        </div>
      </Drawer>
    </div>
  );
}

export default DrawerNav;