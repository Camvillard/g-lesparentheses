import styled from "styled-components"
import { Breakpoint } from "../../types/Breakpoint.type"
import { themeBreakpoints } from "../../theme/themeVariables"

const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

type WrapperProps = {
  width: Breakpoint
}

export const LogoWrapper = styled.div`
  width: ${(props: WrapperProps) => props.width.default};
  margin: 32px 0 32px 4vw;
  position: relative;
  @media (min-width: ${smScreen}) {
    width: ${(props: WrapperProps) => props.width.sm};
  }
  @media (min-width: ${mdScreen}) {
  }
  @media (min-width: ${lgScreen}) {
  }
  @media (min-width: ${xlgScreen}) {
  }
`
