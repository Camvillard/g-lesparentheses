import styled from "styled-components"
import { MainContainer } from "../MainContainer/MainContainer.ui"
import { themeBreakpoints } from "../../theme/themeVariables"
import { Header3 } from "../Headers/Headers.ui"

const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

export const HomepageSectionTitle = styled(Header3)`
  font-size: 4.8rem;
  @media (min-width: ${smScreen}) {
    font-size: 6.8rem;
  }
  @media (min-width: ${mdScreen}) {
    font-size: 7.2rem;
  }
  @media (min-width: ${lgScreen}) {
    font-size: 8.8rem;
  }
  @media (min-width: ${xlgScreen}) {
  }
`

export const HomepageSection = styled(MainContainer)`
  margin: 24px auto;
  @media (min-width: ${smScreen}) {
    margin: 56px auto;
  }
  @media (min-width: ${lgScreen}) {
    margin: 64px auto;
  }
  @media (min-width: ${xlgScreen}) {
  }
`
