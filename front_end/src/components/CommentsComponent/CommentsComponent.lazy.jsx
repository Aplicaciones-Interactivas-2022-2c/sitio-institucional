import React, { lazy, Suspense } from 'react';
const LazyCommentsComponent = lazy(() => import('./CommentsComponent'));
const CommentsComponent = (props) => (<Suspense fallback={null}>
    <LazyCommentsComponent {...props}/>
  </Suspense>);
export default CommentsComponent;
