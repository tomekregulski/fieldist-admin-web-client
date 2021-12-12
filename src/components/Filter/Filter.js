import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '../../context/DataContext';

import FilterSelect from '../FilterSelect/FilterSelect';

import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';

const UserButton = styled(Button)({
  color: 'rgba(0, 180, 249, 0.872)',
  borderColor: 'rgba(0, 180, 249, 0.872)',
  backgroundColor: 'none',
});

function Filter() {
  const { filterArray, brandList, selectBrand } = useContext(DataContext);

  const [brands, setBrands] = brandList;
  const [selectedBrand, setSelectedBrand] = selectBrand;

  const [filters, setFilters] = filterArray;
  const [anchorEl, setAnchorEl] = useState(null);
  const [width, setWidth] = React.useState(window.innerWidth);

  const open = Boolean(anchorEl);

  const breakpoint = 650;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  const handleFilterSelect = (data) => {
    const key = data[0];
    const value = data[1];

    setFilters((prevState) => [...prevState, { [key]: value }]);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title='Filter'>
          {width > breakpoint ? (
            <>
              <UserButton variant='outlined' onClick={handleClick}>
                Filter
              </UserButton>
            </>
          ) : (
            <IconButton onClick={handleClick} size='small' sx={{ ml: 2 }}>
              <PersonIcon />
            </IconButton>
          )}
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <ListItemIcon>
            <FilterSelect
              label='Brand'
              data={['placeholder', 'functionality', 'coming soon']}
            />
          </ListItemIcon>
          <ListItemIcon>
            <FilterSelect
              label='Field Rep'
              data={['placeholder', 'functionality', 'coming soon']}
            />
          </ListItemIcon>
          <ListItemIcon>
            <FilterSelect
              label='Region'
              data={['placeholder', 'functionality', 'coming soon']}
            />
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default Filter;
