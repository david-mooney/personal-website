import React from 'react';
import styled, { css } from 'styled-components';
import { H2 } from 'config/styledTags';
import Card from '../../shared/card';

const cardStyles = css`
  position: absolute;
  top: 0;
  right: 0;
  height: 40%;
  width: 35%;
  transform: translate(0, -60%) rotate(30deg);
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 1.5rem;
`;

const Container = styled.div`
  ${({ theme }) => theme.absolute};
  z-index: ${({ theme }) => theme.top};
`;

const BlogCard = () => (
  <Container>
    <Card css={cardStyles}>
      <H2>Blog</H2>
    </Card>
  </Container>
);

export default(BlogCard);
