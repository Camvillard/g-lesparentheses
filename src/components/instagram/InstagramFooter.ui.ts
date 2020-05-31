import styled from "styled-components"
import { themeColors, themeBreakpoints } from "../../theme/themeVariables"
import { Flexbox } from "../Flexbox/Flexbox.ui"
import { Grid } from "../Grid/Grid.ui"
import { Header3 } from "../Headers/Headers.ui"
import { HomepageSectionTitle } from "../Homepage/Homepage.ui"

const {
  lightPink,
  oldPink,
  forestGreen,
  lightGray,
  mediumGray,
  gray,
  darkGray,
} = themeColors

const { smScreen, mdScreen, lgScreen } = themeBreakpoints

export const InstagramGrid = styled(Grid)`
  @media (min-width: ${smScreen}) {
    padding: 0 4vw;
  }
  @media (min-width: ${mdScreen}) {
    margin-top: 124px;
  }
`

export const InstagramContainer = styled(Grid)`
  align-items: end;
  @media (min-width: ${smScreen}) {
    grid-column: 2 / span 1;
  }

  @media (min-width: ${mdScreen}) {
  }

  @media (min-width: ${lgScreen}) {
  }
`

export const InstagramTitle = styled(HomepageSectionTitle)`
  margin-left: 4vw;
  @media (min-width: ${smScreen}) {
    line-height: 1;
    margin-left: 0;
    text-align: right;
  }
  @media (min-width: ${mdScreen}) {
    margin-left: 0;
    text-align: right;
  }
`
export const InstagramImages = styled(Flexbox)`
  flex-wrap: wrap;

  a {
    width: 48%;
    margin: 1rem 1%;
  }

  @media (min-width: ${smScreen}) {
    margin-left: 32px;
    a {
      width: 31%;
    }
  }

  @media (min-width: ${mdScreen}) {
    margin-left: 40px;
  }

  @media (min-width: ${lgScreen}) {
    margin-left: 64px;
  }
`

export const InstagramPic = styled.img`
  width: 100%;
  border: 0px solid ${lightPink};
  @media (min-width: ${mdScreen}) {
    border: none;
  }
`
