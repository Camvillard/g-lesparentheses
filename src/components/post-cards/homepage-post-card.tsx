import React from "react"
import { Link } from "gatsby"
import { ButtonSimple } from "../buttons/buttons";
import { themeColors } from "../../theme/style-variables";
import { themeBreakpoints } from "../../theme/style-breakpoints";
import {
  CardMeta,
  BlogCardContainer,
  HomepageCardMeta,
  FeaturedImageContainer,
  FeaturedImage,
  ImageOverlay,
  PostTitle,
  PostExcerpt,
  CardButtonBlock
} from "./post-cards";

const { forestGreen, mediumGray} = themeColors;

const { mdScreen } = themeBreakpoints


const HomepagePostCard = (props: any) => {
  return(
    <BlogCardContainer>
      <HomepageCardMeta>histoire publiée le 12 janvier 2018</HomepageCardMeta>
      <FeaturedImageContainer>
        <FeaturedImage src={`https://res.cloudinary.com/lesparentheses/image/upload/v1569002038/test/coworkamping_63.jpg`} />
        <ImageOverlay />
      </FeaturedImageContainer>

        <Link to={"/deux-mille-dix-huit-dix-neuf/"}>
          <PostTitle>
            deux mille dix-huit, deux mille dix-neuf
          </PostTitle>
        </Link>

        <PostExcerpt>
        abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolor, quia, temporibus nisi nulla eius dolore dolores illo cumque similique porro praesentium sunt consequuntur, quas sed eum! Cupiditate velit, in. Lorem ipsum dolor sit amet, consectetur adipisicing elit..
        </PostExcerpt>

        <CardButtonBlock>
          <ButtonSimple href={``} fontColor={forestGreen}>
            lire la suite
          </ButtonSimple>
        </CardButtonBlock>
      </BlogCardContainer>
  )
}

export default HomepagePostCard


