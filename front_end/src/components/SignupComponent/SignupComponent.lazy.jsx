import React, { lazy, Suspense } from "react";
const LazySignupComponent = lazy(() => import("./SignupComponent"));
const SignupComponent = (props) => (
  <Suspense fallback={null}>
    <LazySignupComponent {...props} />
  </Suspense>
);
export default SignupComponent;
