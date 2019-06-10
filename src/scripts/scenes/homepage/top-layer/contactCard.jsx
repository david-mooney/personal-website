import React from 'react';
import styled, { css } from 'styled-components';
import { H2 } from 'config/styledTags';
import Card from '../../shared/card';

const cardStyles = css`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 45%;
  width: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  transform: translate(20%, 25%) rotate(-24deg);
  padding: 1.5rem;
`;

const Container = styled.div`
  ${({ theme }) => theme.absolute};
  z-index: ${({ theme }) => theme.top};
`;

const ContactCard = () => (
  <Container>
    <Card css={cardStyles}>
      <H2>Contact</H2>
    </Card>
  </Container>
);

export default ContactCard;
