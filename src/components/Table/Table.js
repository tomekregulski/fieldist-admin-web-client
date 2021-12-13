import React, { useEffect, useState, useContext } from 'react';

import { DataContext } from '../../context/DataContext';

import DownloadCsv from '../DownloadCsv/DownloadCsv';
import './Table.css';

const baseCols = ['id', 'date', 'time', 'location', 'user_name'];

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const Table = (props) => {
  const { filteredData } = useContext(DataContext);

  const [data, setData] = filteredData;
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);

  const [products, setProducts] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setColumns([]);
    setRows([]);
    setProducts([]);
    setQuestions([]);
    if (Object.keys(data).length) {
      setColumns([]);
      setRows([]);
      setProducts([]);
      setQuestions([]);
      baseCols.map((item) => {
        const obj = {
          field: item,
          headerName: item,
          // width: 90,
        };
        setColumns((prevState) => [...prevState, obj]);
      });
      const cols = data[0];
      const inventory = Object.keys(cols.inventory);
      const response = Object.keys(cols.response);
      setProducts(inventory);
      setQuestions(response);

      response.map((item) => {
        const obj = {
          field: item,
          headerName: item,
          width: 90,
        };
        setColumns((prevState) => [...prevState, obj]);
      });

      inventory.map((item) => {
        const obj = {
          field: item,
          headerName: item,
          // width: 90,
        };
        setColumns((prevState) => [...prevState, obj]);
      });

      data.map((item) => {
        setRows((prevState) => [...prevState, item]);
      });
    }
  }, [data]);

  return (
    <>
      {columns.length === 0 && (
        <p style={{ textAlign: 'center' }}>
          There is no data to display for this brand
        </p>
      )}
      <table>
        <thead>
          <tr>
            {
              (columns.length > 0 && console.log(columns.length),
              columns.map((item, index) => {
                if (item.field !== 'id')
                  return (
                    <th style={{ textAlign: 'center' }} key={index}>
                      <button
                        type='button'
                        // onClick={() => requestSort('status')}
                        // className={getClassNamesFor('status')}
                      >
                        {item.field}
                      </button>
                    </th>
                  );
              }))
            }
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 &&
            rows.map((item, index) => (
              <tr style={{ textAlign: 'center' }} key={index}>
                <td style={{ width: '90px' }}>{item.date}</td>
                <td style={{ width: '90px' }}>{item.time}</td>
                <td style={{ width: '90px' }}>{item.location}</td>
                <td style={{ width: '90px' }}>{item.user_name}</td>
                {questions.map((question, index) => {
                  return (
                    <td key={index}>
                      {item.response[question]
                        ? item.response[question]
                        : 'N/A'}
                    </td>
                  );
                })}
                {products.map((product, index) => {
                  return (
                    <td key={index}>
                      {item.inventory[product]
                        ? item.inventory[product]
                        : 'N/A'}
                    </td>
                  );
                })}
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
