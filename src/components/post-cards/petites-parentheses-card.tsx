import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import { themeColors } from "../../theme/style-variables";
import { themeBreakpoints } from "../../theme/style-breakpoints";
import { CardMeta } from "./post-cards";

const { lightPink, oldPink} = themeColors;

const {
  xsmScreen,
  smScreen,
  mdScreen,
  lgScreen,
  xlgScreen
} = themeBreakpoints;


const PPCardContainer = styled.div`
  margin: 32px auto;
  position: relative;
  width: 80%;
  @media (min-width: ${mdScreen} ) {
  } 
`

const PPCardTitle = styled.h2`
  position: absolute;
  top: 16px;
  left: 0;
  font-size: 14rem;
  color: ${oldPink};
  opacity: 0.2;
  margin: 0;
`

const PPCardExcerpt = styled.p`
  position: relative;
  margin-top: 0.4rem;
  margin-bottom: 1.8rem;
`

class PetitesParenthesesCard extends React.Component {
  render() {
    return (
      <PPCardContainer>
        <CardMeta>12.01.2018</CardMeta>
        <PPCardTitle>07</PPCardTitle>
        <PPCardExcerpt>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolor, quia, temporibus nisi nulla eius dolore dolores illo cumque similique porro praesentium sunt consequuntur, quas sed eum! Cupiditate velit, in. Lorem ipsum dolor sit amet, consectetur adipisicing elit..
        </PPCardExcerpt>
        
        <div className="button-block">
          <a href="#" className="button-simple light">lire la suite</a>
        </div>
      </PPCardContainer>
    )
  }
}

export default PetitesParenthesesCard
