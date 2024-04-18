import React, {useCallback} from "react";
import {
    Checkbox,
    Drawer,
    Button,
    Typography,
    Textarea,
    IconButton,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import IconInfo from "./icons/IconInfo";
import IconError from "./icons/InfoError";
import IconWarning from "./icons/IconWarning";
import IconEnvelopeClose from "./icons/IconEnvelopeClose";
import IconEnvelopeOpen from "./icons/IconEnvelopeOpen";

import { NotificationObjType } from "../types/notificationTypes";
import AlertIcon from "./icons/NotificationTypeIcon";
import ReadStatusIcon from "./icons/ReadStatusIcon";
import { useNotificationContext } from "../provider/NotificationProvider";

interface NotificationListItemProps extends NotificationObjType {
    key: string | number;
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

    const notificationCheckboxOnClick = () => {
        if (markedRecords.has(recordId)) {
            setMarkedRecords((prev: Set<number>) => {
                prev.delete(recordId);
                return prev;
            })
        } else {
            setMarkedRecords((prev: Set<number>) => {
                prev.add(recordId);
                return prev;
            })
        }
    }

    const notificationOnClick = () => {
        setCurrentRecord(recordId)
    }

    return (
        <ListItem>
            <ListItemPrefix>
                <Checkbox crossOrigin="" ripple={true} onClick={notificationCheckboxOnClick} />
            </ListItemPrefix>
            <Link to={`/notification/${recordId}`} onClick={notificationOnClick}>
                <AlertIcon notificationMsgType={msgType} />
                <Typography variant="h4" color="blue-gray">
                    {title} {description}
                </Typography>
            </Link>
            <ListItemSuffix>
                <ReadStatusIcon isRead={isRead} />
            </ListItemSuffix>
        </ListItem>

    );
}

export default NotificationListItem;