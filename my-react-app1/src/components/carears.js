import React from 'react';
import styles from './careers.module.css'; // Import CSS module for styling

const CareersPage = () => {
  return (
    <div className={styles.careersPage}>
      <h1>Join Our Team</h1>
      <p>We are always looking for passionate individuals to join our bakery team!</p>

      <div className={styles.positions}>
        <h2>Current Openings</h2>
        <ul>
          <li>
            <div className={styles.jobListing}>
              <img src="/images/bakery-chef.jpg" alt="Bakery Chef" className={styles.jobImage} />
              <div className={styles.jobDetails}>
                <h3>Bakery Chef</h3>
                <p>We are seeking an experienced Bakery Chef to lead our baking team.</p>
                <a href="#">Apply Now</a>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.jobListing}>
              <img src="/images/sales-associate.jpg" alt="Sales Associate" className={styles.jobImage} />
              <div className={styles.jobDetails}>
                <h3>Sales Associate</h3>
                <p>We are hiring energetic Sales Associates to provide excellent customer service.</p>
                <a href="#">Apply Now</a>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.jobListing}>
              <img src="/images/delivery-driver.jpg" alt="Delivery Driver" className={styles.jobImage} />
              <div className={styles.jobDetails}>
                <h3>Delivery Driver</h3>
                <p>We are looking for reliable Delivery Drivers to deliver our bakery goods.</p>
                <a href="#">Apply Now</a>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.perks}>
        <h2>Why Join Us?</h2>
        <ul>
          <li>Competitive salaries and benefits</li>
          <li>Opportunities for growth and development</li>
          <li>Friendly and supportive work environment</li>
          <li>Passionate team dedicated to quality</li>
        </ul>
      </div>

      <div className={styles.howToApply}>
        <h2>How to Apply</h2>
        <p>To apply for a position, please send your resume and cover letter to <a href="mailto:careers@yourbakery.com">careers@yourbakery.com</a>.</p>
      </div>
    </div>
  );
}

export default CareersPage;
