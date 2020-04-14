import React from "react"
import { ReadMoreButtonContainer, ReadMoreLink } from "./ReadMoreButton.ui"

const ReadMoreButton = () => {
  return (
    <ReadMoreButtonContainer>
      <ReadMoreLink to="/articles" className="button-block">
        lire plus d'articles
      </ReadMoreLink>
    </ReadMoreButtonContainer>
  )
}

export default ReadMoreButton
