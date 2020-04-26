import React from "react"
import { Link, graphql } from "gatsby"

// styles & assets
import "../styles/main.scss"
import Layout from "../components/Layout/Layout.component"
import { SinglePostTitle } from "../components/SinglePost/SinglePostSections.ui"
import SEO from "../components/SEO/SEO.component"
import { SinglePostCommentForm } from "../components/SinglePost/SinglePostCommentForm.component"

type PostTemplateProps = {
  location: string
  data: any
  pageContext: any
}
const PostTemplate = (props: PostTemplateProps) => {
  const { data } = props

  const { location, pageContext } = props
  console.log("all props", props)

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
      <SinglePostCommentForm postId={id} />
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $id: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      htmlAst
      frontmatter {
        title
        date
        description
      }
    }
    allAirtable(
      filter: { table: { eq: "commentaires" }, data: { postId: { eq: $id } } }
    ) {
      edges {
        node {
          id
          data {
            commentaire
            date(formatString: "DD MM YYYY")
            email
            nom
            postId
          }
          table
        }
      }
    }
  }
`
