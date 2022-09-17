import { ChakraProvider, Container, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignInPage, SignUpPage, HomePage, AboutPage } from './pages';
import NavBarChoc from 'components/NavBarChoc';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <NavBarChoc />
        <Container bg="blue.600" maxW="container.xl" centerContent>
          <Routes>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/signin" element={<SignInPage />}></Route>
            <Route path="/signup" element={<SignUpPage />}></Route>
          </Routes>
        </Container>
      </Router>
    </ChakraProvider>
  );
}

export default App;
