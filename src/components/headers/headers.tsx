import styled from 'styled-components';
import { themeColors } from '../../theme/style-variables';
import { themeBreakpoints } from '../../theme/style-breakpoints';
import { themeFonts } from '../../theme/style-fonts';


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