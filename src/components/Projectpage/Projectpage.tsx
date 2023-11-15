import React, { FC } from 'react';
import styles from './Projectpage.module.css';

interface ProjectpageProps {}

const Projectpage: FC<ProjectpageProps> = () => (
  <div className={styles.Projectpage} data-testid="Projectpage">
    Projectpage Component
  </div>
);

export default Projectpage;
