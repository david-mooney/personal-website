import React from 'react';
import styled, { css } from 'styled-components';
import { H2 } from 'config/styledTags';
import Card from '../../shared/card';

// FIXME: min-sizes for cards

const cardStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 50%;
  width: 30%;
  transform: translate(-50%, 15%) rotate(16deg);
  display: flex;
  justify-content: flex-end;
  padding: 1.5rem;
`;

const Container = styled.div`
  ${({ theme }) => theme.absolute};
  z-index: ${({ theme }) => theme.top};
`;

const AboutCard = () => (
  <Container>
    <Card css={cardStyles}>
      <H2>About</H2>
    </Card>
  </Container>
);

export default(AboutCard);
