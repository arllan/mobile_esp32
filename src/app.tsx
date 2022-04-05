import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Routes} from './routes/routes';
// import {Home} from './pages/Home';
import {ThemeProvider} from 'styled-components';
import theme from './global/styles/theme';

export function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
