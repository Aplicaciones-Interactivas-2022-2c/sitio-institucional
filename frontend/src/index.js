import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import { AuthContextProvider } from 'context/AuthContext';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript />
        <App />
      </ChakraProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
