import React, { useState, useEffect, createContext } from 'react';

import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [data, setData] = useState([]);

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
        .get('https://fieldist-back-end.herokuapp.com/api/reports')
        .then((response) => {
          const res = response.data.filter(
            (item) => item.brand === selectedBrand
          );
          setData(res);
        });
  }, [selectedBrand]);

  return (
    <DataContext.Provider
      value={{
        brandList: [brands, setBrands],
        filteredData: [data, setData],
        selectBrand: [selectedBrand, setSelectedBrand],
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
