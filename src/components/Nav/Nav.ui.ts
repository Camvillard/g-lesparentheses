import styled from "styled-components"
import { Link } from "gatsby"
import {
  themeColors,
  themeBreakpoints,
  themeFonts,
} from "../../theme/themeVariables"

const { darkGray, forestGreen, lightPink, oldPink } = themeColors
const { smScreen, mdScreen } = themeBreakpoints
const { accentFont } = themeFonts

type FooterNavWrapperProps = {
  isOpen: boolean
}
export const FooterNavWrapper = styled.div<FooterNavWrapperProps>`
  border-top: ${props => (props.isOpen ? "none" : "1px solid" + darkGray)};
  display: grid;
  grid-template-columns: 3fr 2fr;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: ${props => (props.isOpen ? "24px" : "8px")};
  position: fixed;
  z-index: ${props => (props.isOpen ? "1001" : "100")};
  bottom: 0;
  left: 0;
  right: 0;
  height: ${props => (props.isOpen ? "100vh" : "auto")};
  background: ${props => (props.isOpen ? oldPink : "white")};
  justify-items: start;
  align-items: ${props => (props.isOpen ? "start" : "center")};
  @media (min-width: ${smScreen}) {
    padding-left: 32px;
    padding-right: 32px;
    padding-top: ${props => (props.isOpen ? "32px" : "8px")};
  }
`

export const ToggleMenu = styled.div`
  margin-right: 0;
  justify-self: end;
`

export const MenuWrapper = styled.ul`
  grid-column: 1 / span 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  padding: 0 16px;
  list-style: none;
  @media (min-width: ${smScreen}) {
    padding-left: 124px;
  }
`

export const MenuItem = styled.li`
  margin: 0;
  width: 100%;
  position: relative;
  color: ${darkGray};
  font-weight: 800;
  font-size: 4.2rem;
  @media (min-width: ${smScreen}) {
    font-size: 6.4rem;
  }
  a {
    color: ${darkGray};
    font-weight: 800;
    font-size: 4.2rem;
    @media (min-width: ${smScreen}) {
      font-size: 6.4rem;
    }
  }
`

export const MenuLink = styled(Link)`
  color: ${darkGray};
  font-weight: 800;
  font-size: 4.2rem;
  @media (min-width: ${smScreen}) {
    font-size: 6.4rem;
  }
`

type MenuExtLinkProps = {
  color?: string
}

export const MenuOpenExtLink = styled.a<MenuExtLinkProps>`
  color: ${darkGray};
  font-weight: 800;
  font-size: 4.2rem;
  @media (min-width: ${smScreen}) {
    font-size: 6.4rem;
  }
`

export const CategoriesListWrapper = styled.div`
  width: 100%;
  // max-width: 300px;
  word-break: break-all;
  @media (min-width: ${smScreen}) {
    // max-width: 410px;
  }
`

export const CategoryLink = styled(Link)`
  font-size: 2.2rem !important;
  line-height: 1 !important;
  margin: 0 !important;
  padding-right: 8px;
  color: ${darkGray};
  &:last-child {
    padding-right: 0px;
  }
`

export const CategoryCount = styled.span`
  font-size: 0.5em;
  position: relative;
  top: -0.8em;
`

export const SocialMenuWrapper = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`
export const SocialMenuWrapperItem = styled.li`
  margin: 0;
  a {
    font-size: 2.2rem;
    font-weight: 700;
    color: ${darkGray};
    padding: 0;
  }
`
