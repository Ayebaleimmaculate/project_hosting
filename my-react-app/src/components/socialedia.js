import React from 'react';
import styles from './styles.css'; // Import CSS module for styling
import linkedinImg from '../images/linkden.png'; // Import LinkedIn image
import instagramImg from '../images/insta.png'; // Import Instagram image
import facebookImg from '../images/fb.png'; // Import Facebook image

const SocialMedia = () => {
  const handleLinkedInClick = () => {
    window.open('https://ug.linkedin.com/in/katwesige-aisha-78613b273?original_referer=https%3A%2F%2Fwww.google.com%2F', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/faiths_confectionery_/?locale=zh_tw&hl=ar', '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/aisha.katwesige.3/', '_blank');
  };

  return (
    <div className={styles.socialMedia}>
      <h3>Follow Us</h3>
      <div className={styles.icons}>
        <img
          className={styles.icon}
          src={linkedinImg}
          alt="LinkedIn"
          onClick={handleLinkedInClick}
        />
        <img
          className={styles.icon}
          src={instagramImg}
          alt="Instagram"
          onClick={handleInstagramClick}
        />
        <img
          className={styles.icon}
          src={facebookImg}
          alt="Facebook"
          onClick={handleFacebookClick}
        />
      </div>
    </div>
  );
};

export default SocialMedia;


