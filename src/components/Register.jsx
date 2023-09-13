import React, { useState } from 'react';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({ id: 1, username: 'Daniel Smith' }); // Initialize with a dummy user

  async function handleRegister(e) {
    e.preventDefault();
    // Implement your registration logic here
  }

  function handleLogout() {
    // Clear the user information when clicking "Logout"
    setUser({});
  }

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleRegister}>
          <h1>Register</h1>
          <input
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            placeholder="Username"
          ></input>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          ></input>
          <button>Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
