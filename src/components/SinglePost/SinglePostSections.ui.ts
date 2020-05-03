import styled from "styled-components"
import { Header1 } from "../Headers/Headers.ui"
import { themeBreakpoints } from "../../theme/themeVariables"

const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

export const SinglePostSection = styled.div`
  margin-bottom: 2.4rem;
`
export const SinglePostTitle = styled(Header1)`
  font-size: 4.2rem;
  margin-top: 0.1em;
  margin-bottom: 0.6em;
  @media (min-width: ${smScreen}) {
    font-size: 6.4rem;
  }
  @media (min-width: ${mdScreen}) {
    font-size: 8rem;
  }
  @media (min-width: ${lgScreen}) {
    font-size: 10rem;
  }
`
export const SinglePostText = styled.p`
  border: 3px solid red;
  margin-bottom: 0.6rem;
`
