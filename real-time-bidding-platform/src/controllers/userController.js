const bcrypt = require('argon2');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const registerUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const hashedPassword = await argon2.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword, email });
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in' });
  }
};

const getUserProfile = (req, res) => {
  res.json(req.user);
};

module.exports = { registerUser, loginUser, getUserProfile };
