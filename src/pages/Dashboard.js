import React, { useContext } from 'react';

import { DataContext } from '../context/DataContext';

import DataTable from '../components/DataTable/DataTable';
import TableFilter from '../components/TableFilter/TableFilter';

const Dashboard = () => {
  const { selectBrand } = useContext(DataContext);

  const [selectedBrand, setSelectedBrand] = selectBrand;

  return (
    <div style={{ marginTop: '80px' }}>
      <TableFilter action={'Choose a Brand'} />
      {selectedBrand !== '' && <DataTable />}
    </div>
  );
};

export default Dashboard;
