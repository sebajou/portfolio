import React, { lazy, Suspense } from 'react';

const LazyServices = lazy(() => import('./Services'));

const Services = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyServices {...props} />
  </Suspense>
);

export default Services;
