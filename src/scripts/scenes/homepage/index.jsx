import React from 'react';
import styled from 'styled-components';
import { H1 } from '../../sass-utilities';
import HighestLayer from './highestLayer';
import Card from '../shared/card';

const Container = styled.div`
  height: 100%;
  width: 100%;
  ${({ theme }) => `
    ${theme.absolute};
    ${theme.flexCenter};
  `};
`;

const HomePage = () => (
  <Container>
    <HighestLayer />

    <Card>
      <H1>
        <span>Hello</span>
        <span role="img" aria-label="wave">👋</span>
      </H1>
    </Card>
  </Container>
);

export default(HomePage);
