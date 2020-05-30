import styled from "styled-components"
import { Link } from "gatsby"
import {
  themeColors,
  themeBreakpoints,
  themeFonts,
} from "../../theme/themeVariables"

const { darkGray, forestGreen, oldPink } = themeColors
const { smScreen } = themeBreakpoints
const { accentFont } = themeFonts

type NavWrapperProps = {
  open: boolean
}

export const NavWrapper = styled.ul<NavWrapperProps>`
  position: fixed;
  bottom: 2vh;
  right: -1px;
  z-index: 100000000;
  padding: 8px 0;
  margin: 0;
  list-style: none;
  @media (min-width: ${smScreen}) {
    left: -1px;
    right: auto;
    top: 44vh;
    bottom: auto;
  }
`

export const NavbarListItem = styled.li<NavWrapperProps>`
  color: ${darkGray};
  padding: 1px 4px;
  margin: 4px 0;
  border: 1px solid white;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: right;
  // background: ${props => (props.open ? "white" : oldPink)};
  // color: ${props => (props.open ? darkGray : "white")};
  background: white;
  color: ${darkGray};
  font-family: ${accentFont};
  a {
    background: white;
    color: ${darkGray};
    font-family: ${accentFont};
    font-size: 1.2rem;
  }
  &:hover {
    cursor: pointer;
  }
  @media (min-width: ${smScreen}) {
    border: none;
    text-align: left;
  }
`

export const OpenMenuWrapper = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  padding: 0 24px;
  list-style: none;
  background: white;
  @media (min-width: ${smScreen}) {
    padding-left: 124px;
  }
`

export const MenuWrapper = styled(OpenMenuWrapper)``

export const SocialWrapper = styled(OpenMenuWrapper)``

export const MenuOpenItem = styled.li`
  margin: 0;
  width: 100%;
  position: relative;
  a {
    color: ${darkGray};
    font-weight: 800;
    font-size: 4.2rem;
    @media (min-width: ${smScreen}) {
      font-size: 6.4rem;
    }
  }
`

export const MenuOpenLink = styled(Link)`
  color: ${darkGray};
  font-weight: 800;
  font-size: 4.2rem;
  @media (min-width: ${smScreen}) {
    font-size: 6.4rem;
  }
`

export const MenuOpenToggleLink = styled.span`
  color: ${darkGray};
  font-weight: 800;
  font-size: 4.2rem;
  &:hover {
    cursor: pointer;
  }
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

export const CategoryLink = styled(Link)`
  font-size: 2.2rem;
  padding-left: 8px;
  &:first-child {
    padding-left: 0px;
  }
`

export const CategoryCount = styled.span`
  font-size: 0.5em;
  position: relative;
  top: -0.8em;
`

export const CategoriesListWrapper = styled.div`
  position: absolute;
  top: -92px;
  left: 0;
  max-width: 300px;
  word-break: break-all;
  @media (min-width: ${smScreen}) {
    max-width: 410px;
  }
`
