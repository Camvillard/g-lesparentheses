import styled from 'styled-components';
import {
  themeColors,
  themeBreakpoints,
  themeFonts
} from '../../theme/style-variables';


const {
  lightPink,
  oldPink,
  forestGreen,
  lightGray,
  mediumGray,
  gray,
  darkGray
} = themeColors;

const {
  xsmScreen,
  smScreen,
  mdScreen,
  lgScreen,
  xlgScreen
} = themeBreakpoints;

const {
  europaFont, gemeliFont
} = themeFonts

export const GreyHeader3 = styled.h3`
  color: ${mediumGray};
`