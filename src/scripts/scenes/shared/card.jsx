import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { gradient, rgba } from '../../sass-utilities';

const Container = styled.div`
  width: 20rem;
  height: 10rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 2rem 0 ${({ theme }) => rgba(theme.darkest, 0.33)};
  ${({ theme }) => gradient(theme)};
  ${({ theme }) => theme.flexCenter};
`;

const Card = ({ children }) => (
  <Container>{children}</Container>
);

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default(Card);
