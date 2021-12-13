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

  /*
  Location, Rep Name, Campaign, Brand
  First select brand to receive base data
  Populate filter menus with all options based on brand selection
  Then allow client-side filtering by Location and Rep, eventually campaign
  Integrate Date range/selection once above is already in place
  Eventually fully dynamic, i.e. search rep across brands, etc.
  */

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
