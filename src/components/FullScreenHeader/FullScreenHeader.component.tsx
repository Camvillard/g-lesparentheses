import React from "react"
import styled from "styled-components"

import { FullScreenContainer } from "../FullScreen/FullScreenContainer.ui"
import { Header1 } from "../Headers/Headers.ui"
import { themeColors } from "../../theme/themeVariables"

const {
  lightPink,
  oldPink,
  forestGreen,
  lightGray,
  mediumGray,
  gray,
  darkGray,
} = themeColors

type FullScreenHeaderProps = {
  title: string
}

const FullScreenHeaderWrapper = styled(FullScreenContainer)`
  border: 4px solid red;
  z-index: 40000000;
  justify-content: flex-start;
`
export const FullScreenHeader = ({ title }: FullScreenHeaderProps) => {
  return (
    <FullScreenHeaderWrapper bgColor={darkGray}>
      <Header1 color={"white"}>{title}</Header1>
    </FullScreenHeaderWrapper>
  )
}
