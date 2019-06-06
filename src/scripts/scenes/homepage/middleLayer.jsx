import React from 'react';
import styled from 'styled-components';
import { Flipper, Flipped } from 'react-flip-toolkit';
import { H1, gradient, rgba } from '../../sass-utilities';

const Container = styled.div`
  height: 100%;
  width: 100%;
  ${({ theme }) => theme.flexCenter};
`;

const Card = styled.div`
  width: 20rem;
  height: 10rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 2rem 0 ${({ theme }) => rgba(theme.darkest, 0.33)};
  ${({ theme }) => gradient(theme)};
  ${({ theme }) => theme.flexCenter};
`;

const HomePage = () => (
  <Container>
    <Card>
      <H1>Hello 👋</H1>
    </Card>

    <div>
      <Card>
        <H1>About</H1>
      </Card>
    </div>
  </Container>
);

export default(HomePage);
