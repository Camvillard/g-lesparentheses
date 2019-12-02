// external librairies
import React from "react"
import { Link } from "gatsby"

// internal stuff
import SEO from "./seo"
import Navbar from "./navbar"
import Header from "./header"

// styles & assets


class Layout extends React.Component {
  render() {
    const {children, pageName } = this.props
    return (
      <React.Fragment>
        <div className={`page ${pageName}`}>
          <Header />
          <Navbar />

          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </React.Fragment>
    )
  }
}

export default Layout
