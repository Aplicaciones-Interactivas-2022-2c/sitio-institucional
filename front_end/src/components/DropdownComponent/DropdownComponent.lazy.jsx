import React, { lazy, Suspense } from 'react';
const LazyDropdownComponent = lazy(() => import('./DropdownComponent'));
const DropdownComponent = (props) => (<Suspense fallback={null}>
    <LazyDropdownComponent {...props}/>
  </Suspense>);
export default DropdownComponent;
