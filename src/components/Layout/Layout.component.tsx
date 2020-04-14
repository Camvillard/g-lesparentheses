import React, { Fragment, ReactNode } from "react"
import { GlobalStyle } from "../../theme/globalstyle"

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
      <main>{children}</main>
    </Fragment>
  )
}

export default Layout
