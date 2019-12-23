import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import { Accent } from "../../theme/globalstyle";
import { ButtonSimple, Button, ButtonBlock } from "../buttons/buttons";
import { themeColors } from "../../theme/style-variables";
import { themeBreakpoints } from "../../theme/style-breakpoints";
import { MainContainer } from "../containers/main-container";

const { forestGreen} = themeColors;

const { mdScreen } = themeBreakpoints

const BlogCardContainer = styled(MainContainer)`
  margin: 48px auto;
  
  @media(min-width: ${mdScreen}) {
    margin: 122px 0;
  }
`

const CardMeta = styled(Accent)`
  font-size: 1.2rem;
  font-weight: 300;
  text-align: right;

  @media(min-width: ${mdScreen}) {
    margin-rigth: 8%;
  }
`

const FeaturedImageContainer = styled.div`
  position: relative;

  @media(min-width: ${mdScreen}) {
    width: 84%;
    margin: auto;
  }
`
const FeaturedImage = styled.img`
  width: 100%;

  @media(min-width: ${mdScreen}) {
    max-height: 600px;
  }
`
const ImageOverlay = styled.div`
  background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0.3) 94%) ;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
const PostTitle = styled.h2`
  position: relative;
  margin-top: -32px;
  font-size: 4.8rem;
  max-width: 520px;
  @media(min-width: ${mdScreen}) {
    width: 60%;
    margin-left: 0;
    margin-top: -42px;
    font-size: 5.2rem;
  }
`
const PostExcerpt = styled.p`
  max-width: 620px;
  @media(min-width: ${mdScreen}) {
    width: 60%;
    margin-left: 12%;
  }
`
const CardButtonBlock = styled(ButtonBlock)`
  @media(min-width: ${mdScreen}) {
    margin-left: 12%;
  }
`

const HomepagePostCard = (props: any) => {
  return(
    <BlogCardContainer postIndex={props.postIndex}>
      <CardMeta>histoire publiée le 12 janvier 2018</CardMeta>
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


