import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import { ButtonSimple} from "../buttons/buttons";
import {
  themeColors,
  themeBreakpoints,
  themeFonts
} from '../../theme/style-variables';
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


const FourthPostCardContainer = styled(BlogCardContainer)`
  @media(min-width: ${smScreen}) {
    width: 72vw;
    margin-left: 4vw;
  }
`

const FourthCardMeta = styled(HomepageCardMeta)`
  @media(min-width: ${smScreen}) {
    margin-right: 10%;
  }
`

const FourthFeaturedImageContainer = styled(FeaturedImageContainer)`
  @media(min-width: ${smScreen}) {
    width: 80%;
    margin: auto;
  }
`

const FourthCardPostTitle = styled(PostTitle)`
  @media(min-width: ${smScreen})  {
    width: 80%;
    margin: auto;
    // margin-left: 2%;
    // margin-top: 12px;
  }
`

const FourthPostExcerpt = styled(PostExcerpt)`
  @media(min-width: ${smScreen}) {
    max-width: 478px;
    width: 80%;
    margin: auto;
    // margin-left: 12%;
  }
`

const FourthCardButtonBlock = styled(CardButtonBlock)`
  @media(min-width: ${smScreen}) {
    margin-left: 10%;
  }
`


const FourthPostCard = (props: any) => {
  return(
    <FourthPostCardContainer>
      <FourthCardMeta>histoire publiée le 12 janvier 2018</FourthCardMeta>
      <FourthFeaturedImageContainer>
        <FeaturedImage src={`https://res.cloudinary.com/lesparentheses/image/upload/v1569002038/test/coworkamping_63.jpg`} />
        <ImageOverlay />
      </FourthFeaturedImageContainer>

      <Link to={"/deux-mille-dix-huit-dix-neuf/"}>
        <FourthCardPostTitle>
          deux mille dix-huit, deux mille dix-neuf
        </FourthCardPostTitle>
      </Link>

      <FourthPostExcerpt>
      abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolor, quia, temporibus nisi nulla eius dolore dolores illo cumque similique porro praesentium sunt consequuntur, quas sed eum! Cupiditate velit, in. Lorem ipsum dolor sit amet, consectetur adipisicing elit..
      </FourthPostExcerpt>

      <FourthCardButtonBlock>
        <ButtonSimple href={``} fontColor={forestGreen}>
          lire la suite
        </ButtonSimple>
      </FourthCardButtonBlock>
    </FourthPostCardContainer>
  )
}

export default FourthPostCard