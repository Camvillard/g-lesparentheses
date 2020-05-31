import React, { Fragment } from "react"
import Logo from "../logo/Logo.component"
import Baseline from "../logo/Baseline.component"
import { HeaderWrapper } from "./Header.ui"
import { themeColors } from "../../theme/themeVariables"

const { oldPink, darkGray } = themeColors
export const Header = () => {
  return (
    <Logo
      ratio={{ default: 0.5, sm: 0.4, lg: 0.2 }}
      fillColor={darkGray}
      baseline={true}
    />
  )
}
