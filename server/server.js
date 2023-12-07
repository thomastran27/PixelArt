const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const JWT_SECRET = 'e7d8741c19ea5600d2c82043d316c37dc907857e19cb678504e1141ed4f3176f562b341f5f4aa1e878a86dcaeb514bb2e9dc47b43092a7bd6c351dc8ae303e71';

// Mock database
let users = [];

// Registration endpoint
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (users.find(user => user.username === username)) {
    return res.status(400).send('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).send('User created');
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);
  if (!user) {
    return res.status(400).send('User not found');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).send('Invalid password');
  }

  const token = jwt.sign({ username: user.username }, JWT_SECRET);
  res.json({ token });
});

const PORT = 5005;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
