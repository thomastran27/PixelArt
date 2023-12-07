import { createUseStyles } from 'react-jss';

export default createUseStyles({
  app: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    position: 'relative',
  },
  colorSwatchContainer: {
    display: 'flex',
  },
  colorSwatch: {
    margin: '0.5rem',
    padding: 0,
    width: '25px',
    height: '25px',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
  },

  logoutButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#ff6961',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
    '&:hover': {
      backgroundColor: '#e35d56',
    },
  },  
});

