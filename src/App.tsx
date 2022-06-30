import { FC } from 'react';
import './App.css';
import TestMuiTheme from './components/TestMuiTheme';
import MuiTheme from './modules/MuiTheme';

const  App:FC = () => {
  return (
    <div className="App">
        <MuiTheme >
          <TestMuiTheme />
        </MuiTheme>
    </div>
  );
}

export default App;
