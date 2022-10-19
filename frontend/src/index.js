import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import { AuthContextProvider } from 'context/AuthContext';
import { CoursesContextProvider } from 'context/CoursesContext';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <AuthContextProvider>
    <CoursesContextProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript />
        <App />
      </ChakraProvider>
    </CoursesContextProvider>
  </AuthContextProvider>
);
