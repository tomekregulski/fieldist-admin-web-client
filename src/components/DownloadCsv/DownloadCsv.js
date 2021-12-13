import React, { useState, useContext } from 'react';

import { DataContext } from '../../context/DataContext';

import { CSVDownload } from 'react-csv';

const DownloadCsv = () => {
  const { filteredData } = useContext(DataContext);
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = filteredData;
  const [file, setFile] = useState(false);

  const download = () => {
    setFile(true);
    setTimeout(() => {
      setFile(false);
    }, 1000);
  };

  return (
    <>
      <button onClick={() => download()}>
        {/* <CSVLink data={csvData} target='_blank'> */}
        Download CSV
        {/* </CSVLink> */}
      </button>
      {file === true && <CSVDownload data={data} target='_blank' />}
    </>
  );
};

export default DownloadCsv;
