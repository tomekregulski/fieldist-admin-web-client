import React, { useContext } from 'react';

import { DataContext } from '../context/DataContext';
import MainViewTabs from './MainViewTabs';

const MainView = () => {
  const { selectBrand } = useContext(DataContext);

  // eslint-disable-next-line no-unused-vars
  const [selectedBrand, setSelectedBrand] = selectBrand;

  return (
    <div style={{ marginTop: '60px' }}>
      <p style={{ textAlign: 'center', marginBottom: '40px' }}>
        Welcome Admin! Please choose a brand from the button above to get
        started. Once the data loads, you can use the tabs below to change
        views.
      </p>
      <div>{selectedBrand !== '' && <MainViewTabs />}</div>
    </div>
  );
};

export default MainView;
