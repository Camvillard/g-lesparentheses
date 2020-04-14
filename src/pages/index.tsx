import React from "react"
import { graphql } from "gatsby"

import { HomepageSection } from "../components/containers/homepage-containers"
import NewsletterSection from "../components/newsletter/newsletter.component"
import SEO from "../components/seo"
import InstagramFooter from "../components/instagram/InstagramFooter.component"
import Layout from "../components/Layout/Layout.component"
import LastPost from "../components/Posts/LastPost/LastPost.component"
import SecondPost from "../components/Posts/SecondPost/SecondPost.component"
import ThirdPost from "../components/Posts/ThirdPost/ThirdPost.component"
import FourthPost from "../components/Posts/FourthPost/FourthPost.component"
import PetitesParenthesesCard from "../components/Posts/PetitesParentheses/PetitesParenthesesCard.component"
import ReadMoreButton from "../components/ReadMoreButton/ReadMoreButton.component"
import AboutSection from "../components/AboutSection/AboutSection.component"

interface IProps {
  data: any
  location: any
}
interface IState {}

const BlogIndex = (props: IProps) => {
  const { data } = props
  const { title } = data.site.siteMetadata
  return (
    <Layout location={props.location} pageName={"homepage"} title={title}>
      <SEO title="All posts" />

      <HomepageSection>
        <LastPost />
        <SecondPost />
        <ThirdPost />
        <FourthPost />
      </HomepageSection>

      <ReadMoreButton />

      <AboutSection />

      <HomepageSection>
        <div className="main-container petites-parentheses-container homepage-section">
          <h2 className="section-title column full-width">
            les petites parenthèses
          </h2>
          <p className="description">
            les petites parenthèses, ce sont tous ces petits textes sans
            forcément d'image ni même de ponctuation, mais qui en avaient marre
            de sommeiller dans mes petits carnets.
          </p>

          <div className="petites-parentheses-content grid">
            <PetitesParenthesesCard />
            <PetitesParenthesesCard />
            <PetitesParenthesesCard />
          </div>
        </div>
      </HomepageSection>

      <NewsletterSection />

      <InstagramFooter />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            description
          }
        }
      }
    }
  }
`
