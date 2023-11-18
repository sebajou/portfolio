import React, { FC } from 'react';
import styles from './Resumes.module.css';

interface ResumesProps {}

const Resumes: FC<ResumesProps> = () => (
  <div className="h-screen" data-testid="Resumes">
    Resumes Component
  </div>
);

export default Resumes;
