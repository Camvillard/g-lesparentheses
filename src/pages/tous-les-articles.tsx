import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout.component"
import { PageProps } from "../types/Page.type"
import SecondPost from "../components/Posts/SecondPost/SecondPost.component"
import { MainContainer } from "../components/Containers/MainContainer.ui"
import InstagramFooter from "../components/instagram/InstagramFooter.component"

const PostIndex = (props: PageProps) => {
  const { data } = props
  const posts = data.allMarkdownRemark?.edges

  return (
    <Layout location={""} title={"tst"} pageName={"à propos"}>
      <MainContainer>
        {posts ? (
          posts.map(post => <SecondPost post={post} key={post.node.id} />)
        ) : (
          <p>il n'y a pas d'articles</p>
        )}
      </MainContainer>
      <InstagramFooter />
    </Layout>
  )
}

export default PostIndex

export const allArticlesQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { categories: { ne: "petites parenthèses" } } }
      sort: { fields: frontmatter___order, order: DESC }
    ) {
      edges {
        node {
          html
          id
          frontmatter {
            date
            title
            slug
            categories
            image_url
            image_alt
            extrait
          }
        }
      }
    }
  }
`
