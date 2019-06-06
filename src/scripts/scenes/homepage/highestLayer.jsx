import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  ${({ theme }) => theme.absolute};
  z-index: ${({ theme }) => theme.top};
`;

const Card = styled.div`
  height: 5rem;
  width: 5rem;
  border: 1px dashed pink;
`;

const HighestLayer = () => (
  <Container>
    <Card />
  </Container>
);

export default(HighestLayer);
