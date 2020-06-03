import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

// styles & assets
import "../styles/main.scss"
import {
  SinglePostTitle,
  SinglePostThumbnail,
  SinglePostBanner,
  SinglePostThumnbailWrapper,
  SinglePostTitleWrapper,
  SinglePostFeaturedImageOverlay,
  SinglePostArticle,
} from "../components/SinglePost/SinglePostSections.ui"
import SEO from "../components/SEO/SEO.component"
import { SinglePostCommentForm } from "../components/SinglePost/SinglePostCommentForm.component"
import { convertNodesInComments } from "../shared/comments/comments.helpers"
import { SinglePostComments } from "../components/SinglePost/SinglePostComments.component"
import { BottomSpacing } from "../components/MainContainer/MainContainer.ui"
import { SinglePostMeta } from "../components/SinglePost/SinglePostMeta.component"
import { SinglePostData } from "../types/BlogPost.type"
import { GlobalStyle } from "../theme/globalstyle"
import { Nav } from "../components/Nav/Nav.component"
import { Footer } from "../components/Footer/Footer.component"
import { activateInfosBox } from "../shared/posts/post.helpers"

type PostTemplateProps = {
  location: string
  data: SinglePostData
  pageContext: any
}
const PostTemplate = (props: PostTemplateProps) => {
  const { data } = props
  const { pageContext } = props
  const { frontmatter, html, id } = data.markdownRemark
  const { title, image_url: imageUrl, extrait, has_info: infoBox } = frontmatter
  const [isLoaded, setLoaded] = useState(false)

  const imagePlaceholder = `https://images.unsplash.com/photo-1567147220783-b84e25517cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`

  const allComments = convertNodesInComments(data.allAirtable.edges)

  useEffect(() => {
    setLoaded(true)
    if (infoBox) {
      activateInfosBox()
    }
    return () => {
      setLoaded(false)
    }
  }, [isLoaded])

  return (
    <>
      <GlobalStyle />
      <SEO title={title} description={extrait} />
      <Nav />
      <SinglePostBanner
        columns={{
          default: "1fr 1fr 1fr 1fr",
          sm: "repeat(8, 1fr)",
          md: "repeat(12, 1fr)",
        }}
      >
        <SinglePostThumnbailWrapper
          columns={{
            default: "1 / span 4",
            sm: "1 / span 5",
            md: "1 / span 7",
          }}
        >
          <SinglePostMeta meta={frontmatter} />
          <SinglePostFeaturedImageOverlay />
          <SinglePostThumbnail src={imageUrl || imagePlaceholder} alt={title} />
        </SinglePostThumnbailWrapper>
        <SinglePostTitleWrapper
          columns={{
            default: "1 / span 4",
            sm: "3 / span 5",
            md: "3 / span 9",
          }}
        >
          <SinglePostTitle dangerouslySetInnerHTML={{ __html: title }} />
        </SinglePostTitleWrapper>
      </SinglePostBanner>
      <SinglePostArticle dangerouslySetInnerHTML={{ __html: html }} />
      <SinglePostComments allComments={allComments} extraPadding={infoBox} />
      <SinglePostCommentForm postId={id} extraPadding={infoBox} />
      <Footer />
      <BottomSpacing />
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
        has_info
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
