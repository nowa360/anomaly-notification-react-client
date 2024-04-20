import { createContext, useContext, useEffect, useState } from 'react'

import { getAllRecordsUrl, getAllUnreadRecordsUrl } from '../data/urls'
import { MOCK_ORG_ID, mockNotificationData, mockUnreadNotificationData } from '../data/notification'
import { NotificationObjType } from '../types/notificationTypes'
import { notificatioDefaultContext } from './NotificationContext'

interface NotificationProviderProps {
  children: React.ReactNode
}

const NotificationContext = createContext(notificatioDefaultContext)

const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const [recordsData, setAllRecordsData] = useState<Array<Object>>([{}])
  const [unreadRecordsData, setAllUnreadRecordsData] = useState<Array<NotificationObjType>>([])
  const [markedRecords, setMarkedRecords] = useState<Array<number>>([])

  const [orgId, setOrgId] = useState<number>(MOCK_ORG_ID)
  const [currentRecord, setCurrentRecord] = useState<number>(0)
  const [isLoadingGetAllRecords, setIsLoadingGetAllRecords] = useState<boolean>(false);
  const [isLoadingGetUnreadRecords, setIsLoadingGetUnreadRecords] = useState<boolean>(false);

  const notificationContextValue = {
    //...notificatioDefaultContext,
    allRecords: recordsData,
    allUnreadRecords: unreadRecordsData,
    currentRecord: currentRecord,
    isLoadingGetAllRecords: isLoadingGetAllRecords,
    isLoadingGetUnreadRecords: isLoadingGetUnreadRecords,
    markedRecords: markedRecords,
    orgId: orgId,
    setAllRecords: setAllRecordsData,
    setAllUnreadRecords: setAllUnreadRecordsData,
    setCurrentRecord: setCurrentRecord,
    setIsLoadingGetAllRecords: setIsLoadingGetAllRecords,
    setIsLoadingGetUnreadRecords: setIsLoadingGetUnreadRecords,
    setMarkedRecords: setMarkedRecords,
    setOrgId: setOrgId,
  }
  // const NotificationContext = createContext(notificationContextValue)
  useEffect(() => {
    const fetchGetAllRecordsData = () => {
      fetch(getAllRecordsUrl(orgId))
        .then(response => response.json())
        .then(result => {
          setAllRecordsData(result);
          setIsLoadingGetAllRecords(false);
        })
        .catch(error => {
          // TODO: Trigger alert service here

          // Error here expected when backend not hooked
          console.error('GET: Error fetching all-records data:', error)
        })
        // TODO: remove finally-clause upon attaching backend
        .finally(() => {
          setAllRecordsData(mockNotificationData)
        });
    };
    const fetchGetUnreadRecordsData = () => {
      fetch(getAllUnreadRecordsUrl(orgId))
        .then(response => response.json())
        .then(result => {
          setAllUnreadRecordsData(result);
          setIsLoadingGetUnreadRecords(false);
        })
        .catch(error => {
          // TODO: Trigger alert service here

          // Error here expected when backend not hooked
          console.error('GET: Error fetching unread records data:', error)
        })
        // TODO: remove finally-clause upon attaching backend
        .finally(() => {
          setAllUnreadRecordsData(mockUnreadNotificationData)
        });
    }
    fetchGetAllRecordsData();
    fetchGetUnreadRecordsData();
  }, [orgId]);

  return (
    <NotificationContext.Provider value={notificationContextValue}>
      {children}
    </NotificationContext.Provider>
  )
}

const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('NotificationProvider context unset')
  }
  return context
}

export { NotificationProvider, useNotificationContext }