import React, { lazy, Suspense } from 'react';
const LazyModalComentarComponent = lazy(() => import('./ModalComentarComponent'));
const ModalComentarComponent = (props) => (<Suspense fallback={null}>
    <LazyModalComentarComponent {...props}/>
  </Suspense>);
export default ModalComentarComponent;
