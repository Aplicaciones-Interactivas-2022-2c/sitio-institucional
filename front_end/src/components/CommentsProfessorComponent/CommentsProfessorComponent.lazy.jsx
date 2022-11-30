import React, { lazy, Suspense } from 'react';
const LazyCommentsProfessorComponent = lazy(() => import('./CommentsProfessorComponent'));
const CommentsProfessorComponent = (props) => (<Suspense fallback={null}>
    <LazyCommentsProfessorComponent {...props}/>
  </Suspense>);
export default CommentsProfessorComponent;
