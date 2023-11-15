import React, { FC } from 'react';
import styles from './Resumesdetail.module.css';

interface ResumesdetailProps {}

const Resumesdetail: FC<ResumesdetailProps> = () => (
  <div className={styles.Resumesdetail} data-testid="Resumesdetail">
    Resumesdetail Component
  </div>
);

export default Resumesdetail;
