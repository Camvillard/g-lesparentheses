import React from "react"
import { Link } from "gatsby"

import {
  PostContainer,
  CardMeta,
  FeaturedImageContainer,
  FeaturedImage,
  PostExcerpt,
  MoreButton,
  PostTitle,
} from "../PostCard.ui"
import { themeColors } from "../../../theme/themeVariables"
import { GridElement } from "../../Grid/Grid.ui"
import { BlogPostCardProps } from "../../../types/BlogPost.type"
import { createExcerpt, isFeminine } from "../../../shared/posts/post.helpers"

const { forestGreen } = themeColors

const FourthPost = ({ post }: BlogPostCardProps) => {
  const { node } = post
  const { frontmatter } = node
  const {
    title,
    categories,
    date,
    image_url: imageUrl,
    image_alt: imageAlt,
    extrait,
    slug,
  } = frontmatter

  const publicationDate = `${categories} publié${
    isFeminine(categories) ? "e" : ""
  } le ${date}`

  return (
    <PostContainer
      columns={{
        default: "repeat(4, 1fr)",
        sm: "repeat(8, 1fr)",
        md: "repeat(8, 1fr)",
        lg: "repeat(12, 1fr)",
      }}
    >
      <CardMeta
        columns={{
          default: "span 4",
          sm: "2 / span 4",
        }}
      >
        {publicationDate}
      </CardMeta>
      <FeaturedImageContainer
        columns={{ default: "span 4", sm: " 2 / span 4" }}
      >
        <FeaturedImage src={imageUrl} alt={imageAlt} />
      </FeaturedImageContainer>
      <PostTitle
        to={`/article/${slug}`}
        columns={{ default: "span 4", sm: "2 / span 5" }}
        top={{
          default: "-40px",
          sm: "0",
          md: "0",
          lg: "54px",
          xlg: "56px",
        }}
        left={{
          default: "0",
        }}
      >
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </PostTitle>
      <GridElement columns={{ default: "span 4", sm: "2 / span 4" }}>
        <PostExcerpt>{createExcerpt(extrait)}</PostExcerpt>
        <MoreButton to={`/article/${slug}`} textcolor={forestGreen}>
          lire la suite
        </MoreButton>
      </GridElement>
    </PostContainer>
  )
}

export default FourthPost
