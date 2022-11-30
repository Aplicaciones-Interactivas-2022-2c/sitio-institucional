import React, { lazy, Suspense } from 'react';
const LazyMateriasInscritasComponent = lazy(() => import('./MateriasInscritasComponent'));
const MateriasInscritasComponent = (props) => (<Suspense fallback={null}>
    <LazyMateriasInscritasComponent {...props}/>
  </Suspense>);
export default MateriasInscritasComponent;
