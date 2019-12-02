// external librairies
import React from "react"
import { Link, graphql } from "gatsby"


// internal stuff
import BlobMenu from "../images/blob_3.svg"
import BlobSocial from "../images/blob_2.svg"

// styles & assets
import "../styles/main.scss"

const BlogMenu = () => {
  return(
    <div className="menu-open">
      <div className="columns blog-menu">
        <ul className="sub-navigation is-one-half">
          <li className="sub-nav-item"><Link to="#">histoires</Link></li>
          <li className="sub-nav-item"><Link to="#">vie</Link></li>
          <li className="sub-nav-item"><Link to="#">voyages</Link></li>
          <li className="sub-nav-item"><Link to="#">food</Link></li>
          <li className="sub-nav-item"><Link to="#">et caetera</Link></li>
        </ul>
        <ul className="sub-navigation is-one-half">
          <li className="sub-nav-item"><Link to="#">à propos</Link></li>
          <li className="sub-nav-item"><Link to="#">- portfolio</Link></li>
          <li className="sub-nav-item"><Link to="#">- e-shop</Link></li>
        </ul>
      </div>
      <BlobMenu id="blob-menu" className="blobs fixed"/>
    </div>
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
        <BlobSocial id="blob-social" className="blobs fixed"/>
      </div>
    </React.Fragment>
  )
}

class Navbar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      menuIsOpen: false,
      socialIsOpen: false
    }
  };

  showMenu = (e) => {
    e.target.classList.toggle('active');
    this.setState({
      menuIsOpen: !this.state.menuIsOpen
    })
  };

  showSocial= (e) => {
    e.target.classList.toggle('active');
    this.setState({
      socialIsOpen: !this.state.socialIsOpen
    })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.menuIsOpen ? <BlogMenu /> : ""}
        {this.state.socialIsOpen ? <SocialMenu /> : ""}
        <ul className="main-navigation">
          <li className="nav-item"  id="show-menu" onClick={this.showMenu}>
            {this.state.menuIsOpen ? 'fermer' : 'menu'}
          </li>
          <li className="nav-item" id="show-social" onClick={this.showSocial}>
            {this.state.socialIsOpen ? 'fermer' : 'social'}
          </li>
          <li className="nav-item">
            <Link to="#">contact</Link>
          </li>
        </ul>

      </React.Fragment>
    )
  }
}

export default Navbar

