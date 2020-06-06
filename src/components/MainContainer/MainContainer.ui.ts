import styled from "styled-components"
import { themeBreakpoints } from "../../theme/themeVariables"

const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

type MainContainerProps = {
  extraPadding?: boolean
}
export const MainContainer = styled.div<MainContainerProps>`
  margin-left: auto;
  margin-right: auto;
  width: 92vw;
  @media (min-width: ${smScreen}) {
    width: 90vw;
  }
  @media (min-width: ${xlgScreen}) {
    width: 88vw;
  }
`

export const TextContainer = styled.div`
  width: 92vw;
  @media (min-width: ${smScreen}) {
    width: 88vw;
  }
  @media (min-width: ${mdScreen}) {
    width: 84vw;
  }
  @media (min-width: ${lgScreen}) {
    width: 64vw;
  }
  @media (min-width: ${lgScreen}) {
    width: 46vw;
  }
`

export const WideContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100vw;
`
export const TopSpacing = styled.div`
  margin-top: 24px;
`
export const BottomSpacing = styled.div`
  margin-top: 124px;
`
