import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout.component"
import SEO from "../components/SEO/SEO.component"

type AboutProps = {
  data: any
  location: string
}

const AboutPage = (props: AboutProps) => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle} pageName={"à propos"}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
