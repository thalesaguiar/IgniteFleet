import React from 'react';
import {SignIn} from './src/screens/SignIn/index';
import {ThemeProvider} from 'styled-components';
import theme from './src/theme';
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  );
}
