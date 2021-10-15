import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
  const [data, setData] = useState([]);
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    axios
      .get('https://fieldist-back-end.herokuapp.com/api/reports')
      .then((response) => {
        const res = response.data;
        setData(res);
        console.log(res);
      });
  }, []);

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
    <div style={{ height: 300, width: '100%' }}>
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
