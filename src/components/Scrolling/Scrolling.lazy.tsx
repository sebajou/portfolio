import React, { lazy, Suspense } from 'react';

const LazyScrolling = lazy(() => import('./Scrolling'));

const Scrolling = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyScrolling {...props} />
  </Suspense>
);

export default Scrolling;
