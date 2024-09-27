import React from 'react';
import './logo.css'; // Import CSS for styling
import myLogo from '../images/mylogo.png'; // Import your image

function Logo() {
  return (
    <div className="logo-container">
      <div className="logo">
        {/* Your logo image */}
        <img src={myLogo} alt="Logo" />
      </div>
    </div>
  );
}

export default Logo;
