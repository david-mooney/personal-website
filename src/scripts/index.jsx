import '../styles/index.scss';
import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'config';
import HomePage from './scenes/homepage';

const root = document.getElementById('root');

const Main = () => (
  <ThemeProvider theme={theme}>
    <HomePage />
  </ThemeProvider>
);

render(<Main />, root);
