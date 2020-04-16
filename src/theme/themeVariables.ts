const lightPink = `#f1e9e9`
const oldPink = `#B08C8C`
const forestGreen = `#87a496`

const lightGray = `#DFE0E3`
const mediumGray = `#85888F`
const gray = `#575A60`
const darkGray = `#363A42`
const offWhite = `#F9F8F8`

const europaFont = `'europa', sans-serif`
const gemeliFont = `'gemeli-mono', serif`

const bodyFont = europaFont
const headersFont = europaFont
const accentFont = gemeliFont

// default : 375px - iPhone 8

// iPad - 8 cols
const smScreen = `768px`

// iPad Pro
const mdScreen = `1024px`

// iMac - 12 cols
const lgScreen = `1280px`

// macbook pro
const xlgScreen = `1440px`

export const themeFonts = { bodyFont, accentFont }

export const themeBreakpoints = {
  smScreen,
  mdScreen,
  lgScreen,
  xlgScreen,
}

export const themeColors = {
  lightPink,
  oldPink,
  forestGreen,
  lightGray,
  mediumGray,
  gray,
  darkGray,
  offWhite,
}
