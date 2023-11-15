import React, { FC } from 'react';
import styles from './vistcard.module.css';

interface VistcardProps {}

const Vistcard: FC<VistcardProps> = () => (
  <div className={styles.Vistcard} data-testid="Vistcard">
    Vistcard Component
  </div>
);

export default Vistcard;
