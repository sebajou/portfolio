import React, { FC } from 'react';
import styles from './Services.module.css';

interface ServicesProps {}

const Services: FC<ServicesProps> = () => (
  <div className="h-screen" data-testid="Services">
    Services Component
  </div>
);

export default Services;
