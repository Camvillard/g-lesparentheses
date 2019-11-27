// external librairies
import React from "react"
import { Link, graphql } from "gatsby"

// internal components
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomepagePostCard from "../components/post-cards/homepage-post-card";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />

        <div className="main-container">

          <div className="posts-container">
            <HomepagePostCard postIndex="last post"/>
            <HomepagePostCard postIndex="second post"/>
            <HomepagePostCard postIndex="third post"/>
            <HomepagePostCard postIndex="fourth post"/>
          </div>

          <div className="button-typo read-more">
            <Link to="/">lire plus d'articles</Link>
          </div>


        </div>



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
