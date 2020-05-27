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
import { NodePost } from "../../../types/Page.type"

const { forestGreen } = themeColors

type LastPostProps = {
  post: NodePost
}

const LastPost = ({ post }: LastPostProps) => {
  console.log("post", post)
  const { node } = post
  const { frontmatter, html } = node
  const { title, categories, date, image_url } = frontmatter

  return (
    <PostContainer
      columns={{
        default: "repeat(4, 1fr)",
        sm: "repeat(8, 1fr)",
        lg: "repeat(12, 1fr)",
      }}
    >
      <CardMeta
        columns={{
          default: "span 4",
          sm: "span 8",
        }}
      >
        histoire publiée le {date}
      </CardMeta>
      <FeaturedImageContainer
        columns={{ default: "span 4", sm: " 2 / span 7" }}
      >
        <FeaturedImage
          src={`https://res.cloudinary.com/lesparentheses/image/upload/v1569002038/test/coworkamping_63.jpg`}
        />
      </FeaturedImageContainer>
      <PostTitle
        columns={{ default: "span 4", sm: "span 6" }}
        top={{
          default: "-32px",
          sm: "-48px",
          md: "-64px",
          lg: "54px",
          xlg: "56px",
        }}
        left={{
          default: "0",
          sm: "2vw",
          md: "2vw",
        }}
      >
        <Link to={`/#`}>deux mille dix-huit, deux mille dix-neuf.</Link>
      </PostTitle>
      <GridElement
        columns={{ default: "span 4", sm: "2 / span 5", md: "2 / span 4" }}
      >
        <PostExcerpt>
          <span dangerouslySetInnerHTML={{ __html: html }} />
        </PostExcerpt>
        <MoreButton to={`/#`} fontcolor={forestGreen}>
          lire la suite
        </MoreButton>
      </GridElement>
    </PostContainer>
  )
}

export default LastPost
