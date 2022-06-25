import './App.css';
import Auth from './feature/Auth';
import Input from './feature/Input';
import { Button, TextField } from '@material-ui/core';
import LoginIcon from '@material-ui/icons/AccountCircle';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import AppleIcon from '@material-ui/icons/Apple';

function App() {
  return (
    <div className="  container center mx-auto d-flex align-content-center justify-content-center pt-4">
      <Button color="primary" variant="contained" size="large">
        Click Me
      </Button>
      <Button startIcon={<LoginIcon />} color="primary" variant="contained">
        Login
      </Button>
      <Button startIcon={<LogoutIcon />} color="secondary" variant="contained">
        Logout
      </Button>
      <Input />
    </div>
  );
}

export default App;
