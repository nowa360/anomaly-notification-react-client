import React from "react";

import {
    Drawer,
    Button,
    Typography,
    List,
} from "@material-tailwind/react";
import NotificationListItem from "./NotificationListItem";
import { mockNotificationData } from "../data/notification";
import { NotificationObjType } from "../types/notificationTypes";

interface NotificationListProps {
    notificationDataArray: Array<any>
}

const NotificationList = (
    { notificationDataArray }: NotificationListProps
) => {
    const notificationList = notificationDataArray.map(notificationData =>
        <NotificationListItem
            key={notificationData.key}
            description={notificationData.description}
            recordId={notificationData.recordId}
            isRead={notificationData.isRead}
            title={notificationData.title}
            msgType={notificationData.msgType}
        />
    )
    return (
        <List >
            {notificationList}
        </List>
    );
}

export default NotificationList;