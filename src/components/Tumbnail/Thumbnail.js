/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import FormSelect from '../Forms/FormSelect';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: '100%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'scroll',
  maxHeight: '95vh',
};

const Thumbnail = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(props.data);

  return (
    <div
      style={{
        width: '200px',
        height: '200px',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        padding: '10px',
      }}
    >
      <img
        style={{
          width: '200px',
          // height: '200px',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          // minHeight: '100%',
          // minWidth: '100%',
          // opacity: '0',
        }}
        src={props.photo}
        alt='event photo'
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div>
            <img
              style={{
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
              }}
              src={props.photo}
              alt='event photo'
            />
          </div>
          <div>
            <p>
              {props.data.brand} | {props.data.date} | {props.data.location}
            </p>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Thumbnail;
