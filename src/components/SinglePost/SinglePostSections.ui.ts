import styled from "styled-components"
import { Header1 } from "../Headers/Headers.ui"
import { themeBreakpoints, themeColors } from "../../theme/themeVariables"
import { Grid, GridElement } from "../Grid/Grid.ui"

const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints
const { darkGray } = themeColors

export const SinglePostBanner = styled(Grid)`
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  width: 92vw;
  @media (min-width: ${mdScreen}) {
    grid-template-rows: auto 1fr;
    width: 100vw;
    background: ${darkGray};
    padding-top: 12vh;
    padding-left: 8vw;
    margin-top: 0;
    height: 100vh;
    position: relative;
    z-index: 10000000000000000;
  }
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
  margin-left: -24px;
`
export const SinglePostTitle = styled(Header1)`
  font-size: 6.2rem;
  margin-top: -0.7em;
  margin-bottom: 0.1em;
  position: relative;
  @media (min-width: ${smScreen}) {
    font-size: 8.4rem;
    margin-top: -0.8em;
  }
  @media (min-width: ${mdScreen}) {
    color: white;
    font-size: 8.6rem;
  }
  @media (min-width: ${lgScreen}) {
    font-size: 10.8rem;
  }
`
export const SinglePostText = styled.p`
  border: 3px solid red;
  margin-bottom: 0.6rem;
`
export const SinglePostArticle = styled.article`
  @media (min-width: ${mdScreen}) {
    margin-top: 32px;
  }
`
