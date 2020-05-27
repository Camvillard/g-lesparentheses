import React from "react"
import { Frontmatter } from "../../types/BlogPost.type"
import {
  SinglePostMetaFooter,
  MetaContent,
  MetaGroup,
  MetaTitle,
} from "./SinglePostMeta.ui"

type TSinglePostMetaProps = {
  meta: Frontmatter
}
export const SinglePostMeta = ({ meta }: TSinglePostMetaProps) => {
  const { date, categories } = meta

  return (
    <SinglePostMetaFooter>
      <MetaGroup>
        <MetaTitle>
          publié le / <MetaContent>{date}</MetaContent>
        </MetaTitle>
      </MetaGroup>
      <MetaGroup>
        <MetaTitle>
          catégories / <MetaContent>{categories}</MetaContent>
        </MetaTitle>
      </MetaGroup>
    </SinglePostMetaFooter>
  )
}
