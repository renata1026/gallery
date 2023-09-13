import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import { API } from './API/api';

import Paintings from './components/Paintings';

function App() {
  const [photoRecordList, setPhotoRecordList] = useState([]);

  const fetchPaintings = async () => {
    const response = await fetch(API);
    const photoData = await response.json();
    console.log(photoData.records);
    setPhotoRecordList(photoData.records);
  };

  useEffect(() => {
    fetchPaintings();
  }, []);

  return (
    <>
      <div>
        <Navbar />
        {/* //where the child routes will be rendered */}
        <Outlet context={{ photoRecordList }} />
      </div>
    </>
  );
}

export default App;
