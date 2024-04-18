import React from "react";
import {
  
  Typography,
  
} from "@material-tailwind/react";

import IconEnvelopeOpen from "./icons/IconEnvelopeOpen";

import { NotificationObjType } from "../types/notificationTypes";
import AlertIcon from "./icons/NotificationTypeIcon";

const NotificationContainer = ({
    description,
    isRead,
    recordId,
    title,
    msgType,
}: NotificationObjType) => {
    return (
        <div>
            <AlertIcon notificationMsgType={msgType}/>
            <IconEnvelopeOpen  />
            <Typography variant="h4" color="blue-gray">
                {title}
            </Typography>
            <Typography>
                {description} {recordId}
            </Typography>
          </div>
    );
}

export default NotificationContainer;