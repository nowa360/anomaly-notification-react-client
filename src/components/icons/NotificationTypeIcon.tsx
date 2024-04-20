import IconError from "./InfoError";
import IconInfo from "./IconInfo";
import IconSuccess from "./IconSuccess";
import IconWarning from "./IconWarning";
import { NotificationMsgType, NotificationMsgTypeEnum } from "../../types/notificationTypes";

interface NotificationTypeIconProps {
    notificationMsgType?: NotificationMsgType | string;
}

const NotificationTypeIcon = ({notificationMsgType}: NotificationTypeIconProps) => {
    let defaultIcon = <IconInfo />;
    switch (notificationMsgType) {
        case NotificationMsgTypeEnum.SUCCESS: {
            defaultIcon = <IconSuccess />
            break;
        }
        case NotificationMsgTypeEnum.ERROR: {
            defaultIcon = <IconError />
            break;
        }
        case NotificationMsgTypeEnum.WARNING: {
            defaultIcon = <IconWarning />
            break;
        }        
    }
    return (
        <div className={`notification-type-icon ${notificationMsgType} pt-2`}>
            {defaultIcon}
        </div>
    )
}

export default NotificationTypeIcon;