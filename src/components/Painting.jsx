import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import Table from './Table';

const Painting = () => {
  const { photoRecordList } = useOutletContext();
  // Pass photoRecordList as a prop
  const { paintingId } = useParams(); // This is the ID from the URL parame

  // / Find the painting in the photoRecordList based on the ID
  const painting = photoRecordList.find(
    (photoRecord) => photoRecord.id === +paintingId
  );

  // Check if the painting is found before rendering
  if (!painting) {
    return <div>Painting not found.</div>;
  }

  return (
    <div>
      {/* <h2>Id: {painting.id}</h2> */}
      <div id="painting-container">
        <div id="paintings">
          <h1>{painting.title}</h1>
          {/* Display the painting's image */}
          <img
            style={{ width: '50vw' }}
            src={`${painting.images[0].baseimageurl}`}
            alt={`Painting ${painting.id}`}
          />
        </div>
        <Table photoRecordList={photoRecordList} />
      </div>
    </div>
  );
};

export default Painting;
