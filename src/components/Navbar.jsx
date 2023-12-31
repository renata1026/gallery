import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogoutUser = () => {
    setUser({});
    navigate('/');
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" className="navbar-link">
            Home
          </NavLink>
        </li>
        <li className="navbar-item">
          {user.username ? (
            `Welcome ${user.username}`
          ) : (
            <NavLink to="/login" className="navbar-link">
              Login
            </NavLink>
          )}
        </li>
        <li className="navbar-item">
          {user.username ? (
            <button onClick={handleLogoutUser} className="navbar-button">
              Logout
            </button>
          ) : (
            <NavLink to="/register" className="navbar-link">
              Register
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
