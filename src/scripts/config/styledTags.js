import styled from 'styled-components';
import { fluidFont } from './mixins';

const fontSizes = {
  large: 48,
  medium: 32,
  small: 16,
};

export const H1 = styled.h1`
  margin: 0;
  ${fluidFont(5, fontSizes.medium, fontSizes.large)}
  font-weight: 600;
  color: ${({ theme }) => theme.lightest};
`;

export const H2 = styled.h2`
  margin: 0;
  ${fluidFont(4, fontSizes.small, fontSizes.medium)}
  font-weight: 500;
  color: ${({ theme }) => theme.lightest};
`;
