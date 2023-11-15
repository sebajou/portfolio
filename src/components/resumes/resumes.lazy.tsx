import React, { lazy, Suspense } from 'react';

const LazyResumes = lazy(() => import('./Resumes'));

const Resumes = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyResumes {...props} />
  </Suspense>
);

export default Resumes;
