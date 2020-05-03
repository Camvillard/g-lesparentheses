import React from "react"
import { Link, graphql } from "gatsby"

// styles & assets
import "../styles/main.scss"
import Layout from "../components/Layout/Layout.component"
import { SinglePostTitle } from "../components/SinglePost/SinglePostSections.ui"
import SEO from "../components/SEO/SEO.component"
import { SinglePostCommentForm } from "../components/SinglePost/SinglePostCommentForm.component"
import { convertNodesInComments } from "../shared/comments/comments.helpers"
import { SinglePostComments } from "../components/SinglePost/SinglePostComments.component"
import { MainContainer } from "../components/Containers/MainContainer.ui"

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

  const allComments = convertNodesInComments(data.allAirtable.edges)

  return (
    <Layout location={location} title={siteTitle} pageName="single-post">
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || excerpt}
      />
      <MainContainer>
        <SinglePostTitle>{title}</SinglePostTitle>
        <article dangerouslySetInnerHTML={{ __html: html }} />
        <p>
          abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz
        </p>
      </MainContainer>
      <SinglePostComments allComments={allComments} />
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
            date(locale: "fr", formatString: "Do MMMM YYYY")
            email
            nom
            postId
            url
          }
          table
        }
      }
    }
  }
`
