import { ChakraProvider, Container, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignInPage, SignUpPage, HomePage, AboutPage } from './pages';
import Navbar from 'components/Navbar';
import React from 'react';
import { AuthContextProvider } from 'context/AuthContext';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        <Router>
          <Navbar />
          <Container bg="blue.600" maxW="container.xl" centerContent>
            <Routes>
              <Route path="/about" element={<AboutPage />}></Route>
              <Route path="/home" element={<HomePage />}></Route>
              <Route path="/signin" element={<SignInPage />}></Route>
              <Route path="/signup" element={<SignUpPage />}></Route>
            </Routes>
          </Container>
        </Router>
      </AuthContextProvider>
    </ChakraProvider>
  );
}

export default App;
