import React, { lazy, Suspense } from 'react';
const LazyResetPasswordComponent = lazy(() => import('./ResetPasswordComponent'));
const ResetPasswordComponent = (props) => (<Suspense fallback={null}>
    <LazyResetPasswordComponent {...props}/>
  </Suspense>);
export default ResetPasswordComponent;
