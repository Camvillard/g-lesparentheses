import styled from "styled-components"
import {
  themeColors,
  themeBreakpoints,
  themeFonts,
} from "../../theme/themeVariables"

const { oldPink, darkGray } = themeColors

const { $bodyFont } = themeFonts

export const NavbarContainer = styled.ul`
  position: fixed;
  top: 18vh;
  left: 0px;
  z-index: 1000000;
  margin: 0;
  padding-left: 0;
  list-style-type: none;
`

export const NavbarListItem = styled.li`
  background: ${oldPink};
  color: ${darkGray};
  padding: 1px 4px;
  a {
    color: ${darkGray};
  }
`

export const MenuOpen = styled.div`
  position: fixed;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 10000000000000;
`

export const MenuContainer = styled.div`
  position: fixed;
  bottom: 16px;
  left: 68px;
`

export const CloseMenu = styled.p`
  color: white;
`

export const CategoriesMenu = styled.div`
  margin-bottom: 48px;
`

export const MenuItem = styled.p`
  margin-bottom: 2px;
  a {
    color: white;
    font-family: ${$bodyFont};
    font-weight: 700;
    font-size: 3.2rem;
  }
`

export const BlobMenuContainer = styled.div`
  bottom: -36px;
  position: fixed;
  width: 570px;
  left: -80px;
  z-index: -1;
`

export const SocialMenuContainer = styled.div`
  position: fixed;
  text-align: right;
  bottom: 156px;
  right: 88px;
`

export const SocialMenuItem = styled.p`
  a {
    color: red;
  }
`

export const BlobSocialContainer = styled.div`
  top: 130px;
  position: fixed;
  width: 440px;
  left: 12px;
  z-index: -1;
`
