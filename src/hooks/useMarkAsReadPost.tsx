import { useState } from "react";

import { markRecordsAsReadUrl } from "../data/urls";
import { numListToObjList, removeReadData, updateAllRecordsReadStatus } from "../utility/notification-utility";
import { useNotificationContext } from "../provider/NotificationProvider";


export const useMarkAsReadPost = () => {
    const {
        allRecords,
        allUnreadRecords,
        markedRecords,
        orgId,
        setAllRecords,
        setAllUnreadRecords,
        setMarkedRecords,
    } = useNotificationContext();
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [data, setData] = useState({})

    const postMarkAsRead = (markedRecordArray=markedRecords) => {
        const jsonData = numListToObjList(markedRecords)
        fetch(markRecordsAsReadUrl(orgId), {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(jsonData)
        })
            .then(response => response.json())
            .then(result => {
                setData(result)
                setIsLoading(false)

                const newUnreadData = removeReadData(markedRecordArray, allUnreadRecords)
                setAllUnreadRecords(newUnreadData)
                const newAllRecordsData = updateAllRecordsReadStatus(markedRecordArray, allRecords)
                setAllRecords(newAllRecordsData)
                setMarkedRecords([])
            })
            .catch(error => {
                // TODO: Trigger alert service here

                // Error here expected if backend not hooked
                console.error('POST: Error marking checked notifications as read:', error)
                setHasError(true)
            })
            // TODO: remove finally-clause upon attaching backend
            .finally(() => {
                const newUnreadData = removeReadData(markedRecordArray, allUnreadRecords)
                setAllUnreadRecords(newUnreadData)
                const newAllRecordsData = updateAllRecordsReadStatus(markedRecordArray, allRecords)
                setAllRecords(newAllRecordsData)
                setMarkedRecords([])
            })
    }

    return ({
        isLoading,
        hasError,
        data,
        postMarkAsRead,
    })
}