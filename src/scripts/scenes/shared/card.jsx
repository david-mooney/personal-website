import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { linearGradient, rgba } from 'config/mixins';

const Container = styled.div`
  ${({ css }) => css};
  border-radius: 0.5rem;
  box-shadow: 0 0 2rem 0 ${({ theme }) => rgba(theme.darkest, 0.33)};
  ${({ theme }) => linearGradient(theme)};
`;

const Card = ({ children, css }) => (
  <Container css={css}>{children}</Container>
);

Card.defaultProps = {
  css: [],
  children: [],
};

Card.propTypes = {
  css: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

export default(Card);
