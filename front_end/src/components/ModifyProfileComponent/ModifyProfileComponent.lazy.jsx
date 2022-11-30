import React, { lazy, Suspense } from 'react';
const LazyModifyProfileComponent = lazy(() => import('./ModifyProfileComponent'));
const ModifyProfileComponent = (props) => (<Suspense fallback={null}>
    <LazyModifyProfileComponent {...props}/>
  </Suspense>);
export default ModifyProfileComponent;
