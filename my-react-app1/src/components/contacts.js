import React, { useState, useRef } from 'react';
import locationImage from '../images/locate.PNG';

const Contact = () => {
  const [message, setMessage] = useState('');
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/api/v1/contacts/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        setMessage(errorMessage.error);
      } else {
        const successMessage = await response.json();
        setMessage(successMessage.message);
        // Clear form fields after successful submission (if needed)
        nameRef.current.value = '';
        emailRef.current.value = '';
        messageRef.current.value = '';
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Error submitting form. Please try again later.');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-details">
        <h4>Contact Us</h4>
        <p>Feel free to reach out to us for any inquiries or orders!</p>

        <div className="contact-info">
          <h2>Contact Details:</h2>
          <p><strong>Phone:</strong> +265888769228</p>
          <p><strong>Email:</strong> faithconfidentionalbakery@gmail.com</p>
          <p><strong>Address:</strong> 81-79 Kyanja Ring Rd, Kampala</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message:</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" ref={nameRef} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" ref={emailRef} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" ref={messageRef} required></textarea>
          </div>
          <button type="submit" className="btn-submit">Submit</button>
        </form>
        {message && <p>{message}</p>}
      </div>

      <div className="location-image">
        <div className="trade-text">
          <p>Come Trade With Us</p>
        </div>
        <img src={locationImage} alt="Location Image" />
      </div>
    </div>
  );
};

export default Contact;
