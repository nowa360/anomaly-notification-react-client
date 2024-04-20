// GET: Gets all records for a customer
export const getAllRecordsUrl = (orgId: number): string => {
    return `/api/anomaly-service/${orgId}`
}

// GET: Gets all unread records for a customer
export const getAllUnreadRecordsUrl = (orgId: number): string => {
    return `/api/anomaly-service/${orgId}/unread`
}

// POST: Mark all unread records as read for a customer
export const markAllUnreadRecordsAsReadUrl = (orgId: number): string => {
    return `/api/anomaly-service/${orgId}/mark-read`
}

// POST: Mark the provided record ids as read for a customer
export const markRecordsAsReadUrl = (orgId: number): string => {
    return `/api/anomaly-service/${orgId}/mark-read`
}