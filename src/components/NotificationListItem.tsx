import { useCallback } from "react";

import {
    Checkbox,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

import AlertIcon from "./icons/NotificationTypeIcon";
import ReadStatusIcon from "./icons/ReadStatusIcon";
import { NotificationObjType } from "../types/notificationTypes";
import { notificationDrawerWidth } from "../utility/notification-utility";
import { useMarkAsReadPost } from "../hooks/useMarkAsReadPost";
import { useNotificationContext } from "../provider/NotificationProvider";

interface NotificationListItemProps extends NotificationObjType {
    //key: string | number;
}

const NotificationListItem = ({
    description,
    isRead,
    msgType,
    recordId,
    title
}: NotificationListItemProps) => {
    const {
        markedRecords,
        setCurrentRecord,
        setMarkedRecords,
    } = useNotificationContext();

    const {
        postMarkAsRead
    } = useMarkAsReadPost()
    const notificationCheckboxOnClick = (event: any) => {
        event.stopPropagation();
        if (markedRecords.includes(recordId)) {
            setMarkedRecords(markedRecords.filter(record => record !== recordId))
        } else {
            setMarkedRecords(markedRecords.concat(recordId))
        }
    }

    const notificationOnClick = useCallback((event: any) => {
        event.preventDefault();
        setCurrentRecord(recordId)
        postMarkAsRead([recordId])
      }, [postMarkAsRead, recordId, setCurrentRecord])

    return (
        <ListItem onClick={notificationOnClick}>
            <ListItemPrefix>
                <Checkbox crossOrigin="" ripple={true} onClick={notificationCheckboxOnClick} />
            </ListItemPrefix>
            <Link to={`/notification/${recordId}`} >
                <div className={`flex gap-2 w-[${notificationDrawerWidth-200}px]`}>
                    <AlertIcon notificationMsgType={msgType} />
                    <Typography variant="h4" color="blue-gray" className=" truncate ">
                        {title}
                    </Typography>
                </div>
                <div className={`flex gap-2 w-[${notificationDrawerWidth-200}px]`}>
                    <Typography color="blue-gray" className="truncate ">
                        {description}
                    </Typography>
                </div>
            </Link>
            <ListItemSuffix >
                <ReadStatusIcon isRead={isRead} />
            </ListItemSuffix>
        </ListItem>
    );
}

export default NotificationListItem;