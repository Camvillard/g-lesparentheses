import React from "react"
import { Link, graphql } from "gatsby"

// styles & assets
import "../styles/main.scss"
import Layout from "../components/Layout/Layout.component"
import { SinglePostTitle } from "../components/SinglePost/SinglePostSections.ui"
import SEO from "../components/SEO/SEO.component"

type PostTemplateProps = {
  location: string
  data: any
  pageContext: any
}
const PostTemplate = (props: PostTemplateProps) => {
  const { data } = props

  const { location, pageContext } = props
  const { siteTitle } = data.site.siteMetadata
  const { frontmatter, html, htmlAst, excerpt, id } = data.markdownRemark
  const { title } = frontmatter
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle} pageName="single-post">
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || excerpt}
      />
      <SinglePostTitle>{title}</SinglePostTitle>
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      htmlAst
      frontmatter {
        title
        date
        description
      }
    }
  }
`
