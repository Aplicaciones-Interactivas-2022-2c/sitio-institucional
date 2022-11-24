import { Container } from '@chakra-ui/react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import {
  SignInPage,
  SignUpPage,
  HomePage,
  LandingPage,
  CommentsPage,
  NotFoundPage,
  DevelopPage,
  ProfesorPage,
  UnauthorizedPage,
} from './pages';
import Navbar from 'components/Navbar';
import React from 'react';
import {
  ShouldBeUnsigned,
  RequireAuth,
} from 'components/authentication/RequireAuth';
import { useAuthContext as useAuth } from 'hooks/useAuthContext';
import { RegisterPage } from 'pages/RegisterPage';

const ROLES = {
  Alumno: 5150,
  Profesor: 1984,
  Admin: 2001,
};

function App() {
  const { user } = useAuth();
  return (
    <Router>
      <Navbar />
      <Container centerContent>
        <Routes>
          {/*Temporary rute for development*/}
          <Route path="/develop" element={<DevelopPage />} />
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/signin"
            element={<ShouldBeUnsigned user={user} Route={SignInPage} />}
          />
          <Route
            path="/signup"
            element={<ShouldBeUnsigned user={user} Route={SignUpPage} />}
          />
          <Route path="/home" element={<HomePage />} />
          <Route path="/comments/:id" element={<CommentsPage />} />
          <Route path="/register/:id" element={<RegisterPage />} />

          {/*Protected*/}
          <Route
            path="/profesor"
            element={
              <RequireAuth
                user={user}
                Route={ProfesorPage}
                allowedRoles={[ROLES.Profesor]}
              />
            }
          />

          {/*Error Routes*/}
          <Route path="/401" element={<UnauthorizedPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
