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
        loads, you can use the tabs to change views, and the filter menu to get
        more specific.
      </p>
      <div>
        <TableFilter action={'Choose a Brand'} />
      </div>
      <div>{selectedBrand !== '' && <MainViewTabs />}</div>
    </div>
  );
};

export default MainView;
