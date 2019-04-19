import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rgba, gradient } from '../utilities/sassHelpers';

const Wrapper = styled.div`
  position: relative;
  padding: 4rem 6rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.shadeLight };
  background: ${({ theme }) => gradient(-45, theme.accentDark, theme.shadeDark)};
  border-radius: 0.5rem;
  box-shadow: 0rem 0.5rem 1rem ${({ theme })=> rgba(theme.darkest, 0.2)};
  &:after {
    content: '';
    ${({ theme }) => theme.absolute};
    box-shadow: 0rem 1rem 2rem ${({ theme })=> rgba(theme.darkest, 0.2)};
    border-radius: 0.5rem;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  &:hover::after {
    opacity: 1;
  }
`;

const BusinessCard = () => {
  return (
    <Wrapper>Building...</Wrapper>
  );
};

BusinessCard.propTypes = {};

export default(BusinessCard);
