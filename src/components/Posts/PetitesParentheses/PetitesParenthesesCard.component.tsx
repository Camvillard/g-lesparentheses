import React from "react"
import {
  PPCardContainer,
  PPCardTitle,
  PPCardExcerpt,
} from "./PetitesParenthesesCard.ui"
import { CardMeta } from "../PostCard.ui"

type PPProps = {}
const PetitesParenthesesCard = (props: PPProps) => {
  return (
    <PPCardContainer>
      <CardMeta>12.01.2018</CardMeta>
      <PPCardTitle>07</PPCardTitle>
      <PPCardExcerpt>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolor,
        quia, temporibus nisi nulla eius dolore dolores illo cumque similique
        porro praesentium sunt consequuntur, quas sed eum! Cupiditate velit, in.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit..
      </PPCardExcerpt>

      <div className="button-block">
        <a href="#" className="button-simple light">
          lire la suite
        </a>
      </div>
    </PPCardContainer>
  )
}

export default PetitesParenthesesCard
