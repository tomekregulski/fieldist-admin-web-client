import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FormSelect = (props) => {
  const [label, setLabel] = useState('Select');

  const handleChange = (event) => {
    setLabel(event.target.value);
    props.callback({
      [props.target]: event.target.value,
    });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      {/* <p>{props.target !== 'expense type' && props.target}</p> */}
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          defaultValue=''
          value={props.value || ''}
          onChange={handleChange}
        >
          {props.data.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
          Placeholder
        </Select>
      </FormControl>
    </Box>
  );
};

export default FormSelect;
