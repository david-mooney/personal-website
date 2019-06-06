import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './config';
import HomePage from './scenes/homepage';

const Main = () => (
  <ThemeProvider theme={theme}>
    <HomePage />
  </ThemeProvider>
);

export default(Main);
