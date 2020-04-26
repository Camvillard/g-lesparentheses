import React from "react"
import { Input } from "../components/Inputs/Input.ui"
import { MainContainer } from "../components/Containers/MainContainer.ui"
import { InputElement } from "../components/Inputs/InputElement.component"

const Contact = () => {
  return (
    <MainContainer>
      page de contact
      <InputElement label={"label test"} placeholder={"test"} />
    </MainContainer>
  )
}

export default Contact
