import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import { ButtonSimple} from "../buttons/buttons";
import { themeColors } from "../../theme/style-variables";
import { themeBreakpoints } from "../../theme/style-breakpoints";
import { MainContainer } from "../containers/main-container";
import {
  CardMeta,
  FeaturedImageContainer,
  FeaturedImage,
  ImageOverlay,
  PostTitle,
  PostExcerpt,
  CardButtonBlock,
  HomepageCardMeta,
  BlogCardContainer
} from "./post-cards";


const { forestGreen} = themeColors;

const { mdScreen, smScreen } = themeBreakpoints


const ThirdPostCardContainer = styled(BlogCardContainer)`
  @media(min-width: ${smScreen}) {
    width: 88vw;
    margin-left: 12vw;
  }
`

const ThirdCardMeta = styled(HomepageCardMeta)`
  @media(min-width: ${smScreen}) {
    margin-right: 10%;
  }
`

const ThirdFeaturedImageContainer = styled(FeaturedImageContainer)`
  @media(min-width: ${smScreen}) {
    width: 80%;
    margin: auto;
  }
`

const ThirdCardPostTitle = styled(PostTitle)`
  @media(min-width: ${smScreen})  {
    margin-left: 12%;
    margin-top: 12px;
  }
`

const ThirdPostExcerpt = styled(PostExcerpt)`
  @media(min-width: ${smScreen}) {
    max-width: 478px;
    margin-left: 12%;
  }
`

const ThirdCardButtonBlock = styled(CardButtonBlock)`
  @media(min-width: ${smScreen}) {
    margin-left: 12%;
  }
`


const ThirdPostCard = (props: any) => {
  return(
    <ThirdPostCardContainer>
      <ThirdCardMeta>histoire publiée le 12 janvier 2018</ThirdCardMeta>
      <ThirdFeaturedImageContainer>
        <FeaturedImage src={`https://res.cloudinary.com/lesparentheses/image/upload/v1569002038/test/coworkamping_63.jpg`} />
        <ImageOverlay />
      </ThirdFeaturedImageContainer>

      <Link to={"/deux-mille-dix-huit-dix-neuf/"}>
        <ThirdCardPostTitle>
          deux mille dix-huit, deux mille dix-neuf
        </ThirdCardPostTitle>
      </Link>

      <ThirdPostExcerpt>
      abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolor, quia, temporibus nisi nulla eius dolore dolores illo cumque similique porro praesentium sunt consequuntur, quas sed eum! Cupiditate velit, in. Lorem ipsum dolor sit amet, consectetur adipisicing elit..
      </ThirdPostExcerpt>

      <ThirdCardButtonBlock>
        <ButtonSimple href={``} fontColor={forestGreen}>
          lire la suite
        </ButtonSimple>
      </ThirdCardButtonBlock>
    </ThirdPostCardContainer>
  )
}

export default ThirdPostCard