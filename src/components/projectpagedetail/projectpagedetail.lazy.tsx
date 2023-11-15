import React, { lazy, Suspense } from 'react';

const LazyProjectpagedetail = lazy(() => import('./Projectpagedetail'));

const Projectpagedetail = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProjectpagedetail {...props} />
  </Suspense>
);

export default Projectpagedetail;
