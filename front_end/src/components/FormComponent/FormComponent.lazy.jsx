import React, { lazy, Suspense } from 'react';
const LazyFormComponent = lazy(() => import('./FormComponent'));
const FormComponent = (props) => (<Suspense fallback={null}>
    <LazyFormComponent {...props}/>
  </Suspense>);
export default FormComponent;
