import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api/v1/contacts';

export function ContactManagement() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(API_URL);
        setContacts(response.data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, [refresh]);

  const handleEdit = (contact) => {
    setSelectedContact(contact);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setRefresh(!refresh);
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  // Inline ContactForm Component
  const ContactForm = ({ contact, onClose, onSuccess }) => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });

    useEffect(() => {
      if (contact) {
        setFormData({
          name: contact.name || '',
          email: contact.email || '',
          message: contact.message || '',
        });
      }
    }, [contact]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        if (contact) {
          await axios.put(`${API_URL}/${contact.id}`, formData);
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
      <div className="contact-form">
        <h3>{contact ? 'Edit Contact' : 'Create Contact'}</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Message:
            <textarea name="message" value={formData.message} onChange={handleChange} required />
          </label>
          <button type="submit">{contact ? 'Update' : 'Create'}</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    );
  };

  return (
    <div className="contact-management">
      <h2>Contact Management</h2>
      <button onClick={() => setSelectedContact({})}>Create New Contact</button>
      {selectedContact && (
        <ContactForm
          contact={selectedContact}
          onClose={() => setSelectedContact(null)}
          onSuccess={() => setRefresh(!refresh)}
        />
      )}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.message}</td>
              <td>
                <button onClick={() => handleEdit(contact)}>Edit</button>
                <button onClick={() => handleDelete(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactManagement;
