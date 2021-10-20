import React, { useState, useContext } from 'react';

import { DataContext } from '../../context/DataContext';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import FormSelect from '../Forms/FormSelect';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '500px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'scroll',
  maxHeight: '95vh',
};

const TableFilter = (props) => {
  const { brandList, filteredData, selectBrand } = useContext(DataContext);

  // eslint-disable-next-line no-unused-vars
  const [brands, setBrands] = brandList;
  // eslint-disable-next-line no-unused-vars
  const [selectedBrand, setSelectedBrand] = selectBrand;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSelect = (data) => {
    console.log(data);
    const value = Object.keys(data)[0];
    value === 'brand' && setSelectedBrand(data[value]);
  };

  return (
    <div>
      <Button
        style={{ display: 'block', margin: '0 auto 40px' }}
        onClick={handleOpen}
      >
        {props.action}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <FormSelect
            callback={handleSelect}
            data={brands}
            title={'Brand'}
            target={'brand'}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default TableFilter;
