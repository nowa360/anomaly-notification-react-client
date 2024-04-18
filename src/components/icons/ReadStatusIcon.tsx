import React from "react";

import IconEnvelopeOpen from "./IconEnvelopeOpen";
import IconEnvelopeClose from "./IconEnvelopeClose";

interface ReadStatusIconProps {
    isRead: boolean;
}

const ReadStatusIcon = ({isRead}: ReadStatusIconProps) => {
    let defaultReadStatusIcon = isRead ? <IconEnvelopeOpen /> : <IconEnvelopeClose />;
    return (
        <div className={`is-read-status`}>
            {defaultReadStatusIcon}
        </div>
    )
}

export default ReadStatusIcon;