
const users = [
    { id: 1, email: 'user1@example.com', password: 'hashedPassword1' },
    { id: 2, email: 'user2@example.com', password: 'hashedPassword2' }
];

// Mock function to generate a random token
function generateToken() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// Send password reset email
exports.sendPasswordResetEmail = (req, res) => {
    const { email } = req.body;
    // Check if the email exists in the database
    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(404).send('User not found');
    }
    // Generate and save reset token (usually saved to the user record in the database)
    const resetToken = generateToken();
    // Send password reset email with reset link containing token
    // In a real application, you would send an email using a library like nodemailer
    res.send(`Password reset email sent to ${email}. Reset token: ${resetToken}`);
};

// Reset password
exports.resetPassword = (req, res) => {
    const { token, newPassword } = req.body;
    // Validate token (usually checked against the user record in the database)
    // For demonstration, we'll assume the token is valid
    // Find user by token and update password (in a real application, you'd use database queries)
    // For demonstration, we'll just log the token and new password
    console.log('Reset token:', token);
    console.log('New password:', newPassword);
    res.send('Password reset successful');
};
