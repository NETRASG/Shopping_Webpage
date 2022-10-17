import {makeStyles}   from "@mui/styles";

export default makeStyles(() => ({
    appBar: {
      position: 'relative',
    },
    toolbar:  {marginTop: '7%'},
    layout: {
      marginTop: '5%',
      width: 'auto',
      marginLeft: '400px',
      marginRight: '400px',
     
    },
    paper: {
      marginTop: '20px',
      marginBottom: '20px',
      padding: '10px',
      
    },
    stepper: {
      padding: '60px',
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: '3px',
      marginLeft: '1px',
    },
    divider: {
      margin: '20px 0',
    },
    spinner: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }));