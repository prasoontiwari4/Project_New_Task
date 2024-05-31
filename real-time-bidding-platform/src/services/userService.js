// User service

// Mock user data
const users = [
    { id: 1, username: 'admin', email: 'admin@example.com', role: 'admin' },
    { id: 2, username: 'user', email: 'user@example.com', role: 'user' }
  ];
  
  // Function to get user by ID
  const getUserById = (userId) => {
    return users.find(user => user.id === userId);
  };
  
  module.exports = { getUserById };
  