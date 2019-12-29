import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import { Accent } from "../../theme/globalstyle";
import { ButtonSimple, Button, ButtonBlock } from "../buttons/buttons";
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
  HomepageCardMeta
} from "./post-cards";

const { forestGreen} = themeColors;

const { mdScreen, smScreen } = themeBreakpoints

const LastCardContainer = styled(MainContainer)`
`

const LastCardMeta = styled(HomepageCardMeta)`
  @media(min-width: ${smScreen}) {
    margin-right: 6%;
  }
`

const LastFeaturedImageContainer = styled(FeaturedImageContainer)`
  @media(min-width: ${smScreen}) {
    width: 88%;
    margin: auto;
  }
`

const LastCardPostTitle = styled(PostTitle)`
  @media(min-width: ${smScreen}) {
    margin-left: 0;
  }
`

const LastCardButtonBlock = styled(CardButtonBlock)`
  @media(min-width: ${smScreen}) {
    margin-left: 12%;
  }
`


const LastPostCard = (props: any) => {
  return(
    <LastCardContainer>
      <LastCardMeta>histoire publiée le 12 janvier 2018</LastCardMeta>
      <LastFeaturedImageContainer>
        <FeaturedImage src={`https://res.cloudinary.com/lesparentheses/image/upload/v1569002038/test/coworkamping_63.jpg`} />
        <ImageOverlay />
      </LastFeaturedImageContainer>

        <Link to={"/deux-mille-dix-huit-dix-neuf/"}>
          <LastCardPostTitle>
            deux mille dix-huit, deux mille dix-neuf
          </LastCardPostTitle>
        </Link>

        <PostExcerpt>
        abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolor, quia, temporibus nisi nulla eius dolore dolores illo cumque similique porro praesentium sunt consequuntur, quas sed eum! Cupiditate velit, in. Lorem ipsum dolor sit amet, consectetur adipisicing elit..
        </PostExcerpt>

        <LastCardButtonBlock>
          <ButtonSimple href={``} fontColor={forestGreen}>
            lire la suite
          </ButtonSimple>
        </LastCardButtonBlock>
      </LastCardContainer>
  )
}

export default LastPostCard