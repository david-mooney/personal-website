import styled from 'styled-components';

const H1 = styled.h1`
  >span {
    margin: 0;
    font-size: 2.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.lightest};
    &:first-of-type {
      padding-right: 1rem;
    }
  }
`;

const rgba = (hex, alpha) => {
  const hexToRgb = () => {
    const regex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const newHex = hex.replace(regex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(newHex);

    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const { r, g, b } = hexToRgb();
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const gradient = ({ angle = 0, gradient = [] }) =>
  `background: linear-gradient(${angle}deg, ${gradient[0]}, ${gradient[1]})`;

export {
  H1,
  rgba,
  gradient
}
