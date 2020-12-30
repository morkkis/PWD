import React, { useEffect } from 'react';
import styles from './AboutView.module.scss';

const AboutView: React.FC = () => {
  return (
    <div className={styles.AboutView} data-testid="AboutView">
      AboutView Component
    </div>
  );
};

export default AboutView;
