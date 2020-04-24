import styled from "styled-components"
import { MainContainer } from "./MainContainer.ui"
import { themeBreakpoints } from "../../theme/themeVariables"

const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

export const HomepageSection = styled(MainContainer)`
  margin: 64px auto;
  @media (min-width: ${smScreen}) {
    margin: 72px auto;
  }
  @media (min-width: ${lgScreen}) {
    margin: 92px auto;
  }
  @media (min-width: ${xlgScreen}) {
  }
`
