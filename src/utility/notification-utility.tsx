import { NotificationObjType } from "../types/notificationTypes";

// Utilities for managing context data

// converts recordId(int) list to object list [{recordId: 11133}, {recordId: 11134},... ]
export const numListToObjList = (numList: Array<number>) => {
    return numList.map((num) => { return { recordId: num } });
}

// removes marked records from unread notification data
export const removeReadData = (markedRecords: Array<number>, unreadData: Array<any>): Array<NotificationObjType> => {
    return unreadData.filter((notification: NotificationObjType)=> !markedRecords.includes(notification.recordId))
}

// sets all records isRead status to true
export const setAllRecordsToIsReadStatus = (unreadData: Array<any>): Array<NotificationObjType> => {
    return unreadData.map((notification: NotificationObjType) => {
            notification.isRead = true;
        return notification;
    })
}

// updates all records isRead status to true if notification record has been read
export const updateAllRecordsReadStatus = (markedRecords: Array<number>, unreadData: Array<any>): Array<NotificationObjType> => {
    const markedRecordsSet = new Set(markedRecords);
    return unreadData.map((notification: NotificationObjType) => {
        if (markedRecordsSet.has(notification.recordId)) {
            notification.isRead = true;
        }
        return notification;
    })
}

export const getNotificationByRecordId = (recordId: number, allNotificationData: Array<any>): NotificationObjType | null => {
    for (let i = 0; i < allNotificationData.length; i++) {
        if (allNotificationData[i]['recordId'] === recordId) {
            return allNotificationData[i]
        }
    }
    return null
}

export const notificationDrawerWidth = 600;