const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');
const config = require('../config/auth');

const register = async (req, res) => {
  const { username, password, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await db.User.create({ username, password: hashedPassword, email });
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.User.findOne({ where: { email } });
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(400).send({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id }, config.jwtSecret, { expiresIn: '1h' });
    res.send({ user, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const profile = async (req, res) => {
  res.send(req.user);
};

module.exports = {
  register,
  login,
  profile,
};
