import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {ThemeProvider} from 'styled-components';
import theme from './global/styles/theme';
import {Home} from './pages/Home';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
