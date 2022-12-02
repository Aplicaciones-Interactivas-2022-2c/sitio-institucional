import React, { lazy, Suspense } from "react";

// Lazy Loading
const LazyBlockStudentCommentComponent = lazy(() =>
  import("./BlockStudentCommentComponent")
);
const BlockStudentCommentComponent = (props) => (
  <Suspense fallback={null}>
    <LazyBlockStudentCommentComponent {...props} />
  </Suspense>
);
export default BlockStudentCommentComponent;
