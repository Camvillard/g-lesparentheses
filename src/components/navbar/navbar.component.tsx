import { graphql, Link } from "gatsby"
import React, { Fragment } from "react"
import { BlobMenu, BlobSocial } from "./blobs"
// import BlobMenu from "./blob_3.svg"
// import BlobSocial from "./blob_2.svg"
import { INavbarProps, INavbarState } from "./navbar.model"
import {
  BlobMenuContainer,
  BlobSocialContainer,
  CategoriesMenu,
  CloseMenu,
  MenuContainer,
  MenuItem,
  MenuOpen,
  NavbarContainer,
  NavbarListItem,
  SocialMenuContainer,
  SocialMenuItem,
} from "./navbar.style"

const BlogMenu = props => {
  const { toggleMenu } = props
  return (
    <MenuOpen>
      <MenuContainer>
        <CloseMenu onClick={toggleMenu}>fermer</CloseMenu>
        <CategoriesMenu>
          <MenuItem>
            <Link to="#">histoires</Link>
          </MenuItem>
          <MenuItem>
            <Link to="#">vie</Link>
          </MenuItem>
          <MenuItem>
            <Link to="#">voyages</Link>
          </MenuItem>
          <MenuItem>
            <Link to="#">food</Link>
          </MenuItem>
          <MenuItem>
            <Link to="#">et caetera</Link>
          </MenuItem>
        </CategoriesMenu>
        <MenuItem>
          <Link to="#">à propos</Link>
        </MenuItem>
        <MenuItem>
          <Link to="#">portfolio</Link>
        </MenuItem>
        <MenuItem>
          <Link to="#">e-shop</Link>
        </MenuItem>
      </MenuContainer>
      <BlobMenuContainer>
        <BlobMenu />
      </BlobMenuContainer>
    </MenuOpen>
  )
}

const SocialMenu = props => {
  const { toggleSocial } = props
  return (
    <MenuOpen>
      <SocialMenuContainer>
        <CloseMenu onClick={toggleSocial}>fermer</CloseMenu>
        <MenuItem>
          <Link to="#">instagram</Link>
        </MenuItem>
        <MenuItem>
          <Link to="#">twitter</Link>
        </MenuItem>
        <MenuItem>
          <Link to="#">linkedin</Link>
        </MenuItem>
        <MenuItem>
          <Link to="#">behance</Link>
        </MenuItem>
        <MenuItem>
          <Link to="#">dribble</Link>
        </MenuItem>
      </SocialMenuContainer>
      <BlobSocialContainer>
        <BlobSocial />
      </BlobSocialContainer>
    </MenuOpen>
  )
}

class Navbar extends React.Component<INavbarProps, INavbarState> {
  constructor(props) {
    super(props)
    this.state = {
      menuIsOpen: false,
      socialIsOpen: false,
    }
  }

  toggleMenu = () => {
    console.log("salut")
    this.setState({
      menuIsOpen: !this.state.menuIsOpen,
    })
  }

  toggleSocial = () => {
    console.log("hello")
    this.setState({
      socialIsOpen: !this.state.socialIsOpen,
    })
  }

  render() {
    const { menuIsOpen, socialIsOpen } = this.state
    return (
      <React.Fragment>
        {menuIsOpen && <BlogMenu toggleMenu={this.toggleMenu} />}
        {socialIsOpen && <SocialMenu toggleSocial={this.toggleSocial} />}
        <NavbarContainer>
          <NavbarListItem onClick={this.toggleMenu}>menu</NavbarListItem>
          <NavbarListItem onClick={this.toggleSocial}>social</NavbarListItem>
          <NavbarListItem>
            <Link to="#">contact</Link>
          </NavbarListItem>
        </NavbarContainer>
      </React.Fragment>
    )
  }
}

export default Navbar

