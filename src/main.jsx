import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Paintings from './components/Paintings';
import Painting from './components/Painting';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Paintings /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/paintings', element: <Paintings /> },
      { path: '/paintings/:paintingId', element: <Painting /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
