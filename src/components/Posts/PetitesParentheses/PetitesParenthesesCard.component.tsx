import React from "react"
import {
  PPCardContainer,
  PPCardTitle,
  PPCardExcerpt,
  PPReadMore,
} from "./PetitesParenthesesCard.ui"
import { CardMeta } from "../PostCard.ui"
import { Post } from "../../../types/BlogPost.type"
import { createExcerpt } from "../../../shared/posts/post.helpers"

type PPProps = {
  post: Post
}
export const PetitesParenthesesCard = ({ post }: PPProps) => {
  const { frontmatter, rawMarkdownBody } = post
  const { date, title, slug } = frontmatter

  return (
    <PPCardContainer>
      <CardMeta>{date}</CardMeta>
      <PPCardTitle>{title}</PPCardTitle>
      <PPCardExcerpt>{createExcerpt(rawMarkdownBody || "", 40)}</PPCardExcerpt>
      <PPReadMore to={`/article/${slug}`}>lire la suite</PPReadMore>
    </PPCardContainer>
  )
}
