import styled from "styled-components"
import { WideContainer } from "../Containers/MainContainer.ui"
import { themeColors } from "../../theme/themeVariables"
import { Header1, Header3 } from "../Headers/Headers.ui"
import { BackIcon } from "../Icons/BackIcon.component"
import { Link } from "gatsby"

const { darkGray } = themeColors

type AboutPageTitleProps = {
  isUp: string
}

export const BackHomeIcon = styled(Link)`
  position: fixed;
  top: 24px;
  right: 24px;
`

export const AboutPageTitle = styled(Header1)`
  font-size: ${(props: AboutPageTitleProps) =>
    props.isUp ? "2.4rem" : "6.2rem"};
  max-width: ${(props: AboutPageTitleProps) =>
    props.isUp ? "120px" : "320px"};
`

export const AboutPageContainer = styled(WideContainer)`
  background: ${darkGray};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 8vw;
  padding-right: 4vw;
`

export const AboutContentWrapper = styled.div``

const styleIsUp =
  "position: fixed;top: 0;left: 0vw;right: 0;padding: 6vh 4vw 0 8vw; background: " +
  darkGray

export const AboutContentHeader = styled.div`
  ${(props: AboutPageTitleProps) => (props.isUp ? styleIsUp : "")};
`

const styleTopSection =
  "display: flex;justify-content: space-between;align-content: center"
export const TopSection = styled.div`
  ${(props: AboutPageTitleProps) => (props.isUp ? styleTopSection : "")};
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

export const AboutMenu = styled.div`
  margin: ${(props: AboutPageTitleProps) =>
    props.isUp ? "18px 0 0" : "48px 0"};
  text-align: ${(props: AboutPageTitleProps) =>
    props.isUp ? "right" : "left"};
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
`

type AboutSectionContentProps = {
  displaySection: boolean
}

export const AboutSectionContent = styled.div`
  display: ${(props: AboutSectionContentProps) =>
    props.displaySection ? "block" : "none"};
  margin-top: ${(props: AboutSectionContentProps) =>
    props.displaySection ? "38vh" : ""};
  color: white;
`

export const AboutSectionParagraph = styled.p`
  color: white;
`

export const CloseAboutIcon = styled.div``
