import { NotificationObjType } from "../types/notificationTypes";
import { MOCK_ORG_ID } from "../data/notification";

export const notificatioDefaultContext = {
    allRecords: [{}],
    allUnreadRecords: [{}],
    currentRecord: 0,
    isLoadingGetAllRecords: false,
    isLoadingGetUnreadRecords: false,
    markedRecords: new Array<number>(),
    orgId: MOCK_ORG_ID,
    setAllRecords: (allRecords: Array<NotificationObjType>) => { },
    setAllUnreadRecords: (unreadRecords: Array<NotificationObjType>) => { },
    setCurrentRecord: (record: number) => { },
    setIsLoadingGetAllRecords: (isLoadingGetAllRecords: boolean) => { },
    setIsLoadingGetUnreadRecords: (isLoadingGetUnreadRecords: boolean) => { },
    setMarkedRecords: (records: Array<number>) => { },
    setOrgId: (orgId: number) => { },
}