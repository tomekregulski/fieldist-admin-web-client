import React, { useContext } from 'react';

import { DataContext } from '../context/DataContext';
import MainViewTabs from './MainViewTabs';

import TableFilter from '../components/TableFilter/TableFilter';

const MainView = () => {
  const { selectBrand } = useContext(DataContext);

  const [selectedBrand, setSelectedBrand] = selectBrand;

  return (
    <div style={{ marginTop: '80px' }}>
      <p style={{ textAlign: 'center' }}>
        Welcome Admin! Please choose a brand to get started. Once the data
        loads, you can use the tabs to change views, and we are working on a
        filter menu to give you more control.
      </p>
      <div style={{ marginBottom: '20px' }}>
        <TableFilter />
      </div>
      <div>{selectedBrand !== '' && <MainViewTabs />}</div>
    </div>
  );
};

export default MainView;
