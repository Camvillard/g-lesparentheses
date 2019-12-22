import React from "react"
import { Link } from "gatsby"

import SEO from "./seo"
import Navbar from "./navbar"
import Header from "./header"
import Footer from "./footer"

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

          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

export default Layout
