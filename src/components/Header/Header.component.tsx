import React, { Fragment } from "react"
import Logo from "../logo/Logo.component"
import Baseline from "../logo/Baseline.component"
import { HeaderWrapper } from "./Header.ui"
import { themeColors } from "../../theme/themeVariables"

const { oldPink, darkGray } = themeColors
const Header = () => {
  return (
    <HeaderWrapper>
      <Logo width={"80%"} fillColor={darkGray} />
      <Baseline />
    </HeaderWrapper>
  )
}

export default Header
