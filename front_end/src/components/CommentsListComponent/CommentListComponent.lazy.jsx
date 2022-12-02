import React, { lazy, Suspense } from "react";
const LazyCommentsListComponent = lazy(() => import("./CommentsListComponent"));
const CommentsListComponent = (props) => (
  <Suspense fallback={null}>
    <LazyCommentsListComponent {...props} />
  </Suspense>
);
export default CommentsListComponent;
