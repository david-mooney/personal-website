import { themeB } from './colors';
import zIndices from './zIndices';
import { absolute, flexCenter } from './layouts';
import language from './language';

const theme = {
  // gradient
  angle: 90,

  // colors
  ...themeB,

  // z indices
  ...zIndices,

  // layouts
  absolute,
  flexCenter
};

export { theme, language };
