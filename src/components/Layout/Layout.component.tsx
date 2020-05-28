import React, { Fragment, ReactNode } from "react"
import { GlobalStyle } from "../../theme/globalstyle"
import { Header } from "../Header/Header.component"
import { Footer } from "../Footer/Footer.component"
import { Nav } from "../Nav/Nav.component"

type LayoutProps = {
  location: string
  children?: ReactNode
  pageName: string
  title: string
}
const Layout = (props: LayoutProps) => {
  const { children } = props
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Nav />
      <main>{children}</main>
      <Footer />
    </Fragment>
  )
}

export default Layout
