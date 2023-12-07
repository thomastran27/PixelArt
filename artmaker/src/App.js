import React, { useState, useMemo } from 'react';

import Grid from './components/Grid';
import ColorPicker from './components/ColorPicker';
import Login from './components/Login';
import Register from './components/Register';
import useStyles from './App.styles';

const offCell = {
  on: true,
  color: '#000000',
};
const initialCells = Array.from({ length: 256 }, () => offCell);

function App() {
  const [cells, setCells] = useState(initialCells);
  const [currentColor, setCurrentColor] = useState('#56BC58');
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const classes = useStyles();
  const colorSwatch = useMemo(
    () => [
      ...new Set(cells.filter((cell) => cell.on).map((cell) => cell.color)),
    ],
    [cells]
  );

  const handleLoginSuccess = (token) => {
    setIsLoggedIn(true);
    localStorage.setItem('token', token); // Store the token
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token'); // Clear the stored token on logout
  };

  if (!isLoggedIn) {
    return (
      <div className={classes.app}>
        {isRegistering ? (
          <Register onSwitch={() => setIsRegistering(false)} />
        ) : (
          <Login onSwitch={() => setIsRegistering(true)} onLoginSuccess={handleLoginSuccess} />
        )}
      </div>
    );
  }

  return (
    <div className={classes.app}>
      <button onClick={handleLogout} className={classes.logoutButton}>
        Logout
      </button>
      <ColorPicker currentColor={currentColor} onSetColor={setCurrentColor} />
      <div className={classes.colorSwatchContainer}>
        {colorSwatch.map((color) => (
          <div
            key={color}
            onClick={() => setCurrentColor(color)}
            className={classes.colorSwatch}
            style={{ background: color }}
          />
        ))}
      </div>
      <Grid cells={cells} setCells={setCells} currentColor={currentColor} />
    </div>
  );
}

export default App;
