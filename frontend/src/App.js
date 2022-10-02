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
} from './pages';
import Navbar from 'components/Navbar';
import React from 'react';
import { useAuthContext } from 'hooks/useAuthContext';

function App() {
  const { user } = useAuthContext();

  return (
    <Router>
      <Navbar />
      <Container centerContent>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/develop" element={<DevelopPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/comments" element={<CommentsPage />}></Route>
          <Route
            path="/signin"
            element={!user ? <SignInPage /> : <Navigate to="/home" />}
          ></Route>
          <Route
            path="/signup"
            element={!user ? <SignUpPage /> : <Navigate to="/home" />}
          ></Route>
          <Route path="/404" element={<NotFoundPage />}></Route>
          <Route path="*" element={<Navigate to="/404" />}></Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
