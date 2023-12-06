import React, { FC } from 'react';

interface ResumesProps {}

const Resumes: FC<ResumesProps> = () => (
  <div className="h-screen bg-gradient-to-tl from-green-300 via-white to-white" data-testid="Resumes">
    Resumes Component
  </div>
);

export default Resumes;
