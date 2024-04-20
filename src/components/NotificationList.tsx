import { List } from "@material-tailwind/react";

import NotificationListItem from "./NotificationListItem";

interface NotificationListProps {
    notificationDataArray: Array<any>
}

const NotificationList = (
    { notificationDataArray,
    }: NotificationListProps
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
        <List className=" max-w-[500px]">
            {notificationList}
        </List>
    );
}

export default NotificationList;