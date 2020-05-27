import React from "react"
import { graphql } from "gatsby"

import { HomepageSection } from "../components/Containers/HomepageContainers.component"
import NewsletterSection from "../components/newsletter/newsletter.component"
import InstagramFooter from "../components/instagram/InstagramFooter.component"
import Layout from "../components/Layout/Layout.component"
import LastPost from "../components/Posts/LastPost/LastPost.component"
import SecondPost from "../components/Posts/SecondPost/SecondPost.component"
import ThirdPost from "../components/Posts/ThirdPost/ThirdPost.component"
import FourthPost from "../components/Posts/FourthPost/FourthPost.component"
import PetitesParenthesesCard from "../components/Posts/PetitesParentheses/PetitesParenthesesCard.component"
import ReadMoreButton from "../components/ReadMoreButton/ReadMoreButton.component"
import AboutSection from "../components/AboutSection/AboutSection.component"
import SEO from "../components/SEO/SEO.component"
import { Nav } from "../components/Nav/Nav.component"
import { HomepageSectionTitle } from "../components/Headers/Headers.ui"
import { Grid } from "../components/Grid/Grid.ui"
import { PostTemplateData } from "../types/BlogPost.type"
import { PageData } from "../types/Page.type"

interface IProps {
  data: PageData
  location: any
}

const BlogIndex = (props: IProps) => {
  console.log(props)

  const { data } = props
  const { allMarkdownRemark, site } = data
  console.log(allMarkdownRemark)
  const [firstPost, secondPost, thirdPost, fourthPost] = allMarkdownRemark.edges

  const { title } = data.site.siteMetadata
  return (
    <Layout location={props.location} pageName={"homepage"} title={title}>
      <SEO title="All posts" />

      <Nav />

      <HomepageSection>
        <LastPost post={fourthPost} />
        <SecondPost />
        <ThirdPost />
        <FourthPost />
      </HomepageSection>

      <ReadMoreButton />

      <HomepageSection>
        <AboutSection />
      </HomepageSection>

      <HomepageSection>
        <HomepageSectionTitle>les petites parenthèses</HomepageSectionTitle>
        <p className="description">
          les petites parenthèses, ce sont tous ces petits textes sans forcément
          d'image ni même de ponctuation, mais qui en avaient marre de
          sommeiller dans mes petits carnets.
        </p>

        <Grid
          columns={{
            default: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
            lg: "repeat(4, 1fr)",
          }}
        >
          <PetitesParenthesesCard />
          <PetitesParenthesesCard />
          <PetitesParenthesesCard />
        </Grid>
      </HomepageSection>

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
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
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
          }
        }
      }
    }
  }
`
