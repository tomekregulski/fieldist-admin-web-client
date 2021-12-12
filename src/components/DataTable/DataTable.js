import React, { useEffect, useState, useContext } from 'react';

import { DataContext } from '../../context/DataContext';

import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from '@mui/x-data-grid';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function DataTable() {
  const { filteredData } = useContext(DataContext);

  const [data, setData] = filteredData;
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (Object.keys(data).length) {
      const cols = data[0];
      Object.keys(cols).map((item) => {
        const obj = {
          field: item,
          headerName: item,
          width: 90,
        };
        setColumns((prevState) => [...prevState, obj]);
      });
      setRows(Object.values(data));
    }
  }, [data, setData]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      {columns.length ? (
        <DataGrid
          rows={rows}
          columns={columns}
          components={{
            Toolbar: CustomToolbar,
          }}
        />
      ) : (
        <p style={{ textAlign: 'center' }}>There is no data to retrieve.</p>
      )}
    </div>
  );
}
