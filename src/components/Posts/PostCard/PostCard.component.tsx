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
import { createExcerpt } from "../../../shared/posts/post.helpers"
import { BlogPostCardProps } from "../../../types/BlogPost.type"

const { forestGreen } = themeColors

const PostCard = ({ post }: BlogPostCardProps) => {
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
          sm: "2 / span 6",
        }}
      >
        histoire publiée le {date}
      </CardMeta>
      <FeaturedImageContainer
        columns={{ default: "span 4", sm: " 2 / span 6" }}
      >
        <FeaturedImage src={imageUrl} alt={imageAlt} />
      </FeaturedImageContainer>
      <PostTitle
        to={`/article/${slug}`}
        columns={{ default: "span 4", sm: "2 / span 6" }}
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
      <GridElement columns={{ default: "span 4", sm: "2 / span 5" }}>
        <PostExcerpt>{createExcerpt(extrait)}</PostExcerpt>
        <MoreButton to={`/article/${slug}`} fontcolor={forestGreen}>
          lire la suite
        </MoreButton>
      </GridElement>
    </PostContainer>
  )
}

export default PostCard
