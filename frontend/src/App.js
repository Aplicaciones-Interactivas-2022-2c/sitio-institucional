import { Container } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { SignInPage, SignUpPage, HomePage, AboutPage } from './pages';
import Navbar from 'components/Navbar';
import React from 'react';
import { useAuthContext } from 'hooks/useAuthContext';

function App() {
  const { user } = useAuthContext();

  return (
    <Router>
      <Navbar />
      <Container bg="blue.600" maxW="container.xl" centerContent>
        <Routes>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route
            path="/signin"
            element={!user ? <SignInPage /> : <Navigate to="/home" />}
          ></Route>
          <Route
            path="/signup"
            element={!user ? <SignUpPage /> : <Navigate to="/home" />}
          ></Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
