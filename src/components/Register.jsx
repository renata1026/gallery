import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [newUserName, setNewUserName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  //   const [user, setUser] = useState({ id: 1, username: 'Daniel Smith' });
  const navigate = useNavigate(); // Initialize navigate

  async function handleRegister(e) {
    e.preventDefault();
    // Implement your registration logic here
  }

  function handleLogout() {
    setUser({});
  }

  const handleClickHome = () => {
    navigate(`/`);
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleRegister}>
          <h1>Register</h1>
          <input
            onChange={(e) => setNewUserName(e.target.value)}
            value={newUserName}
            placeholder="Username"
          ></input>
          <input
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}
            placeholder="Password"
          ></input>
          <button onClick={handleClickHome}>Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
