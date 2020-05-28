import styled from "styled-components"
import { MainContainer } from "../Containers/MainContainer.ui"
import { themeBreakpoints } from "../../theme/themeVariables"
import { Header3 } from "../Headers/Headers.ui"

const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

export const HomepageSectionTitle = styled(Header3)`
  font-size: 4.8rem;
  // max-width: 72vw;
  margin-left: 0;
`

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
