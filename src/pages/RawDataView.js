import React, { useContext } from 'react';

import { DataContext } from '../context/DataContext';
import PhotoGallery from './PhotoGalleryView';

import DataTable from '../components/DataTable/DataTable';
import TableFilter from '../components/TableFilter/TableFilter';

const RawDataView = () => {
  const { selectBrand } = useContext(DataContext);

  const [selectedBrand, setSelectedBrand] = selectBrand;

  return (
    <div style={{ marginTop: '20px' }}>
      <DataTable />
    </div>
  );
};

export default RawDataView;
