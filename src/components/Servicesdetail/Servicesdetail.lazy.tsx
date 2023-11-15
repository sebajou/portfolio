import React, { lazy, Suspense } from 'react';

const LazyServicesdetail = lazy(() => import('./Servicesdetail'));

const Servicesdetail = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyServicesdetail {...props} />
  </Suspense>
);

export default Servicesdetail;
