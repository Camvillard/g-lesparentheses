// external librairies
import React from "react"
import { graphql } from "gatsby"

// internal stuff
import Layout from "../components/layout"
import SEO from "../components/seo"

// styles & assets
import "../styles/main.scss"


class AboutPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <React.Fragment>
      <SEO title="à propos" />
        <div id="about-page" className="page">
          about
        </div>
      </React.Fragment>
    )
  }
}


export const pageQuery = graphql`
  query aboutPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`
export default AboutPage
