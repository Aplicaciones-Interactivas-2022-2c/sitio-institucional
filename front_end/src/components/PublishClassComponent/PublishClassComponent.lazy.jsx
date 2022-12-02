import React, { lazy, Suspense } from 'react';
const LazyPublicarClaseComponent = lazy(() => import('./PublishClassComponent'));
const PublishClassComponent = (props) => (<Suspense fallback={null}>
    <LazyPublicarClaseComponent {...props}/>
  </Suspense>);
export default PublishClassComponent;
