import styled from 'styled-components';
import {
  themeColors,
  themeBreakpoints,
  themeFonts
} from '../../theme/style-variables';

const {
  oldPink,
  darkGray
} = themeColors

const { europaFont } = themeFonts

export const NavbarContainer  = styled.ul`
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
    color: ${darkGray}
  }
`

export const MenuOpen = styled.div`
  position: fixed;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(200,200,200);
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

export const MenuItem = styled.p`
  a {
    color: white;
    font-family: ${europaFont};
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