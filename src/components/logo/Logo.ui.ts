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
    svg {
      max-height: 62px;
    }
  }
`
export const LogoElement = styled.svg``
