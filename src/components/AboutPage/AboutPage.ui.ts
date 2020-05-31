import styled from "styled-components"
import { WideContainer } from "../MainContainer/MainContainer.ui"
import {
  themeColors,
  themeBreakpoints,
  themeFonts,
} from "../../theme/themeVariables"
import { Header1, Header3 } from "../Headers/Headers.ui"
import { BackIcon } from "../Icons/BackIcon.component"
import { Link } from "gatsby"

const { darkGray, forestGreen, lightPink, oldPink } = themeColors
const { smScreen, mdScreen } = themeBreakpoints
const { accentFont } = themeFonts

export const AboutPageContainer = styled(WideContainer)`
  background: ${darkGray};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 8vw;
  padding-right: 4vw;
`

export const BackHomeIcon = styled(Link)`
  position: fixed;
  top: 24px;
  right: 24px;
`
type AboutPageTitleProps = {
  isUp: string
}

export const AboutPageTitle = styled(Header1)<AboutPageTitleProps>`
  font-size: ${props => (props.isUp ? "2.4rem" : "6.2rem")};
  @media (min-width: ${smScreen}) {
    font-size: ${props => (props.isUp ? "3.2rem" : "8.2rem")};
  }
`

export const AboutContentWrapper = styled.div``

const styleIsUp =
  "position: fixed;top: 0;left: 0vw;right: 0;padding: 6vh 4vw 0 8vw; background: " +
  darkGray

export const AboutContentHeader = styled.div<AboutPageTitleProps>`
  ${props => (props.isUp ? styleIsUp : "")};
`

const styleTopSection =
  "display: flex;justify-content: space-between;align-content: center"

export const TopSection = styled.div<AboutPageTitleProps>`
  ${props => (props.isUp ? styleTopSection : "")};
`

export const AboutSectionTitle = styled(Header3)`
  color: white;
  width: 100%;
  margin-top: 10vh;
  position: relative;
  display: ${(props: ABoutMenuElementProps) =>
    props.displayTitle ? "block" : "none"};
  svg {
    position: absolute;
    top: -20px;
    left: -4vw;
  }
`

export const AboutMenu = styled.div<AboutPageTitleProps>`
  margin: ${props => (props.isUp ? "18px 0 0" : "48px 0")};
  text-align: ${props => (props.isUp ? "right" : "left")};
`

type ABoutMenuElementProps = {
  displayTitle: boolean
}

export const AboutMenuElement = styled.p`
  color: white;
  font-weight: 400;
  margin: 0.3em 0;
  font-size: ${(props: ABoutMenuElementProps) =>
    props.displayTitle ? "1.4rem" : "1.8rem"};
  display: ${(props: ABoutMenuElementProps) =>
    props.displayTitle ? "block" : "none"};
  @media (min-width: ${smScreen}) {
    font-size: ${(props: ABoutMenuElementProps) =>
      props.displayTitle ? "2.2rem" : "3.6rem"};
  }
  @media (min-width: ${smScreen}) {
  }
`

type AboutSectionContentProps = {
  displaySection: boolean
}

export const AboutSectionContent = styled.div<AboutSectionContentProps>`
  display: ${props => (props.displaySection ? "block" : "none")};
  margin-top: ${props => (props.displaySection ? "38vh" : "")};
  color: white;
  @media (min-width: ${smScreen}) {
    margin-top: ${props => (props.displaySection ? "4vh" : "")};
  }
`

export const AboutSectionParagraph = styled.p`
  color: white;
`

export const CloseAboutIcon = styled.div``
