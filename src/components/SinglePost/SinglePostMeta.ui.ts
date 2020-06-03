import styled from "styled-components"
import {
  themeColors,
  themeBreakpoints,
  themeFonts,
} from "../../theme/themeVariables"
import { MainContainer } from "../MainContainer/MainContainer.ui"
import { Accent } from "../../theme/globalstyle"
const {
  darkGray,
  oldPink,
  lightPink,
  forestGreen,
  mediumGray,
  gray,
} = themeColors
const { mdScreen } = themeBreakpoints
const { accentFont } = themeFonts

export const SinglePostMetaFooter = styled.div`
  margin: 8px auto;
  padding: 8px 0;
  @media (min-width: ${mdScreen}) {
    padding: 0;
  }
`

export const MetaGroup = styled.div`
  margin: 4px 0;
`
export const MetaContent = styled.span`
  color: white;
  font-size: 1.2rem;
  font-weight: 300;
  font-family: ${accentFont};
  @media (min-width: ${mdScreen}) {
    color: white;
  }
`
export const MetaTitle = styled.p`
  color: white;
  font-weight: 600;
  margin-bottom: 0;
  margin-top: 0;
  font-size: 1.2rem;
  @media (min-width: ${mdScreen}) {
    color: white;
  }
`
