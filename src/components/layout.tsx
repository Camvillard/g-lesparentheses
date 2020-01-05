import React from "react"
import { Link } from "gatsby"

import SEO from "./seo"
import Navbar from "./navbar/navbar.component"
import Header from "./header"
import Footer from "./footer"
import { GlobalStyle } from "../theme/globalstyle"
import Logo from "./logo/logo"

// styles & assets


class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <React.Fragment>
        <GlobalStyle />
        <Logo />
        <Navbar />

        <main>{children}</main>

        <Footer />
      </React.Fragment>
    )
  }
}

export default Layout
