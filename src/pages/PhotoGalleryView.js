import React, { useContext } from 'react';

import { DataContext } from '../context/DataContext';

import Thumbnail from '../components/Tumbnail/Thumbnail';

const PhotoGalleryView = () => {
  const { filteredData } = useContext(DataContext);

  // eslint-disable-next-line no-unused-vars
  const [data, setData] = filteredData;

  return (
    <div style={{ textAlign: 'center' }}>
      {data.length === 0 && (
        <div>
          <p>No photos to display</p>
        </div>
      )}
      <div style={{ display: 'flex' }}>
        {data.length > 0 &&
          data.map((entry) => {
            return entry.photos.map((photo, index) => {
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              return <Thumbnail key={index} photo={photo} data={entry} />;
            });
          })}
        {data.length > 0 &&
          data.map((entry) => {
            return entry.expenses.map((expense, index) => {
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              return (
                <Thumbnail
                  key={index}
                  photo={expense.expensePhoto}
                  data={entry}
                />
              );
            });
          })}
      </div>
    </div>
  );
};

export default PhotoGalleryView;
