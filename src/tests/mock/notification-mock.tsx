import { render } from "@testing-library/react"

import { NotificationProvider } from "../../provider/NotificationProvider"

export const MOCK_ORG_ID = 1314777

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
        description: "Pineapple on Pizza 2",
        isRead: false,
        msgType: "ERROR",
        recordId: 1121,
        title: "Notification 11",
    }
]

export const mockAllNotificationData = [
    ...mockUnreadNotificationData,
    {
        key: "2121",
        description: "Pineapple on Pizza",
        isRead: true,
        msgType: "ERROR",
        recordId: 2121,
        title: "Notification 11",
    }
]


export const mockNotificationContextValue = {
    //...notificatioDefaultContext,
    allRecords: mockAllNotificationData,
    allUnreadRecords: mockUnreadNotificationData,
    currentRecord: 2121,
    isLoadingGetAllRecords: false,
    isLoadingGetUnreadRecords: false,
    markedRecords: [1121,1120],
    orgId: 1314555,
    setAllRecords: ()=>{},
    setAllUnreadRecords: ()=>{},
    setCurrentRecord: ()=>{},
    setIsLoadingGetAllRecords: ()=>{},
    setIsLoadingGetUnreadRecords: ()=>{},
    setMarkedRecords: ()=>{},
    setOrgId: ()=>{},
  }

  export const customRender = (
    ui: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, 
    {providerProps, ...renderOptions}: any) => {
    return render(
      <NotificationProvider 
        {...providerProps}>{ui}
      </NotificationProvider>,
      renderOptions,
    )
  }