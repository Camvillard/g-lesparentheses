import styled from "styled-components"
import { Header1 } from "../Headers/Headers.ui"
import { themeBreakpoints, themeColors } from "../../theme/themeVariables"
import { Grid, GridElement } from "../Grid/Grid.ui"

const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints
const { darkGray } = themeColors

export const SinglePostBanner = styled(Grid)`
  grid-template-rows: auto 1fr;
  width: 100%;
  background: ${darkGray};
  padding: 3vh;
  margin-top: 0;
  min-height: 100vh;
  position: relative;
  z-index: 1000;
`

export const SinglePostThumnbailWrapper = styled(GridElement)`
  position: relative;
`

export const SinglePostFeaturedImageOverlay = styled.div`
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4));
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`

export const SinglePostThumbnail = styled.img`
  display: block;
`

export const SinglePostTitleWrapper = styled(GridElement)`
  margin-top: 24px;
  @media (min-width: ${smScreen}) {
    margin-left: -24px;
  }
`
export const SinglePostTitle = styled(Header1)`
  font-size: 5.2rem;
  margin-bottom: 0.1em;
  position: relative;
  color: white;
  @media (min-width: ${smScreen}) {
    font-size: 8.4rem;
    margin-top: -0.8em;
  }
  @media (min-width: ${mdScreen}) {
    font-size: 8.6rem;
  }
  @media (min-width: ${lgScreen}) {
    margin-top: -1.2em;
    font-size: 10.2rem;
  }
`
export const SinglePostText = styled.p`
  border: 3px solid red;
  margin-bottom: 0.6rem;
`
export const SinglePostArticle = styled.article`
  margin-top: 24px;
  @media (min-width: ${mdScreen}) {
    margin-top: 32px;
  }
`
