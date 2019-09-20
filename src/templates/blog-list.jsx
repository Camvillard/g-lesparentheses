// external librairies
import React from "react"
import { Link, graphql } from "gatsby"

// internal stuff
import Layout from "../components/layout"
import SEO from "../components/seo"

// styles & assets
import "../styles/main.scss"

class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
      {posts.map( post => <h1>{post.node.frontmatter.title}</h1>)}
      </Layout>
    )
  }
}

export const queryuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default BlogList;
