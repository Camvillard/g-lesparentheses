// external librairies
import React from "react"
import { Link } from "gatsby"

// internal stuff
import SEO from "./seo"
import Navbar from "./navbar"

// styles & assets


class Layout extends React.Component {
  render() {
    const {children} = this.props
    console.log(this.props.children)
    return (
      <React.Fragment>
        <Navbar />

        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </React.Fragment>
    )
  }
}

export default Layout
