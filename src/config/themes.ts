import hexRgb from '../utils/hex-rgb'

export interface AppTheme {
  backgroundColor: string
  iconColor: string
  cardbackgroundcolor: string
  buttonCackgroundcolor: string
  stateCardbgColor: string
  titleColor: string
  cardBorderColor: string
  cardButtomDescriptionColor: string
  cardButtomIcon: string
  // new components
  titleTextColor: string
  subtitleTextColor: string
}

export const colors = {
  black300: '#212429', // 0, 0%, 13% hsb 0, 0%, 13%
  black400: '#495057', // 0, 0%, 7% hsb 0, 0%, 7%

  grey300: '#ACB5BD', // 0, 0%, 0% hsb 0, 0%, 0%

  white100: '#FFFFFF', // 0, 0%, 100% hsb 0, 0%, 100%
  white: '#FFFFFF', // 0, 0%, 100% hsb 0, 0%, 100%
  white400: '#DDE2E5', // 0,0%, 87% hsb 0, 0%, 87%

  blue100: '#023048', // 213, 28%, 41% hsb 213, 43%, 52%
  blue150: '#00C0FF', // 212, 70%, 62% hsb 212, 61%, 89%
  blue200: '#8CE0F3', // 230, 59%, 30% hsb 230, 74%, 47%

  orange310: '#ff9500', // 35, 100%, 50% hsb 35, 100%, 100%
  orange: '#F46B08',

  red: '#D42126', // 358, 73%, 48% hsb 358, 84%, 83%

  green: '#04ab93', // 171, 95%, 34% hsb 171, 98%, 67%
}

export const rgb: (hex: string, alpha?: number) => string = (
  hex: string,
  alpha?: number
) =>
  alpha
    ? hexRgb(hex, { alpha: alpha, format: 'css' })
    : hexRgb(hex, { format: 'css' })

export const themes: { [key: string]: AppTheme } = {
  dark: {
    backgroundColor: colors.black300,
    iconColor: colors.white400,
    buttonCackgroundcolor: colors.grey300,
    cardbackgroundcolor: colors.black400,
    stateCardbgColor: colors.black400,
    titleColor: colors.white,
    cardBorderColor: colors.black300,
    cardButtomDescriptionColor: colors.white400,
    cardButtomIcon: colors.black300,
    // new components
    titleTextColor: colors.white400,
    subtitleTextColor: colors.white100,
  },
  light: {
    backgroundColor: colors.white100,
    iconColor: colors.grey300,
    buttonCackgroundcolor: colors.white400,
    cardbackgroundcolor: colors.white400,
    stateCardbgColor: colors.white400,
    titleColor: colors.black300,
    cardBorderColor: colors.white400,
    cardButtomDescriptionColor: colors.grey300,
    cardButtomIcon: colors.black300,
    // new components
    titleTextColor: colors.black300,
    subtitleTextColor: colors.grey300,
  },
}
