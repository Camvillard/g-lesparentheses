import styled from "styled-components"
import { themeBreakpoints } from "../../theme/style-variables"

const { smScreen, mdScreen, lgScreen } = themeBreakpoints

export const PageTitle = styled.h1`
  font-size: 4.8rem;

  @media (min-width: ${smScreen}) {
  }

  @media (min-width: ${mdScreen}) {
    font-size: 5.2rem;
  }

  @media (min-width: ${lgScreen}) {
  }
`
export const SectionTitle = styled.h2`
  font-size: 4rem;

  @media (min-width: ${smScreen}) {
  }

  @media (min-width: ${mdScreen}) {
    font-size: 5.2rem;
  }

  @media (min-width: ${lgScreen}) {
  }
`
