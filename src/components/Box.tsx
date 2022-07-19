import * as React from 'react';
import Box from '@mui/material/Box';
import './box.css';

interface Props {
  icon: string;
  title: string;
  pra: string;
}
const BoxSx = (Props: any) => {
  const { icon, title, pra } = Props;
  return (
    <div className="box">
      <div className="cildbox d-flex ">
        <div className="icon">{icon}</div>
        <div>
          <h1>{title}</h1>
          <p>{pra}</p>
          <span>follow you</span>
        </div>
        <button>follow</button>
      </div>
    </div>
  );
};
export default BoxSx;
