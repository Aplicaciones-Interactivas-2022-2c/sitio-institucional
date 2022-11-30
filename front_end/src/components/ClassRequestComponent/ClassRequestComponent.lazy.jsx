import React, { lazy, Suspense } from 'react';
const LazyClassRequestComponent = lazy(() => import('./ClassRequestComponent'));
const ClassRequestComponent = (props) => (<Suspense fallback={null}>
    <LazyClassRequestComponent {...props}/>
  </Suspense>);
export default ClassRequestComponent;
