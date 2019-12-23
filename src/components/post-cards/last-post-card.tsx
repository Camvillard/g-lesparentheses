import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import { Accent } from "../../theme/globalstyle";
import { ButtonSimple, Button, ButtonBlock } from "../buttons/buttons";
import { themeColors } from "../../theme/style-variables";
import { themeBreakpoints } from "../../theme/style-breakpoints";
import { MainContainer } from "../containers/main-container";
import HomepagePostCard from "./homepage-post-card";

const { forestGreen} = themeColors;

const { mdScreen } = themeBreakpoints

const LastPostCardContainer = styled(MainContainer)`
  border: 4px solid green;
`


const LastPostCard = (props: any) => {
  return(
    <LastPostCardContainer>
      <HomepagePostCard />
    </LastPostCardContainer>
  )
}

export default LastPostCard


