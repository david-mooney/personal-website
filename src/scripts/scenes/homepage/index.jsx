import React from 'react';
import styled, { css } from 'styled-components';
import { H1 } from 'config/styledTags';
import TopLayer from './top-layer';
import MidLayer from './mid-layer';
import Card from '../shared/card';

const Container = styled.div`
  height: 100%;
  width: 100%;
  ${({ theme }) => `
    ${theme.absolute};
    ${theme.flexCenter};
  `};
`;

const cardStyles = css`
  padding: 4rem 5rem;
  ${({ theme }) => theme.flexCenter};
`;

const HomePage = () => (
  <Container>
    <TopLayer />
    <MidLayer />

    <Card css={cardStyles}>
      <H1>Hello.</H1>
    </Card>
  </Container>
);

export default HomePage;
