import styled from 'styled-components';
import { themeColors } from '../../theme/style-variables';
import { themeBreakpoints } from '../../theme/style-breakpoints';
import { Accent } from '../../theme/globalstyle';
import HomepagePostCard from './homepage-post-card';

const { lightPink, oldPink} = themeColors;

const {
  xsmScreen,
  smScreen,
  mdScreen,
  lgScreen,
  xlgScreen
} = themeBreakpoints;

export const CardMeta = styled(Accent)`
  font-size: 1.2rem;
  font-weight: 300;
  color: ${oldPink};
  margin: 0;
`
