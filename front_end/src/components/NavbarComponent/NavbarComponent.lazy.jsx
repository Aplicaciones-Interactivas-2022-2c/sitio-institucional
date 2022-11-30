import React, { lazy, Suspense } from 'react';
const LazyNavbarComponent = lazy(() => import('./NavbarComponent'));
const NavbarComponent = (props) => (<Suspense fallback={null}>
    <LazyNavbarComponent {...props}/>
  </Suspense>);
export default NavbarComponent;
