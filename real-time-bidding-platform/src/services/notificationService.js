// Notification service

// Mock notification data
const notifications = [
    { id: 1, userId: 1, message: 'You have a new bid on Item 1', isRead: false },
    { id: 2, userId: 2, message: 'You have been outbid on Item 1', isRead: false }
  ];
  
  // Function to get notifications for a user
  const getNotificationsByUserId = (userId) => {
    return notifications.filter(notification => notification.userId === userId);
  };
  
  module.exports = { getNotificationsByUserId };
  