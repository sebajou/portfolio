import React, { lazy, Suspense } from 'react';

const LazyEducations = lazy(() => import('./Educations'));

const Educations = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyEducations educationTitle={'string'} educationSchool={'string'} educationDate={{
      start: new Date,
      end: new Date,
    }} educationSummary={'string'} educationSummaryBullet={[]} educationSkills={[]} educationLinkWebsite={[]} {...props} />
  </Suspense>
);

export default Educations;
