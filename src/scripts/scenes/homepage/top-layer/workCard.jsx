import React from 'react';
import styled, { css } from 'styled-components';
import { H2 } from 'config/styledTags';
import Card from '../../shared/card';

const cardStyles = css`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 40%;
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  transform: translate(-5%, 40%) rotate(20deg);
  padding: 1.5rem;
`;

const Container = styled.div`
  ${({ theme }) => theme.absolute};
  z-index: ${({ theme }) => theme.top};
`;

const WorkCard = () => (
  <Container>
    <Card css={cardStyles}>
      <H2>Work</H2>
    </Card>
  </Container>
);

export default(WorkCard);
