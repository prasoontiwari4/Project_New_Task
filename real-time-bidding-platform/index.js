const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const logger = require('morgan');
const fs = require('fs');
const path = require('path');
const { connectDB } = require('./src/config/database');
const { jwtAuth } = require('./src/config/auth');
const userRoutes = require('./src/routes/userRoutes');
const itemRoutes = require('./src/routes/itemRoutes');
const bidRoutes = require('./src/routes/bidRoutes');
const notificationRoutes = require('./src/routes/notificationRoutes');
const authService = require('./src/services/authService');
const userService = require('./src/services/userService');
const itemService = require('./src/services/itemService');
const bidService = require('./src/services/bidService');
const notificationService = require('./src/services/notificationService');
const validators = require('./src/utils/validators'); // Update the path if needed

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

// Connect to database
connectDB();

// Routes
app.use('/users', userRoutes);
app.use('/items', jwtAuth, itemRoutes);
app.use('/bids', jwtAuth, bidRoutes);
app.use('/notifications', jwtAuth, notificationRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start server
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  socket.on('place-bid', (data) => {
    // Broadcast the bid to all connected clients
    io.emit('bid-placed', data);
  });
});

// Mock authentication endpoint
app.post('/auth/login', (req, res) => {
  const { username, password } = req.body;
  const result = authService.authenticateUser(username, password);
  res.json(result);
});

// Mock user endpoint
app.get('/users/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = userService.getUserById(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Mock item endpoints
app.get('/items', (req, res) => {
  const items = itemService.getAllItems();
  res.json(items);
});

app.get('/items/:itemId', (req, res) => {
  const itemId = parseInt(req.params.itemId);
  const item = itemService.getItemById(itemId);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Mock bid endpoint
app.get('/items/:itemId/bids', (req, res) => {
  const itemId = parseInt(req.params.itemId);
  const bids = bidService.getBidsByItemId(itemId);
  res.json(bids);
});

// Mock notification endpoint
app.get('/notifications/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const notifications = notificationService.getNotificationsByUserId(userId);
  res.json(notifications);
});

// Mock validation endpoint
app.get('/validate-email/:email', (req, res) => {
  const email = req.params.email;
  const isValid = validators.isValidEmail(email);
  res.json({ email, isValid });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// Create a write stream (in append mode) for the error log
const errorLogStream = fs.createWriteStream(path.join(__dirname, 'error.log'), { flags: 'a' });

// Create a write stream (in append mode) for the combined log
const combinedLogStream = fs.createWriteStream(path.join(__dirname, 'combined.log'), { flags: 'a' });

// Logging middleware
app.use(logger('dev', { stream: errorLogStream }));
app.use(logger('combined', { stream: combinedLogStream }));

// Your routes and middleware configurations...


const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', apiLimiter);
