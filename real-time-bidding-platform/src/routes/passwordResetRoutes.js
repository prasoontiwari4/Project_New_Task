const express = require('express');
const router = express.Router();
const { sendPasswordResetEmail, resetPassword } = require('../controllers/passwordResetController');

// Route to render the reset password form
router.get('/reset-password', (req, res) => {
    res.render('resetPasswordForm');
});

// Route to handle the password reset request
router.post('/reset-password', sendPasswordResetEmail);

// Route to handle the password reset confirmation
router.get('/reset-password/:token', (req, res) => {
    res.render('resetPasswordConfirmation', { token: req.params.token });
});

// Route to handle the password reset confirmation form submission
router.post('/reset-password/:token', resetPassword);

module.exports = router;
