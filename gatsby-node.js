const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/SinglePost.component.tsx`)
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `/articles/${post.node.frontmatter.slug}`,
        component: blogPost,
        context: {
          id: post.node.id,
          slug: post.node.frontmatter.slug,
          previous,
          next,
        },
      })
    })

    // Create blog post list pages
    // const postsPerPage = 2
    // const numPages = Math.ceil(posts.length / postsPerPage)

    // console.log("l", posts.length)
    // console.log("dvsdf", numPages)

    // const arrayTest = Array.from({ length: numPages })
    // console.log("array test", arrayTest)

    // arrayTest.forEach((post, i) => {
    //   console.log("creating pagimated", post)
    //   console.log("index", i)

    //   createPage({
    //     path: i === 0 ? `/articles` : `/articles/${i + 1}`,
    //     component: path.resolve("./src/templates/PostIndex.component.tsx"),
    //     context: {
    //       limit: postsPerPage,
    //       skip: i * postsPerPage,
    //       numPages,
    //       currentPage: i + 1,
    //     },
    //   })
    // })
  })
}
