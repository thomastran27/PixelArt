import React, { useState } from 'react';
import axios from 'axios';
import useStyles from './Components.styles';

const Login = ({ onSwitch, onLoginSuccess }) => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      console.log('Login successful', response.data);
      onLoginSuccess(response.data.token);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className={classes.formContainer}>
      <h2 className={classes.formTitle}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className={classes.formLabel} htmlFor="username" >Username:</label>
          <input className={classes.formInput}
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label className={classes.formLabel}  htmlFor="password">Password:</label>
          <input className={classes.formInput}
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className={classes.formButton}>Login</button>
      </form>
      <button className={classes.switchFormButton} onClick={() => onSwitch(true)}>Go to Register</button>
    </div>
  );
};

export default Login;
