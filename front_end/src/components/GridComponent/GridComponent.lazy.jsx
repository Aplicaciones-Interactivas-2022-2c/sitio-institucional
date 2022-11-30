import React, { lazy, Suspense } from 'react';
const LazyGridComponent = lazy(() => import('./GridComponent'));
const GridComponent = (props) => (<Suspense fallback={null}>
    <LazyGridComponent {...props}/>
  </Suspense>);
export default GridComponent;
