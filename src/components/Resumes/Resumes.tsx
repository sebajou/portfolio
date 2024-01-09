import React, { FC } from 'react';

interface ResumesProps {}

const Resumes: FC<ResumesProps> = () => (
  <div className="h-screen" data-testid="Resumes" id="resumes">
    Resumes Component
  </div>
);

export default Resumes;
