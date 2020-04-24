import styled from "styled-components"
import { Link } from "gatsby"
import { themeColors } from "../../theme/themeVariables"

const { darkGray, forestGreen } = themeColors

type NavWrapperProps = {
  open: boolean
}

export const NavWrapper = styled.ul`
  position: fixed;
  bottom: 0vh;
  left: 0;
  right: 0;
  z-index: 100000000;
  display: flex;
  padding: 8px 0;
  margin: 0;
  background: ${(props: NavWrapperProps) =>
    props.open ? "none" : forestGreen};
  list-style: none;
  justify-content: space-around;
`

export const NavbarListItem = styled.li`
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

export const MenuWrapper = styled(OpenMenuWrapper)``

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
`

export const MenuOpenToggleLink = styled.span`
  color: ${darkGray};
  font-weight: 800;
  font-size: 4.2rem;
`

type MenuExtLinkProps = {
  color?: string
}
export const MenuOpenExtLink = styled.a`
  color: ${(props: MenuExtLinkProps) => props.color || darkGray};
  font-weight: 800;
  font-size: 4.2rem;
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
`