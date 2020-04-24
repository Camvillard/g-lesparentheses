import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO/SEO.component"
import { GlobalStyle } from "../theme/globalstyle"
import { Header1 } from "../components/Headers/Headers.ui"
import { AboutPageContainer } from "../components/AboutPage/AboutPage.ui"

type AboutProps = {
  data: any
  location: string
}

const AboutPage = (props: AboutProps) => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <AboutPageContainer>
      <GlobalStyle />
      <SEO title="a propos" />
      <Header1 color={"white"}>à propos de moi-même</Header1>

      <p>les infos générales</p>
      <p>les trucs pros</p>
      <p>fun facts</p>
    </AboutPageContainer>
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
