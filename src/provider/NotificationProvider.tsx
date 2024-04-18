import { createContext, useContext, useEffect, useState } from 'react'

import { notificatioDefaultContext } from './NotificationContext'
import { getAllRecords } from '../data/urls'
import { MOCK_ORG_ID, mockNotificationData, mockUnreadNotificationData } from '../data/notification'

interface NotificationProviderProps {
    children: React.ReactNode
}

const NotificationContext = createContext(notificatioDefaultContext)

const NotificationProvider = ({children}: NotificationProviderProps) =>{
    const [recordsData, setAllRecordsData] = useState<Array<Object>>([{}])
    const [unreadRecordsData, setAllUnreadRecordsData] = useState({})
    const [markedRecords, setMarkedRecords] = useState<Set<number>>(new Set())
    const [orgId, setOrgId] = useState(MOCK_ORG_ID)
    const [currentRecord, setCurrentRecord] = useState<number>(0)
    const [isLoadingGetAllRecords, setIsLoadingGetAllRecords] = useState(true);
    const [isLoadingGetUnreadRecords, setIsLoadingGetUnreadRecords] = useState(true);

    const notificationContextValue = {
      ...notificatioDefaultContext,
      allRecords: recordsData,
      allUnreadRecords: unreadRecordsData,
      currentRecord: currentRecord,
      markedRecords: markedRecords,
      orgId: orgId,
      setAllRecords: setAllRecordsData,
      setAllUnreadRecords: setAllUnreadRecordsData,
      setCurrentRecord: setCurrentRecord,
      setMarkedRecords: setMarkedRecords,
      // addMarkedRecords: markedRecords.add,
      // removeMarkedRecords: markedRecords.delete,
      setOrgId: setOrgId,
  }
    // const NotificationContext = createContext(notificationContextValue)
    useEffect(() => {
        const getAllRecordsUrl = getAllRecords(orgId);
        const getUnreadRecordsUrl = getAllRecords(orgId);

        const fetchGetAllRecordsData = () => {
          fetch(getAllRecordsUrl)
            .then(response => response.json())
            .then(result => {
              setAllRecordsData(result);
              setIsLoadingGetAllRecords(false);
            })
            .catch(error => {
              // TODO: Trigger alert service here
              console.error('Error fetching all-records data:', error)
            })
            .finally(() => {
              // TODO: remove finally-clause upon attaching backend
              setAllRecordsData(mockNotificationData)
            });
        };
        const fetchGetUnreadRecordsData = () => {
          fetch(getUnreadRecordsUrl)
            .then(response => response.json())
            .then(result => {
              setAllUnreadRecordsData(result);
              setIsLoadingGetUnreadRecords(false);
            })
            .catch(error => {
              // TODO: Trigger alert service here
              console.error('Error fetching unread records data:', error)

              // TODO: remove mock upon attaching backend
              setAllUnreadRecordsData(mockUnreadNotificationData);
            });
        }
        fetchGetAllRecordsData();
        fetchGetUnreadRecordsData();
      }, []);
    
   return(
       <NotificationContext.Provider value={notificationContextValue}>
           {children}
       </NotificationContext.Provider>
   )
}

const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a NotificationProvider')
  }
  return context
}

export {NotificationProvider, useNotificationContext}