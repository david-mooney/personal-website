export const fluidFont = (amount, min, max, unit = 'vw', prop = 'font-size') => {
  const minBreakpoint = (min / amount) * 100;
  const maxBreakpoint = max ? (max / amount) * 100 : false;
  const dimension = unit === 'vw' ? 'width' : 'height';

  return `
    @media (max-${dimension}: ${minBreakpoint}px) {
      ${prop}: ${min}px;
    }

    ${max && `
      @media (min-${dimension}: ${maxBreakpoint}px) {
        ${prop}: ${max}px;
      }
    `}

    ${prop}: ${amount}${unit}
  `;
};

export const rgba = (hex, alpha) => {
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

export const linearGradient = ({ angle = 0, gradient = [] }) => (
  `background: linear-gradient(${angle}deg, ${gradient[0]}, ${gradient[1]})`
);
