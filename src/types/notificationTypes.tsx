enum NotificationMsgTypeEnum {
  'ERROR',
  'WARNING',
  'INFO',
  'SUCCESS'
}

export type NotificationMsgType = keyof typeof NotificationMsgTypeEnum

export interface NotificationObjType {
  description: string;
  isRead: boolean;
  msgType: NotificationMsgType;
  // encrypted record ID
  recordId: number;
  title: string;
}