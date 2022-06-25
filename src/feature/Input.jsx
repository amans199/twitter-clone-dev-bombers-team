import React from 'react';
import { TextField } from '@material-ui/core';
const Input = () => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Phone,email, or username"
        variant="outlined"
      />
    </div>
  );
};

export default Input;
