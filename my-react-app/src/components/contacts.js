import React, { useState, useRef } from 'react';
import locationImage from '../images/locate.PNG';

const WHATSAPP_NUMBER = '+256773491110'; // Your WhatsApp number
const WHATSAPP_MESSAGE_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=`; // Base URL for WhatsApp

const Contact = () => {
  const [message, setMessage] = useState('');
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the WhatsApp message
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const userMessage = messageRef.current.value;
    const formattedMessage = `Contact Details:%0AName: ${name}%0AEmail: ${email}%0AMessage: ${userMessage}`;
    const whatsappUrl = `${WHATSAPP_MESSAGE_URL}${encodeURIComponent(formattedMessage)}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');

    // Optionally reset form fields after submission
    nameRef.current.value = '';
    emailRef.current.value = '';
    messageRef.current.value = '';
  };

  return (
    <div className="contact-container">
      <div className="contact-details">
        <h4>Contact Us</h4>
        <p>Feel free to reach out to us for any inquiries or orders!</p>

        <div className="contact-info">
          <h2>Contact Details:</h2>
          <p><strong>Phone:</strong> +256773491110</p>
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
          <p>We are located at</p>
        </div>
        <img src={locationImage} alt="Location Image" />
      </div>
    </div>
  );
};

export default Contact;
