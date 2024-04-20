import { NotificationObjType  } from "../types/notificationTypes"

export const MOCK_ORG_ID = 3147788

// recordId & key are unique
export const mockUnreadNotificationData = [
    {
        key: "1111",
        description: "Two households, both alike in dignity, In fair Verona, where we lay our scene, From ancient grudge break to new mutiny, Where civil blood makes civil hands unclean.",
        isRead: false,
        msgType: "ERROR",
        recordId: 1111,
        title: "Notification 1",
    },
    {
        key: "1112",
        description: "From forth the fatal loins of these two foes A pair of star-cross'd lovers take their life; Whose misadventured piteous overthrows Do with their death bury their parents' strife.",
        isRead: false,
        msgType: "WARNING",
        recordId: 1112,
        title: "Notification 2",
    },
    {
        key: "1113",
        description: "The fearful passage of their death-mark'd love, And the continuance of their parents' rage,",
        isRead: false,
        msgType: "INFO",
        recordId: 1113,
        title: "Notification 3 Lorem ipsum dolor sit amet, consectetur adipisc",
    },
    {
        key: "1114",
        description: "Which, but their children's end, nought could remove, Is now the two hours' traffic of our stage;",
        isRead: false,
        msgType: "SUCCESS",
        recordId: 1114,
        title: "Notification 4",
    },
    {
        key: "1115",
        description: "The which if you with patient ears attend, What here shall miss, our toil shall strive to mend.",
        isRead: false,
        msgType: "SUCCESS",
        recordId: 1115,
        title: "Notification 5",
    },
    {
        key: "1116",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        isRead: false,
        msgType: "WARNING",
        recordId: 1116,
        title: "Notification 6",
    },
    {
        key: "1117",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        isRead: false,
        msgType: "SUCCESS",
        recordId: 1117,
        title: "Notification 7",
    },
    {
        key: "1118",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        isRead: false,
        msgType: "SUCCESS",
        recordId: 1118,
        title: "Notification 8",
    },
    {
        key: "1119",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        isRead: false,
        msgType: "ERROR",
        recordId: 1119,
        title: "Notification 9",
    },
    {
        key: "1120",
        description: "Meow.",
        isRead: false,
        msgType: "WARNING",
        recordId: 1120,
        title: "Notification 10",
    },
    {
        key: "1121",
        description: "Pineapple on Pizza",
        isRead: false,
        msgType: "ERROR",
        recordId: 1121,
        title: "Notification 11",
    }
]

// recordId & key are unique
export const mockNotificationData: Array<NotificationObjType> = [
    ...mockUnreadNotificationData,
    {
        key: "2111",
        description: "This is a notification 1",
        isRead: true,
        msgType: "ERROR",
        recordId: 2111,
        title: "Notification 2111",
    },
    {
        key: "2112",
        description: "This is a notification 2",
        isRead: false,
        msgType: "WARNING",
        recordId: 2112,
        title: "Notification 2112",
    },
    {
        key: "2113",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        isRead: false,
        msgType: "INFO",
        recordId: 2113,
        title: "Notification 2113 Lorem ipsum dolor sit amet, consectetur adipisc",
    },
    {
        key: "2114",
        description: "This is a notification 4",
        isRead: false,
        msgType: "SUCCESS",
        recordId: 2114,
        title: "Notification 2114",
    },
]


export const mockNotificationByIDData = {
    1111: {
        description: "This is a notification 1",
        isRead: false,
        msgType: "ERROR",
        recordId: 1111,
        title: "Notification 1",
    },
    1112: {
        description: "This is a notification 2",
        isRead: false,
        msgType: "WARNING",
        recordId: 1112,
        title: "Notification 2",
    },
    1113: {
        description: "This is a notification 3",
        isRead: false,
        msgType: "INFO",
        recordId: 1113,
        title: "Notification 3",
    },
    1114: {
        description: "This is a notification 4",
        isRead: false,
        msgType: "SUCCESS",
        recordId: 1114,
        title: "Notification 4",
    }
}