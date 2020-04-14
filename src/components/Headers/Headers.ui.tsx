import styled from "styled-components"
import {
  themeColors,
  themeBreakpoints,
  themeFonts,
} from "../../theme/themeVariables"

const {
  lightPink,
  oldPink,
  forestGreen,
  lightGray,
  mediumGray,
  gray,
  darkGray,
} = themeColors

const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

const { $bodyFont, $accentFont } = themeFonts

export const GreyHeader3 = styled.h3`
  color: ${mediumGray};
`
export const DarkHeader3 = styled.h3`
  color: ${darkGray};
`
