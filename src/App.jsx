import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import { API } from './constants/api';

import Paintings from './routes/Paintings';

function App() {
  const [photoRecordList, setPhotoRecordList] = useState([]);
  const [user, setUser] = useState({ id: 1, username: 'Daniel Smith' });

  //   const fetchPaintings = async () => {
  //     const response = await fetch(API);
  //     const photoData = await response.json();
  //     console.log(photoData.records);
  //     setPhotoRecordList(photoData.records);
  //   };

  //   useEffect(() => {
  //     fetchPaintings();
  //   }, []);

  return (
    <>
      <div>
        <Navbar user={user} setUser={setUser} />
        {/* //where the child routes will be rendered */}
        <Outlet context={{ photoRecordList, user, setUser }} />
      </div>
    </>
  );
}

export default App;
