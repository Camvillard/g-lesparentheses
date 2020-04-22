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

const { forestGreen } = themeColors

type SecondPostProps = {}
const SecondPost = (props: SecondPostProps) => {
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
        histoire publiée le 12 janvier 2018
      </CardMeta>
      <FeaturedImageContainer
        columns={{ default: "span 4", sm: " 2 / span 6" }}
      >
        <FeaturedImage
          src={`https://res.cloudinary.com/lesparentheses/image/upload/v1569002037/test/coworkamping_5.jpg`}
        />
      </FeaturedImageContainer>
      <PostTitle
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
        <Link to={"/deux-mille-dix-huit-dix-neuf/"}>
          un autre titre un moyen long.
        </Link>
      </PostTitle>
      <GridElement columns={{ default: "span 4", sm: "2 / span 5" }}>
        <PostExcerpt>
          abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolor,
          quia, temporibus nisi nulla eius dolore dolores illo cumque similique
          porro praesentium sunt consequuntur, quas sed eum! Cupiditate velit,
          in. Lorem ipsum dolor sit amet, consectetur adipisicing elit..
        </PostExcerpt>
        <MoreButton to={`/#`} fontcolor={forestGreen}>
          lire la suite
        </MoreButton>
      </GridElement>
    </PostContainer>
  )
}

export default SecondPost
