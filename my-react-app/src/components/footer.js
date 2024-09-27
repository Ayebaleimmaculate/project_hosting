import React, { useState } from 'react';
import PrivacyPolicy from '../components/privacyPolicy';
import Subscription from '../components/subscription';
import SocialMedia from '../components/socialedia';
import TermsOfService from '../components/terms';
import './footer.css';

const Footer = () => {
  const [activeContent, setActiveContent] = useState(null); // Default active content set to null

  const handleContentChange = (content) => {
    setActiveContent(content);
  };

  return (
    <footer className="footer">
      {/* Tab-like navigation for content */}
      <div className="footer-tabs">
        <a href="#privacy" onClick={() => handleContentChange('privacy')}>Privacy Policy</a>
        <a href="#terms" onClick={() => handleContentChange('terms')}>Terms of Service</a>
        <a href="#subscription" onClick={() => handleContentChange('subscription')}>Subscription</a>
      </div>

      {/* Render content based on activeContent state */}
      <div className="footer-content">
        {activeContent === 'privacy' && <PrivacyPolicy />}
        {activeContent === 'terms' && <TermsOfService />}
        {activeContent === 'subscription' && <Subscription />}
      </div>

      {/* Social Media section (assuming it's always visible) */}
      <div className="footer-section">
        <h4>Social Media</h4>
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
