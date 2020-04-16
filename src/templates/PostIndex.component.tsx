import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout.component"

// TODO
// props page
type PostIndexProps = {
  data: any
  location: string
}
export const PostIndex = (props: PostIndexProps) => {
  const { data } = props
  const posts: any[] = props.data.allMarkdownRemark.edges
  const { title } = data.site.siteMetadata
  return (
    <Layout location={props.location} title={title} pageName={"à propos"}>
      {posts.map(post => (
        <h1>{post.node.frontmatter.title}</h1>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
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
