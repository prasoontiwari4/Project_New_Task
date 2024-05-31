const express = require('express');
const { markNotificationsRead, getNotifications } = require('../controllers/notificationController');
const router = express.Router();

router.post('/mark-read', markNotificationsRead);
router.get('/', getNotifications);

module.exports = router;
