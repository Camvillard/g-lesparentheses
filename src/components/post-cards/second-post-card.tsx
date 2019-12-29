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


const SecondPostCardContainer = styled(BlogCardContainer)`
  @media(min-width: ${smScreen}) {
    width: 72vw;
    margin-left: 2vw;
  }
`

const SecondCardMeta = styled(HomepageCardMeta)`
  @media(min-width: ${smScreen}) {
    margin-right: 4%;
  }
`

const SecondFeaturedImageContainer = styled(FeaturedImageContainer)`
  @media(min-width: ${smScreen}) {
    width: 90%;
    margin-left: 6%;
  }
`

const SecondCardPostTitle = styled(PostTitle)`
  @media(min-width: ${smScreen})  {
    margin-left: 0;
    margin-top: 8px;
  }
`

const SecondPostExcerpt = styled(PostExcerpt)`
  @media(min-width: ${smScreen}) {
    max-width: 478px;
    margin-left: 6%;
  }
`

const SecondCardButtonBlock = styled(CardButtonBlock)`
  @media(min-width: ${smScreen}) {
    margin-left: 6%;
  }
`


const SecondPostCard = (props: any) => {
  return(
    <SecondPostCardContainer>
      <SecondCardMeta>histoire publiée le 12 janvier 2018</SecondCardMeta>
      <SecondFeaturedImageContainer>
        <FeaturedImage src={`https://res.cloudinary.com/lesparentheses/image/upload/v1569002038/test/coworkamping_63.jpg`} />
        <ImageOverlay />
      </SecondFeaturedImageContainer>

      <Link to={"/deux-mille-dix-huit-dix-neuf/"}>
        <SecondCardPostTitle>
          deux mille dix-huit, deux mille dix-neuf
        </SecondCardPostTitle>
      </Link>

      <SecondPostExcerpt>
      abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolor, quia, temporibus nisi nulla eius dolore dolores illo cumque similique porro praesentium sunt consequuntur, quas sed eum! Cupiditate velit, in. Lorem ipsum dolor sit amet, consectetur adipisicing elit..
      </SecondPostExcerpt>

      <SecondCardButtonBlock>
        <ButtonSimple href={``} fontColor={forestGreen}>
          lire la suite
        </ButtonSimple>
      </SecondCardButtonBlock>
    </SecondPostCardContainer>
  )
}

export default SecondPostCard