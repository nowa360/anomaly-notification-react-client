import { useParams } from "react-router-dom";

import { Typography } from "@material-tailwind/react";

import AlertIcon from "./icons/NotificationTypeIcon";
import ReadStatusIcon from "./icons/ReadStatusIcon";
import { getNotificationByRecordId } from "../utility/notification-utility";
import { useNotificationContext } from "../provider/NotificationProvider";

const NotificationContainer = () => {
    const { recordId } = useParams();
    const {
        allRecords,
    } = useNotificationContext();

    if (!recordId) return (<div>No record id</div>)
    const {
        description,
        isRead,
        msgType,
        title,
    } = { ...getNotificationByRecordId(+recordId, allRecords) }
    const isReadStatus = isRead ? isRead : false
    return (
        <div className="mt-10">
            <AlertIcon notificationMsgType={msgType} />
            <Typography className="mt-2" variant="h1">{recordId}. {title}</Typography>
            <Typography className="mb-2">
                {msgType}: {description}
            </Typography>
            <ReadStatusIcon isRead={isReadStatus} />

        </div>
    );
}

export default NotificationContainer;