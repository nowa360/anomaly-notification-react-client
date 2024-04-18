import {createContext} from "react";

const MOCK_ORG_ID = "mockOrg1314"

export const notificatioDefaultContext = {
    allRecords: [{}],
    allUnreadRecords: {},
    currentRecord: 0,
    markedRecords: new Set(),
    orgId: 0,
    // setAllRecords: () => {},
    // setAllUnreadRecords: () => {},
    setCurrentRecord: (record: number) => {},
    setMarkedRecords: (record: any) => {},
    // setOrgId: () => {},
    // addMarkedRecords: (record: any) => record,
    // removeMarkedRecords: (record: any) => record,
}