// Authentication service

// Mock function for user authentication
const authenticateUser = (username, password) => {
    // Mocked user data for demonstration purposes
    const users = [
      { id: 1, username: 'admin', password: 'password', role: 'admin' },
      { id: 2, username: 'user', password: 'password', role: 'user' }
    ];
  
    // Check if username and password match any user in the mock data
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      return { success: true, message: 'Authentication successful', user };
    } else {
      return { success: false, message: 'Authentication failed' };
    }
  };
  
  module.exports = { authenticateUser };
  