import React, { useContext } from 'react';

import { DataContext } from '../context/DataContext';

import DataTable from '../components/DataTable/DataTable';

const RawDataView = () => {
  return (
    <div style={{ marginTop: '20px' }}>
      <DataTable />
    </div>
  );
};

export default RawDataView;
