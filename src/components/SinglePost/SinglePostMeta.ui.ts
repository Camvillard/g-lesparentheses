import styled from "styled-components"
import { themeColors, themeBreakpoints } from "../../theme/themeVariables"
import { MainContainer } from "../Containers/MainContainer.ui"
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

export const SinglePostMetaFooter = styled.div`
  margin: 32px auto;
  padding: 12px 0;
  @media (min-width: ${mdScreen}) {
    width: calc(84vw - 5%);
  }
`

export const MetaGroup = styled.div`
  margin: 4px 0;
`
export const MetaContent = styled.span`
  color: ${gray};
  font-size: 1.2rem;
  font-weight: 300;
`
export const MetaTitle = styled.p`
  font-weight: 600;
  margin-bottom: 0;
  margin-top: 0;
  font-size: 1.2rem;
`
