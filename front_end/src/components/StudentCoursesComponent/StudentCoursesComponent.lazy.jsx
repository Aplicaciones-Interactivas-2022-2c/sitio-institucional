import React, { lazy, Suspense } from 'react';
const LazyStudentCoursesComponent = lazy(() => import('./StudentCoursesComponent'));
const StudentCoursesComponent = (props) => (<Suspense fallback={null}>
    <LazyStudentCoursesComponent {...props}/>
  </Suspense>);
export default StudentCoursesComponent;
