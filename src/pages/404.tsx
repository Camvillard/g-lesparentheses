import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import { FullScreenContainer } from "../components/FullScreen/FullScreenContainer.ui"
import { themeColors } from "../theme/themeVariables"
import { MainContainer } from "../components/MainContainer/MainContainer.ui"
import { Flexbox } from "../components/Flexbox/Flexbox.ui"

const { forestGreen, offWhite } = themeColors

const Title404 = styled.h1`
  color: ${offWhite};
  font-size: 8rem;
`

const ErrorSubtitle = styled.h3`
  color: ${offWhite};
  font-size: 2.8rem;
  line-height: 1.2;
`

const ErrorActionsWrapper = styled(Flexbox)``

const ErrorHint = styled.p`
  color: ${offWhite};
  margin-bottom: 1em;
`

const ErrorAction = styled(Link)`
  color: ${offWhite};
  padding-top: 12px;
  padding-bottom: 4px;
  border-bottom: 2px solid ${offWhite};
`

const NotFoundPage = () => {
  const randomLink = "/"
  return (
    <FullScreenContainer bgColor={forestGreen} color={offWhite}>
      <MainContainer>
        <Title404>404.</Title404>
        <ErrorSubtitle>
          la page que vous avez demandé n'existe pas / plus.
        </ErrorSubtitle>
        <ErrorHint>
          peut-être que vous avez mal tapé l'url (ça arrive) ou que j'ai
          dé-publié cette page (ça arrive aussi). quoi qu'il en soit, ce n'est
          pas très grave, j'ai des solutions à vous proposer.
        </ErrorHint>
        <ErrorActionsWrapper direction={"column"} align={"flex-start"}>
          <ErrorAction to={"/"}>retourner à la homepage</ErrorAction>
          <ErrorAction to={randomLink}>lire un article au hasard</ErrorAction>
          <ErrorAction to={"/"}>je sais pas, surprends-moi</ErrorAction>
        </ErrorActionsWrapper>
      </MainContainer>
    </FullScreenContainer>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
