import React, { lazy, Suspense } from 'react';

const LazyVistcard = lazy(() => import('./Visitcard'));

const Vistcard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyVistcard {...props} />
  </Suspense>
);

export default Vistcard;
