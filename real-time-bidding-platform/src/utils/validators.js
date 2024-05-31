// Validation functions

// Mock function to validate email format
const isValidEmail = (email) => {
    // Regular expression for basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  module.exports = { isValidEmail };
  