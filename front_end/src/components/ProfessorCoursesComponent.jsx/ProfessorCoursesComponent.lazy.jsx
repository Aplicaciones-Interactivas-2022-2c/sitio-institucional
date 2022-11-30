import React, { lazy, Suspense } from 'react';
const LazyProfessorCoursesComponent = lazy(() => import('./ProfessorCoursesComponent'));
const ProfessorCoursesComponent = (props) => (<Suspense fallback={null}>
    <LazyProfessorCoursesComponent {...props}/>
  </Suspense>);
export default ProfessorCoursesComponent;
