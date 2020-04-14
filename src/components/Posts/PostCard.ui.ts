import styled from "styled-components"
import { Accent } from "../../theme/globalstyle"
import { themeColors, themeBreakpoints } from "../../theme/themeVariables"
import { Grid } from "../Grid/Grid.ui"
import { ButtonSimple } from "../Buttons/Buttons.ui"

const { mediumGray } = themeColors

const { mdScreen } = themeBreakpoints

export const PostContainer = styled(Grid)`
  margin: 24px auto 64px;
`

export const CardMeta = styled(Accent)`
  font-size: 1.2rem;
  font-weight: 300;
  color: ${mediumGray};
  margin: 0;
  grid-column: 1 / span 4;
  text-align: right;
`

export const FeaturedImageContainer = styled.div`
  position: relative;
  grid-column: 1 / span 4;

  @media (min-width: ${mdScreen}) {
    width: 100%;
    margin: auto;
  }
`

export const FeaturedImage = styled.img`
  width: 100%;
  @media (min-width: ${mdScreen}) {
    max-height: 600px;
  }
`

export const FeturedImageOverlay = styled.div`
  background: linear-gradient(
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.4)
  );
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
export const PostTitle = styled.h2`
  position: relative;
  margin-top: -32px;
  max-width: 520px;
  line-height: 1.05;
  @media (min-width: ${mdScreen}) {
    width: 60%;
    margin-left: 0;
    margin-top: -42px;
    font-size: 5.2rem;
  }
`
export const PostExcerpt = styled.p`
  word-break: break-word;
  grid-column: 1 / span 4;
  max-width: 520px;
`
export const MoreButton = styled(ButtonSimple)`
  display: block;
  grid-column: 1 / span 4;
`
