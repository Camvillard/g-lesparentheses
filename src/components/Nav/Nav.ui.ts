import styled from "styled-components"
import { Link } from "gatsby"
import { themeColors, themeBreakpoints } from "../../theme/themeVariables"

const { darkGray, forestGreen, oldPink } = themeColors
const { smScreen } = themeBreakpoints

type NavWrapperProps = {
  open: boolean
}

export const NavWrapper = styled.ul<NavWrapperProps>`
  position: fixed;
  bottom: 0vh;
  left: 0;
  right: 0;
  z-index: 100000000;
  display: flex;
  padding: 8px 0;
  margin: 0;
  background: white;
  list-style: none;
  justify-content: space-around;
  @media (min-width: ${smScreen}) {
    right: ${props => (props.open ? 0 : "auto")};
    left: ${props => (props.open ? "auto" : 0)};
    top: 24vh;
    bottom: auto;
    flex-direction: column;
    background: none;
  }
`

export const NavbarListItem = styled.li<NavWrapperProps>`
  color: ${darkGray};
  width: calc(100vw / 3);
  padding: 1px 4px;
  margin: 0 24px;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  a {
    color: ${darkGray};
  }
  @media (min-width: ${smScreen}) {
    width: 72px;
    margin: 4px 0;
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
`

export const MenuWrapper = styled(OpenMenuWrapper)`
  @media (min-width: ${smScreen}) {
    margin-left: 124px;
  }
`

export const SocialWrapper = styled(OpenMenuWrapper)`
  background: white;
`

export const MenuOpenItem = styled.li`
  margin: 0;
  width: 100%;
  position: relative;
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
  margin-right: 16px;
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
  max-width: 310px;
  word-break: break-all;
  @media (min-width: ${smScreen}) {
    max-width: 410px;
  }
`
