import React from "react"
import { graphql } from "gatsby"

import { HomepageSection } from "../components/Homepage/Homepage.ui"
import InstagramFooter from "../components/instagram/InstagramFooter.component"
import Layout from "../components/Layout/Layout.component"
import LastPost from "../components/Posts/LastPost/LastPost.component"
import SecondPost from "../components/Posts/SecondPost/SecondPost.component"
import ThirdPost from "../components/Posts/ThirdPost/ThirdPost.component"
import FourthPost from "../components/Posts/FourthPost/FourthPost.component"
import ReadMoreButton from "../components/Homepage/ReadMoreButton/ReadMoreButton.component"
import AboutSection from "../components/AboutSection/AboutSection.component"
import SEO from "../components/SEO/SEO.component"
import { PageData } from "../types/Page.type"
import { PetitesParenthesesHomepageSection } from "../components/Homepage/PetitesParentheses/PetitesParenthesesHomepageSection.component"

interface IProps {
  data: PageData
  location: any
}

const BlogIndex = (props: IProps) => {
  const { data } = props
  const { allMarkdownRemark } = data
  const [firstPost, secondPost, thirdPost, fourthPost] = allMarkdownRemark.edges

  const { title } = data.site.siteMetadata
  return (
    <Layout location={props.location} pageName={"homepage"} title={title}>
      <SEO title="All posts" />

      <HomepageSection>
        <LastPost post={firstPost} />
        <SecondPost post={secondPost} />
        <ThirdPost post={thirdPost} />
        <FourthPost post={fourthPost} />
      </HomepageSection>

      <ReadMoreButton />

      <HomepageSection>
        <AboutSection />
      </HomepageSection>

      <PetitesParenthesesHomepageSection />

      {/* <NewsletterSection /> */}

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
    allMarkdownRemark(
      sort: { fields: frontmatter___order, order: DESC }
      limit: 4
      filter: { frontmatter: { categories: { ne: "petites parenthèses" } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            date
            title
            slug
            categories
            image_url
            image_alt
            extrait
          }
        }
      }
    }
  }
`
