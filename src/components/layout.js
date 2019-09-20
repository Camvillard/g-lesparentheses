import React from "react"
import { Link } from "gatsby"

class Layout extends React.Component {
  render() {
    const {children} = this.props
    console.log(this.props.children)
    return (
      <div>
        <header></header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
