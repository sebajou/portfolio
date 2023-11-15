import React, { lazy, Suspense } from 'react';

const LazyLinks = lazy(() => import('./Links'));

const Links = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLinks {...props} />
  </Suspense>
);

export default Links;
