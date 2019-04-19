import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './config';

// Components
import BusinessCard from './scenes/businessCard';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  ${({ theme }) => theme.flexCenter};
  background-color: ${({ theme })=> theme.shadeLight};
`;

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <BusinessCard />
      </Wrapper>
    </ThemeProvider>
  );
};

Main.propTypes = {};

export default(Main);
