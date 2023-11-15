import React, { FC } from 'react';
import styles from './Servicesdetail.module.css';

interface ServicesdetailProps {}

const Servicesdetail: FC<ServicesdetailProps> = () => (
  <div className={styles.Servicesdetail} data-testid="Servicesdetail">
    Servicesdetail Component
  </div>
);

export default Servicesdetail;
