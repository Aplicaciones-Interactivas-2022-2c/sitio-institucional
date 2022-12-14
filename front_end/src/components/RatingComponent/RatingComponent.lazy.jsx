import React, { lazy, Suspense } from "react";
const LazyRatingComponent = lazy(() => import("./RatingComponent"));
const RatingComponent = (props) => (
  <Suspense fallback={null}>
    <LazyRatingComponent {...props} />
  </Suspense>
);
export default RatingComponent;
