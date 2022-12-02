import React, { lazy, Suspense } from 'react';
const LazyProfesorInfoComponent = lazy(() => import('./ProfesorInfoComponent'));
const ProfesorInfoComponent = (props) => (<Suspense fallback={null}>
    <LazyProfesorInfoComponent {...props}/>
  </Suspense>);
export default ProfesorInfoComponent;
