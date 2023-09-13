import React, { useState } from 'react';
import {
  useOutletContext,
  useNavigate,
  useRouteLoaderData,
} from 'react-router-dom'; // Import useNavigate

const Paintings = () => {
  //   const { photoRecordList } = useOutletContext();
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate
  const photoRecordList = useRouteLoaderData('App');
  console.log({ photoRecordList });
  const handleClickImg = (paintingId) => {
    // Use the navigate function to navigate to the painting detail page
    navigate(`/paintings/${paintingId}`);
  };

  return (
    <div>
      <h1>Gallery</h1>
      <div className="gallery">
        {' '}
        {/* Use className instead of class */}
        {photoRecordList.map((record) => {
          return (
            <div key={record.id} id="paintings-container">
              {/* Check if record has images, then display the image */}
              <div id="paintings">
                <img
                  onClick={() => handleClickImg(record.id)} // Pass the paintingId to the handleClickImg function
                  src={`${record.images[0].baseimageurl}`}
                  alt={`Painting ${record.id}`}
                />
                {/* Add any additional information or links here */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Paintings;
