import React from "react";

import { NotificationMsgType } from "../../types/notificationTypes";
import IconInfo from "./IconInfo";
import IconError from "./InfoError";
import IconWarning from "./IconWarning";

interface NotificationTypeIconProps {
    notificationMsgType: NotificationMsgType;
}

const NotificationTypeIcon = ({notificationMsgType}: NotificationTypeIconProps) => {
    let defaultIcon = <IconInfo />;
    switch (notificationMsgType) {
        case "ERROR": {
            defaultIcon = <IconError />
            break;
        }
        case "WARNING": {
            defaultIcon = <IconWarning />
            break;
        }        
    }
    return (
        <div className={`notification-type-icon ${notificationMsgType}`}>
            {defaultIcon}
        </div>
    )
}

export default NotificationTypeIcon;