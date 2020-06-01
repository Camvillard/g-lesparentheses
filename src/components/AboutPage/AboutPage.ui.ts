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
  padding-bottom: 8vh;
  padding-left: 8vw;
  padding-right: 4vw;
  @media (min-width: ${smScreen}) {
    padding-left: 10vw;
    padding-right: 28vw;
  }
  @media (min-width: ${smScreen}) {
    padding-left: 12vw;
    padding-right: 32vw;
  }
`

export const BackHomeIcon = styled(Link)`
  position: fixed;
  top: 24px;
  right: 24px;
`

export const AboutPageTitle = styled(Header1)`
  font-size: 6.2rem;
  @media (min-width: ${smScreen}) {
    font-size: 8.2rem;
  }
`

export const AboutContentWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const AboutMenu = styled.ul`
  list-style: none;
  padding: 0;
`

export const AboutMenuElement = styled.li`
  a {
    color: white;
    font-weight: 400;
    margin: 0.3em 0;
    font-size: 1.8rem;
    @media (min-width: ${smScreen}) {
      font-size: 3.6rem;
    }
    @media (min-width: ${smScreen}) {
    }
  }
`

export const AboutSectionContent = styled.div`
  min-height: 100vh;
  margin-top: 88px;
  padding-top: 48px;
  color: white;
  @media (min-width: ${smScreen}) {
  }
`
export const AboutSectionTitle = styled.h3`
  margin-bottom: 24px;
  span {
    color: white;
    border-bottom: 3px solid white;
  }
`

export const AboutSectionParagraph = styled.p`
  color: white;
`

export const CloseAboutIcon = styled.div``

type JumpDirection = "up" | "down"

type JumpSectionProps = {
  direction: JumpDirection
}
export const JumpSection = styled.a<JumpSectionProps>`
  display: block;
  margin-top: 32px;
  color: white;

  &:last-child {
    margin-top: 16px;
  }

  svg {
    transform: rotate(
      ${props => (props.direction === "up" ? "90deg" : "-90deg")}
    );
  }

  span {
    margin-left: 16px;
  }
`
