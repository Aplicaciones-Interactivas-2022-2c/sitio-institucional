import React, { lazy, Suspense } from 'react';
const LazyClassesComponent = lazy(() => import('./ClassesComponent'));
const ClassesComponent = (props) => (<Suspense fallback={null}>
    <LazyClassesComponent {...props}/>
  </Suspense>);
export default ClassesComponent;
