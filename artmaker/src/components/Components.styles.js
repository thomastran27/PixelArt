import { createUseStyles } from "react-jss";

export default createUseStyles({
    formContainer: {
      margin: '0 auto',
      padding: '20px',
      maxWidth: '300px',
      backgroundColor: '#f7f7f7',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      textAlign: 'left',
    },
    formTitle: {
      marginBottom: '20px',
    },
    formLabel: {
      display: 'block',
      marginBottom: '5px',
    },
    formInput: {
      width: '100%',
      padding: '10px',
      marginBottom: '20px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      boxSizing: 'border-box',
    },
    formButton: {
      width: '100%',
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: '#5c8ef1',
      color: 'white',
      cursor: 'pointer',
      fontSize: '16px',
      '&:hover': {
        backgroundColor: '#507ace',
      },
    },
    switchFormButton: {
      marginTop: '20px',
      fontSize: '14px',
      color: '#555',
      cursor: 'pointer',
    }
  });