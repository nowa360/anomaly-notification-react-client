export enum NotificationMsgTypeEnum {
  ERROR = "ERROR",
  INFO = "INFO",
  SUCCESS = "SUCCESS",
  WARNING = "WARNING",
}

export type NotificationMsgType = keyof typeof NotificationMsgTypeEnum

export interface NotificationObjType {
  description: string;
  isRead: boolean;
  key: string;
  msgType: string;
  // encrypted record ID
  recordId: number;
  title: string;
}