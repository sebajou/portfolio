import React, { lazy, Suspense } from 'react';

const LazyPresentation = lazy(() => import('./Presentation'));

const Presentation = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPresentation {...props} />
  </Suspense>
);

export default Presentation;
