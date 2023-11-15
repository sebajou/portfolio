import React, { FC } from 'react';
import styles from './services.module.css';

interface ServicesProps {}

const Services: FC<ServicesProps> = () => (
  <div className={styles.Services} data-testid="Services">
    Services Component
  </div>
);

export default Services;
