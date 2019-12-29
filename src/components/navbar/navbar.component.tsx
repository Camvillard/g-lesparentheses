
import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
// import BlobMenu from "./blob_3.svg"
// import BlobSocial from "./blob_2.svg"
import { INavbarState, INavbarProps } from "./navbar.model"
import { NavbarContainer, NavbarListItem, MenuContainer, MenuItem, BlobMenuContainer, MenuOpen, CloseMenu } from "./navbar.style"
import { BlobMenu } from "./blobs"


const BlogMenu = (props) => {
  const { toggleMenu} = props
  return(
    <MenuOpen>
      <MenuContainer>
        <CloseMenu onClick={toggleMenu}>fermer</CloseMenu>
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
        <MenuItem>
          <Link to="#">à propos</Link>
        </MenuItem>
        <MenuItem>
          <Link to="#">portfolio</Link>
        </MenuItem>
        <MenuItem>
          <Link to="#">e-shop</Link>
        </MenuItem>
        <BlobMenuContainer>
          <BlobMenu />
        </BlobMenuContainer>

        {/* <div className="menu-open"> */}
          {/* <div className="columns blog-menu"> */}
            {/* <ul className="sub-navigation is-one-half">
              <li className="sub-nav-item"></li>
              <li className="sub-nav-item"><Link to="#">vie</Link></li>
              <li className="sub-nav-item"><Link to="#">voyages</Link></li>
              <li className="sub-nav-item"><Link to="#">food</Link></li>
              <li className="sub-nav-item"><Link to="#">et caetera</Link></li>
            </ul> */}
            {/* <ul className="sub-navigation is-one-half">
              <li className="sub-nav-item"><Link to="#">à propos</Link></li>
              <li className="sub-nav-item"><Link to="#">- portfolio</Link></li>
              <li className="sub-nav-item"><Link to="#">- e-shop</Link></li>
            </ul> */}
          {/* </div> */}
          {/* <BlobMenu id="blob-menu" className="blobs fixed"/> */}
        {/* </div> */}
      </MenuContainer>
    </MenuOpen>
  )
}

const SocialMenu = () => {
  return(
    <React.Fragment>
      <div className="columns blog-menu menu-open">
        <ul className="sub-navigation is-one-half">
          <li className="sub-nav-item"><Link to="#">instagram</Link></li>
          <li className="sub-nav-item"><Link to="#">twitter</Link></li>
          <li className="sub-nav-item"><Link to="#">linkedin</Link></li>
          <li className="sub-nav-item"><Link to="#">behance</Link></li>
          <li className="sub-nav-item"><Link to="#">dribbble</Link></li>
        </ul>
        {/* <BlobSocial id="blob-social" className="blobs fixed"/> */}
      </div>
    </React.Fragment>
  )
}

class Navbar extends React.Component<INavbarProps, INavbarState> {
  constructor(props){
    super(props)
    this.state = {
      menuIsOpen: false,
      socialIsOpen: false
    }
  };

  toggleMenu = (e) => {
    // e.target.classList.toggle('active');
    this.setState({
      socialIsOpen: false,
      menuIsOpen: !this.state.menuIsOpen
    })
  };

  toggleSocial= (e) => {
    // e.target.classList.toggle('active');
    this.setState({
      menuIsOpen: false,
      socialIsOpen: !this.state.socialIsOpen
    })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.menuIsOpen ? <BlogMenu toggleMenu={this.toggleMenu} /> : <Fragment />}
        {this.state.socialIsOpen ? <SocialMenu /> : <Fragment />}
        <NavbarContainer>

          <NavbarListItem onClick={this.toggleMenu}>
            menu
            {/* {this.state.menuIsOpen ? 'fermer' : 'menu'} */}
          </NavbarListItem>
          <NavbarListItem onClick={this.toggleSocial}>
            {this.state.socialIsOpen ? 'fermer' : 'social'}
          </NavbarListItem>
          <NavbarListItem>
            <Link to="#">contact</Link>
          </NavbarListItem>

        </NavbarContainer>

      </React.Fragment>
    )
  }
}

export default Navbar

