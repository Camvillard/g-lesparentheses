import React from "react"
import { Link, graphql } from "gatsby"

// styles & assets
import "../styles/main.scss"
import Layout from "../components/Layout/Layout.component"
import {
  SinglePostTitle,
  SinglePostThumbnail,
} from "../components/SinglePost/SinglePostSections.ui"
import SEO from "../components/SEO/SEO.component"
import { SinglePostCommentForm } from "../components/SinglePost/SinglePostCommentForm.component"
import { convertNodesInComments } from "../shared/comments/comments.helpers"
import { SinglePostComments } from "../components/SinglePost/SinglePostComments.component"
import { MainContainer } from "../components/Containers/MainContainer.ui"
import { SinglePostMeta } from "../components/SinglePost/SinglePostMeta.component"
import { SinglePostData } from "../types/BlogPost.type"
import { Grid, GridElement } from "../components/Grid/Grid.ui"
import {
  FeaturedImageContainer,
  FeturedImageOverlay,
} from "../components/Posts/PostCard.ui"
import { GlobalStyle } from "../theme/globalstyle"
import { Nav } from "../components/Nav/Nav.component"

type PostTemplateProps = {
  location: string
  data: SinglePostData
  pageContext: any
}
const PostTemplate = (props: PostTemplateProps) => {
  const { data } = props

  const { location, pageContext } = props
  const { title: siteTitle } = data.site.siteMetadata
  const { frontmatter, html, id } = data.markdownRemark
  const { title, image_url: imageUrl, extrait } = frontmatter
  const { previous, next } = pageContext

  const imagePlaceholder = `https://images.unsplash.com/photo-1567147220783-b84e25517cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`

  const allComments = convertNodesInComments(data.allAirtable.edges)

  return (
    // <Layout location={location} title={siteTitle} pageName="single-post">
    <>
      <GlobalStyle />
      <SEO title={title} description={extrait} />
      <Nav />
      <MainContainer>
        <Grid
          columns={{
            default: "1fr 1fr 1fr 1fr",
            sm: "repeat(8, 1fr)",
            md: "repeat(12, 1fr)",
          }}
        >
          <FeaturedImageContainer
            columns={{
              default: "2 / span 3",
              sm: "4 / span 5",
              md: "7 / span 6",
            }}
          >
            <FeturedImageOverlay />
            <SinglePostThumbnail
              src={imageUrl || imagePlaceholder}
              alt={title}
            />
          </FeaturedImageContainer>
          <GridElement
            columns={{
              default: "1 / span 4",
              sm: "1 / span 7",
              md: "1 / span 9",
            }}
          >
            <SinglePostTitle dangerouslySetInnerHTML={{ __html: title }} />
          </GridElement>
        </Grid>
      </MainContainer>
      <article dangerouslySetInnerHTML={{ __html: html }} />
      <SinglePostMeta meta={frontmatter} />
      <SinglePostComments allComments={allComments} />
      <SinglePostCommentForm postId={id} />
      {/* </Layout> */}
    </>
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
        extrait
        image_url
        categories
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
