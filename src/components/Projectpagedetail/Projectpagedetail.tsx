import React, { FC } from 'react';
import styles from './Projectpagedetail.module.css';

interface ProjectpagedetailProps {}

const Projectpagedetail: FC<ProjectpagedetailProps> = () => (
  <div className={styles.Projectpagedetail} data-testid="Projectpagedetail">
    Projectpagedetail Component
  </div>
);

export default Projectpagedetail;
