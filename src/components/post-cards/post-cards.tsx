import styled from 'styled-components';
import {
  themeColors,
  themeBreakpoints,
  themeFonts
} from '../../theme/style-variables';
import { Accent } from '../../theme/globalstyle';
import { MainContainer } from '../containers/main-container';
import { ButtonBlock } from '../buttons/buttons';

const { lightPink, oldPink, mediumGray} = themeColors;

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

export const BlogCardContainer = styled(MainContainer)`
  margin: 48px auto  64px;
  @media(min-width: ${mdScreen}) {
    margin: 122px 0;
  }
`
export const HomepageCardMeta = styled(CardMeta)`
  color: ${mediumGray};
  text-align: right;

  @media(min-width: ${mdScreen}) {
    margin-right: 8%;
  }
`

export const FeaturedImageContainer = styled.div`
  position: relative;

  @media(min-width: ${mdScreen}) {
    width: 84%;
    margin: auto;
  }
`
export const FeaturedImage = styled.img`
  width: 100%;

  @media(min-width: ${mdScreen}) {
    max-height: 600px;
  }
`
export const ImageOverlay = styled.div`
  background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0.3) 94%) ;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
export const PostTitle = styled.h2`
  position: relative;
  margin-top: -32px;
  font-size: 4.8rem;
  max-width: 520px;
  @media(min-width: ${mdScreen}) {
    width: 60%;
    margin-left: 0;
    margin-top: -42px;
    font-size: 5.2rem;
  }
`
export const PostExcerpt = styled.p`
  word-break: break-word;
  max-width: 520px;
  @media(min-width: ${mdScreen}) {
    width: 60%;
    margin-left: 12%;
  }
`
export const CardButtonBlock = styled(ButtonBlock)`
  @media(min-width: ${mdScreen}) {
    margin-left: 12%;
  }
`
