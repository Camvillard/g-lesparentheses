import styled from "styled-components"
import { Breakpoint } from "../../types/Breakpoint.type"
import { themeBreakpoints } from "../../theme/themeVariables"
import { Link } from "gatsby"

const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

type WrapperProps = {
  width: Breakpoint
}

export const LogoWrapper = styled(Link)`
  display: block;
  width: 100%;
  position: relative;
  svg {
    width: auto;
    max-height: 52px;
  }
  @media (min-width: ${smScreen}) {
    width: 40vw;
  }
  @media (min-width: ${mdScreen}) {
    margin: 32px 4vw 64px;
    width: 32vw;
  }
  @media (min-width: ${lgScreen}) {
    width: 24vw;
  }
  @media (min-width: ${xlgScreen}) {
  }
`
export const LogoElement = styled.svg``
