import React, { FC } from 'react';
import styles from './resumes.module.css';

interface ResumesProps {}

const Resumes: FC<ResumesProps> = () => (
  <div className={styles.Resumes} data-testid="Resumes">
    Resumes Component
  </div>
);

export default Resumes;
