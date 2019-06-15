const colors = {
  // Common
  brilliant: '#FFFFFF',
  vanta: '#000000',
  froly: '#F2709C',
  salmon: '#FF9472',

  // Theme A
  pomegranate: '#f23429',
  mariner: '#257ccf',
  bluebell: '#9593c9',
  sycamore: '#7e8a44',
  tacao: '#efae77',
  sorbus: '#fb7a0c',
  athens: '#ebecef',

  // Theme B
  harvest: '#DFAC77',
  brightGray: '#3B4253',
  fedora: '#847481',
  cucumber: '#78ae5c',
  regentGrey: '#8C96A9',
  buckthorn: '#f59e24',
  desert: '#F8F8F6'
};

const themeA = {
  main: colors.pomegranate,
  shadeLight: colors.athens,
  shadeDark: colors.mariner,
  accentLight: colors.tacao,
  accentDark: colors.bluebell,
  success: colors.sycamore,
  warning: colors.sorbus,
  danger: colors.pomegranate,
  lightest: colors.brilliant,
  darkest: colors.vanta
};

const themeB = {
  lightest: colors.brilliant,
  darkest: colors.vanta,
  gradient: [colors.froly, colors.salmon],
  danger: colors.pomegranate,
};

export { themeA, themeB };
