import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout.component"

// TODO
// props page
type PostIndexProps = {
  data: any
  location: string
}
const PostIndex = (props: PostIndexProps) => {
  const { data } = props
  const posts = props.data.allMarkdownRemark.edges
  const { title } = data.site.siteMetadata

  return (
    <Layout
      location={""}
      title={"tous les articles"}
      pageName={"tous les articles"}
    >
      <p>articles</p>
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___order], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        author
        description
        siteUrl
      }
    }
  }
`

export default PostIndex
