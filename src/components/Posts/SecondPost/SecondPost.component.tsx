import React from "react"
import {
  PostContainer,
  CardMeta,
  FeaturedImageContainer,
  FeaturedImage,
  FeturedImageOverlay,
  PostExcerpt,
  MoreButton,
} from "../PostCard.ui"
import { themeColors } from "../../../theme/themeVariables"
import { SecondPostTitleContainer, SecondPostTitle } from "./SecondPost.ui"

const { forestGreen } = themeColors

type SecondPostProps = {}
const SecondPost = (props: SecondPostProps) => {
  return (
    <PostContainer
      columns={"repeat(4, 1fr)"}
      mdColumns={"repeat(8, 1fr)"}
      lgColumns={"repeat(12, 1fr)"}
    >
      <CardMeta>histoire publiée le 12 janvier 2018</CardMeta>
      <FeaturedImageContainer>
        <FeaturedImage
          src={`https://res.cloudinary.com/lesparentheses/image/upload/v1569002037/test/coworkamping_5.jpg`}
        />
      </FeaturedImageContainer>
      <SecondPostTitleContainer to={"/deux-mille-dix-huit-dix-neuf/"}>
        <SecondPostTitle>
          deux mille dix-huit, deux mille dix-neuf.
        </SecondPostTitle>
      </SecondPostTitleContainer>
      <PostExcerpt>
        abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolor,
        quia, temporibus nisi nulla eius dolore dolores illo cumque similique
        porro praesentium sunt consequuntur, quas sed eum! Cupiditate velit, in.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit..
      </PostExcerpt>
      <MoreButton to={`/#`} fontcolor={forestGreen}>
        lire la suite
      </MoreButton>
    </PostContainer>
  )
}

export default SecondPost
