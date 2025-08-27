import React from 'react';
import Button from '../../components/Button';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>
        Welcome to our application! This is the About Us page where you can learn more about our services.
      </p>
      
      <div className={styles.navigationSection}>
        <h2 className={styles.sectionTitle}>Navigate to Pages</h2>
        <div className={styles.buttonContainer}>
          <Button 
            variant="primary" 
            size="large" 
            to="/"
            className={styles.navButton}
          >
            Home (About Us)
          </Button>
          
          <Button 
            variant="secondary" 
            size="large" 
            to="/cashfree"
            className={styles.navButton}
          >
            Cashfree
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
