// GET: Gets all records for a customer
export const getAllRecords = (orgId: number) => {
    return `/api/anomaly-service/${orgId}`
}

// GET: Gets all unread records for a customer
export const getAllUnreadRecords = (orgId: number) => {
    return `/api/anomaly-service/${orgId}/unread`
}

// POST: Mark all unread records as read for a customer
export const markAllUnreadRecordsAsRead = (orgId: number) => {
    return `/api/anomaly-service/${orgId}/mark-read`
}

// POST: Mark the provided record ids as read for a customer
export const markRecordsAsRead = (orgId: number,  recordIds: number[]) => {
    return `/api/anomaly-service/${orgId}/mark-read?messageId={}[]`
}