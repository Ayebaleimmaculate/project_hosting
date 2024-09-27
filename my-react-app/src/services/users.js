import React, { useState } from 'react';
import { loginUser } from '../services/'; // Adjusted import path

function UserManagement() {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');
  const [accessToken, setAccessToken] = useState('');

  const handleLoginUser = async () => {
    try {
      const response = await loginUser(userData);
      if (response.user && response.user.access_token) {
        setAccessToken(response.user.access_token);
        setMessage(response.message || 'User logged in successfully');
      } else {
        setMessage('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setMessage(`Error logging in: ${error.message}`);
    }
  };

  const handleUpdateUser = async () => {
    // Implement update user functionality as before
  };

  const handleDeleteUser = async () => {
    // Implement delete user functionality as before
  };

  const handleGetAllUsers = async () => {
    // Implement get all users functionality as before
  };

  return (
    <div>
      <h2>User Management</h2>
      <div>
        <label>Email:</label>
        <input type="text" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
      </div>
      <br />
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="Enter User ID" />
      <br />
      <button onClick={handleLoginUser}>Login User</button>
      <button onClick={handleUpdateUser}>Update User</button>
      <button onClick={handleDeleteUser}>Delete User</button>
      <button onClick={handleGetAllUsers}>Get All Users</button>
      <br />
      {message && <p>{message}</p>}
      {accessToken && <p>Access Token: {accessToken}</p>}
    </div>
  );
}

export default UserManagement;
