import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FilterSelect(props) {
  return (
    <>
      <FormControl
        id='brandMenu'
        style={{ marginRight: '30px' }}
        variant='standard'
      >
        <InputLabel>{props.label}</InputLabel>
        <Select
          style={{ width: '130px' }}
          labelId='brandLabel'
          id='brandSelect'
        >
          {props.data
            ? props.data.map((prop, index) => (
                <MenuItem key={index} value={prop}>
                  {prop.charAt(0).toUpperCase() + prop.slice(1).toLowerCase()}
                </MenuItem>
              ))
            : null}
        </Select>
      </FormControl>
    </>
  );
}
