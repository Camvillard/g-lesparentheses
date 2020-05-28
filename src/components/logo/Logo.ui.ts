import styled from "styled-components"
import { Breakpoint } from "../../types/Breakpoint.type"
import { themeBreakpoints } from "../../theme/themeVariables"

const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

type WrapperProps = {
  width: Breakpoint
}

export const LogoWrapper = styled.div`
  margin: 24px 4vw 48px;
  width: 80vw;
  position: relative;
  svg {
    width: 100%;
    height: auto;
  }
  @media (min-width: ${smScreen}) {
    margin: 24px 11vw 48px;
    width: 40vw;
  }
  @media (min-width: ${mdScreen}) {
    margin: 32px 11vw 64px;
    width: 32vw;
  }
  @media (min-width: ${lgScreen}) {
    width: 24vw;
  }
  @media (min-width: ${xlgScreen}) {
  }
`
export const LogoElement = styled.svg``
