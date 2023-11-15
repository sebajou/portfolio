import React, { FC } from 'react';
import styles from './Presentation.module.css';

interface PresentationProps {}

const Presentation: FC<PresentationProps> = () => (
  <div className={styles.Presentation} data-testid="Presentation">
    Presentation Component
  </div>
);

export default Presentation;
