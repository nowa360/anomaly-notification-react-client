import IconEnvelopeClose from "./IconEnvelopeClose";
import IconEnvelopeOpen from "./IconEnvelopeOpen";

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