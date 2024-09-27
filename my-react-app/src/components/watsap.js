import React from 'react';
 // Ensure this CSS file is created to style the button
import watttImage from '../images/wattt.PNG'; // Import your custom WhatsApp icon

const WhatsApp = ({ phoneNumber, message }) => {
  // Construct the WhatsApp URL
  const whatsappUrl =  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img
        src={watttImage}
        alt="WhatsApp"
        className="whatsapp-icon"
      />
      
    </a>
  );
};

export default WhatsApp;
