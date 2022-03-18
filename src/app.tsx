import React from 'react';
import {Routes} from './routes/routes';
// import {Home} from './pages/Home';
import {ThemeProvider} from 'styled-components';
import theme from './global/styles/theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
