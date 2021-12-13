/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'scroll',
};

const Thumbnail = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(props.data);

  return (
    <div
      style={{
        margin: '10px',
        padding: '10px',
        display: 'block',
        overflow: 'hidden',
        height: '200px',
        width: '200px',
      }}
    >
      <img
        style={{
          display: 'block',
          height: '50%',
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
          <div style={{ maxWidth: '600px' }}>
            <img
              style={{
                width: '100%',
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
