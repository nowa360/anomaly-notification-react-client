import { useState } from "react";

import { markAllUnreadRecordsAsReadUrl } from "../data/urls";
import { setAllRecordsToIsReadStatus } from "../utility/notification-utility";
import { useNotificationContext } from "../provider/NotificationProvider";


export const useMarkAllAsReadPost = () => {
    const {
        allRecords,
        orgId,
        setAllRecords,
        setAllUnreadRecords,
        setMarkedRecords,
    } = useNotificationContext();
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [data, setData] = useState({})

    const postMarkAllAsRead = () => {
        fetch(markAllUnreadRecordsAsReadUrl(orgId), {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({orgId: orgId})
        })
            .then(response => response.json())
            .then(result => {
                setData(result)
                setIsLoading(false)

                const newAllRecordsData = setAllRecordsToIsReadStatus(allRecords)
                setAllRecords(newAllRecordsData)
                setAllUnreadRecords([])
                setMarkedRecords([])
            })
            .catch(error => {
                // TODO: Trigger alert service here

                // Error here expected if backend not hooked
                console.error('POST: Error marking all notifications as read:', error)
                setHasError(true)
            })
            // TODO: remove finally-clause upon attaching backend
            .finally(() => {
                const newAllRecordsData = setAllRecordsToIsReadStatus(allRecords)
                setAllRecords(newAllRecordsData)
                setAllUnreadRecords([])
                setMarkedRecords([])
            })
    }

    return ({
        isLoading,
        hasError,
        data,
        postMarkAllAsRead,
    })
}