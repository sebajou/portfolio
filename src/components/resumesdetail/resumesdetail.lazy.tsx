import React, { lazy, Suspense } from 'react';

const LazyResumesdetail = lazy(() => import('./Resumesdetail'));

const Resumesdetail = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyResumesdetail {...props} />
  </Suspense>
);

export default Resumesdetail;
