import React, { lazy, Suspense } from 'react';
const LazySolicitudesComponent = lazy(() => import('./SolicitudesComponent'));
const SolicitudesComponent = (props) => (<Suspense fallback={null}>
    <LazySolicitudesComponent {...props}/>
  </Suspense>);
export default SolicitudesComponent;
