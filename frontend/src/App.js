import { ChakraProvider, Container, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutPage from 'pages/AboutPage';
import HomePage from 'pages/HomePage';
import NavBarChoc from 'components/NavBarChoc';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <NavBarChoc />
        <Container bg="blue.600" maxW="container.xl" centerContent>
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Container>
      </Router>
    </ChakraProvider>
  );
}

export default App;
