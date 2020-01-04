import { graphql } from "gatsby"
import React from "react"

import AboutContainer from "../components/about-container"
import { ButtonReadMore } from "../components/buttons/button-more"
import { HomepageSection } from "../components/containers/homepage-containers"
import Layout from "../components/layout"
import NewsletterSection from "../components/newsletter/newsletter.component"
import FourthPostCard from "../components/post-cards/fourth-post-card"
import LastPostCard from "../components/post-cards/last-post-card"
import PetitesParenthesesCard from "../components/post-cards/petites-parentheses-card"
import SecondPostCard from "../components/post-cards/second-post-card"
import ThirdPostCard from "../components/post-cards/third-post-card"
import SEO from "../components/seo"

interface IProps {
  data: any
}
interface IState {}

class BlogIndex extends React.Component<IProps, IState> {
  public render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout
        location={this.props.location}
        pageName={"homepage"}
        title={siteTitle}
      >
        <SEO title="All posts" />

        <HomepageSection>
          <LastPostCard />
          <SecondPostCard />
          <ThirdPostCard />
          <FourthPostCard />
        </HomepageSection>

        <ButtonReadMore />

        <AboutContainer />

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

        <NewsletterSection />


      </Layout>
    )
  }


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
