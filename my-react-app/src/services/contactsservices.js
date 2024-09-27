import React, { useState, useEffect } from 'react';
import { submitContactForm, listContacts } from './contactservice';

function ContactServices() {
  const [contacts, setContacts] = useState([]);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [message, setMessage] = useState('');

  // Fetch contacts when component mounts
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await listContacts();
        setContacts(response.contacts || []);
      } catch (error) {
        setMessage(`Error fetching contacts: ${error.message}`);
      }
    }
    fetchContacts();
  }, []);

  // Handle form submission
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await submitContactForm(contactData);
      setMessage(response.message || 'Contact form submitted successfully');
      // Refresh contact list after submission
      const updatedContacts = await listContacts();
      setContacts(updatedContacts.contacts || []);
      // Clear form data after submission
      setContactData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setMessage(`Error submitting contact form: ${error.message}`);
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmitForm}>
        <label>Name:</label>
        <input type="text" name="name" value={contactData.name} onChange={handleInputChange} required />
        <br />
        <label>Email:</label>
        <input type="email" name="email" value={contactData.email} onChange={handleInputChange} required />
        <br />
        <label>Phone:</label>
        <input type="tel" name="phone" value={contactData.phone} onChange={handleInputChange} />
        <br />
        <label>Message:</label>
        <textarea name="message" value={contactData.message} onChange={handleInputChange} required />
        <br />
        <button type="submit">Submit</button>
      </form>

      <h2>Contact List</h2>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              <strong>{contact.name}</strong> - {contact.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts found.</p>
      )}

      {message && <p>{message}</p>}
    </div>
  );
}

export default ContactServices;
