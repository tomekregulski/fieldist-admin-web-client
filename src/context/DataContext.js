import React, { useState, useEffect, createContext } from 'react';

import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [data, setData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setBrands([]);
    axios
      .get('https://fieldist-back-end.herokuapp.com/api/brands')
      .then((response) =>
        response.data.map((item) =>
          setBrands((prevState) => [...prevState, item.name])
        )
      );
  }, []);

  useEffect(() => {
    selectedBrand !== ' ' &&
      axios
        .get(
          'https://fieldist-back-end.herokuapp.com/api/reports'
          // 'http://localhost:5001/api/reports'
        )
        .then((response) => {
          const res = response.data.filter(
            (item) => item.brand === selectedBrand
          );
          setData(res);
          setFilteredData(res);
        });
  }, [selectedBrand]);

  useEffect(() => {
    if (filters.length) {
      const filterTemp = data;
      for (const category in filters) {
        filterTemp.filter((entry) => entry[category] === filters[category]);
      }
    }
  }, [filters]);

  return (
    <DataContext.Provider
      value={{
        brandList: [brands, setBrands],
        filteredData: [data, setData],
        selectBrand: [selectedBrand, setSelectedBrand],
        filterArray: [filters, setFilters],
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
