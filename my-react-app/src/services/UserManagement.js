import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api/v1/users';

export function UserManagement() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(API_URL);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [refresh]);

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setRefresh(!refresh);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const UserForm = ({ user, onClose, onSuccess }) => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
    });

    useEffect(() => {
      if (user) {
        setFormData({
          name: user.name || '',
          email: user.email || '',
        });
      }
    }, [user]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        if (user) {
          await axios.put(`${API_URL}/${user.id}`, formData);
        } else {
          await axios.post(API_URL, formData);
        }
        onSuccess();
        onClose();
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };

    return (
      <div className="user-form">
        <h3>{user ? 'Edit User' : 'Create User'}</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <button type="submit">{user ? 'Update' : 'Create'}</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    );
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <button onClick={() => setSelectedUser({})}>Create New User</button>
      {selectedUser && (
        <UserForm
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          onSuccess={() => setRefresh(!refresh)}
        />
      )}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
