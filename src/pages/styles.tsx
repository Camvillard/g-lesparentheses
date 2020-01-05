import React, { Component, Fragment } from "react"
import { MainContainer } from "../components/containers/MainContainer"
import { PageTitle } from "../components/texts/texts.ui"
import { GlobalStyle } from "../theme/globalstyle"


class Styles extends Component {

  public render() {
    return(
      <Fragment>
        <GlobalStyle />
        <MainContainer>
          <PageTitle>titre de page</PageTitle>

        </MainContainer>
      </Fragment>
    )
  }
}

export default Styles