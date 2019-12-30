import React from "react"
import { Link, graphql } from "gatsby"

// internal stuff
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  IPostTemplateProps,
  IPostTemplateState,
} from "./models/blog-post.model"

// styles & assets
import "../styles/main.scss"

class PostTemplate extends React.Component<
  IPostTemplateProps,
  IPostTemplateState
> {
  public render() {
    console.log("props", this.props)
    console.log("state", this.state)
    const post = this.props.data.markdownRemark
    console.log("post", post)
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        pageName="single-post"
      >
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`
