const jwt = require('jsonwebtoken');
const config = require('../config/auth');
const db = require('../models');

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).send({ error: 'Not authenticated' });
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    const user = await db.User.findByPk(decoded.id);
    if (!user) {
      throw new Error();
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(401).send({ error: 'Not authenticated' });
  }
};

module.exports = authMiddleware;
