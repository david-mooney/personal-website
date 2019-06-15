import React from 'react';
import styled from 'styled-components';

import AboutCard from './aboutCard';
import WorkCard from './workCard';
import BlogCard from './blogCard';
import ContactCard from './contactCard';

const Container = styled.div`
  ${({ theme }) => theme.absolute};
  z-index: ${({ theme }) => theme.top};
  overflow: hidden;
`;

const HighestLayer = () => (
  <Container>
    <AboutCard />
    <WorkCard />
    <BlogCard />
    <ContactCard />
  </Container>
);

export default HighestLayer;
