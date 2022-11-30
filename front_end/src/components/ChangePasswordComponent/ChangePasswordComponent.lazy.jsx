import React, { lazy, Suspense } from 'react';
const LazyChangePasswordComponent = lazy(() => import('./ChangePasswordComponent'));
const ChangePasswordComponent = (props) => (<Suspense fallback={null}>
    <LazyChangePasswordComponent {...props}/>
  </Suspense>);
export default ChangePasswordComponent;
