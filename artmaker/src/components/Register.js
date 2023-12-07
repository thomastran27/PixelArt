import React, { useState } from 'react';
import axios from 'axios';
import useStyles from './Components.styles';

const Register = ({ onSwitch }) => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', { username, password });
      console.log('Registration successful', response.data);
      onSwitch(false);
      setErrorMessage('');
    } catch (error) {
      console.error('Registration failed', error);
      setErrorMessage('Registration failed. Username may already exist. Please login.');
    }
  };

  return (
    <div className={classes.formContainer}>
      <h2 className={classes.formTitle}>Register</h2>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label className={classes.formLabel} htmlFor="register-username">Username:</label>
          <input className={classes.formInput}
            id="register-username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label className={classes.formLabel} htmlFor="register-password">Password:</label>
          <input className={classes.formInput}
            id="register-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className={classes.formButton}>Register</button>
      </form>
      <button className={classes.switchFormButton} onClick={() => onSwitch(false)}>Go to Login</button>
    </div>
  );
};

export default Register;
