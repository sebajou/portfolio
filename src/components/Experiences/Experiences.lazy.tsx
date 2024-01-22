import React, { lazy, Suspense } from 'react';

const LazyExperiences = lazy(() => import('./Experiences'));

const Experiences = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExperiences experienceTitle={'string'} experienceCompany={'string'} experienceDate={{
      start: new Date,
      end: new Date
    }} experienceSummary={'string'} experienceSummaryBullet={[]} experienceSkills={[]} experienceLinkWebsite={[]} {...props} />
  </Suspense>
);

export default Experiences;
