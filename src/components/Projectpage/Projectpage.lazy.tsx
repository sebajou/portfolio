import React, { lazy, Suspense } from 'react';

const LazyProjectpage = lazy(() => import('./Projectpage'));

const Projectpage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProjectpage 
      linksGithub={[]} linkWebsite={"string"} projectSkills={[]} projectName={"string"}
      projectSummary={"string"}
      projectUrlImage={"string"}
      {...props}      />
  </Suspense>
);

export default Projectpage;
