import { useState } from "react";

import { markAllUnreadRecordsAsReadUrl } from "../data/urls";
import { setAllRecordsToIsReadStatus } from "../utility/notification-utility";

export const useMarkAllAsReadPost = (
        allRecords: any,
        orgId: number,
        setAllRecords: any,
        setAllUnreadRecords: any,
        setMarkedRecords: any,
) => {
    
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [hasError, setHasError] = useState<boolean>(false)
    const [data, setData] = useState<any>({})

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
                console.error('POST__mark_all_unread_records: No backend hooked')
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