import React from 'react';
import styled from 'styled-components';

const someImage = require('../../../../../test.svg');

const Container = styled.div`
  ${({ theme }) => theme.absolute};
  z-index: ${({ theme }) => theme.behind};
  overflow: hidden;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

const MidLayer = () => (
  <Container>
    <Img src={someImage} />
  </Container>
);

export default(MidLayer);
