import styled from "styled-components"
import { Breakpoint } from "../../types/Breakpoint.type"
import { themeBreakpoints } from "../../theme/themeVariables"

const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

type WrapperProps = {
  width: Breakpoint
}

export const LogoWrapper = styled.div`
  margin: 24px 4vw 48px;
  position: relative;
  svg {
    max-width: 100%;
  }
  @media (min-width: ${smScreen}) {
  }
  @media (min-width: ${mdScreen}) {
  }
  @media (min-width: ${lgScreen}) {
  }
  @media (min-width: ${xlgScreen}) {
  }
`
export const LogoElement = styled.svg``
