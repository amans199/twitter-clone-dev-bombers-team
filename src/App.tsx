import { FC } from 'react';
import './App.css';
// import Auth from './feature/Auth';
import Input from './feature/Input';
import { Button } from '@material-ui/core';
import LoginIcon from '@material-ui/icons/AccountCircle';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import TestMuiTheme from './components/TestMuiTheme';
import MuiTheme from './modules/MuiTheme';
import NewTweetButton from './components/newTweetButton';


const  App:FC = () => {
  return (
    <div className="App">
      <MuiTheme >
        <TestMuiTheme />
        <div className="  container center mx-auto d-flex align-content-center justify-content-center pt-4">
          <Button color="primary" variant="contained" size="large" style={{marginRight : '10px'}}>
            Click Me
          </Button>
          <Button startIcon={<LoginIcon />} color="primary" variant="contained" 
            style={{marginRight : '10px'}}>
            Login
          </Button>
          <Button startIcon={<LogoutIcon />} color="secondary" variant="contained" 
            style={{marginRight : '10px'}}>
            Logout
          </Button>
          <Input />
      <NewTweetButton  
      color ='secondary'
      label='See New Tweets' />
        {/* </NewTweetButton> */}
      </div>
      </MuiTheme>
    </div>
  );
}

export default App;
