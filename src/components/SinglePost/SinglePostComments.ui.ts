import styled from "styled-components"
import { MainContainer } from "../Containers/MainContainer.ui"
import { Header3 } from "../Headers/Headers.ui"
import { themeBreakpoints } from "../../theme/themeVariables"

const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

export const CommentsWrapper = styled(MainContainer)`
  margin: 32px auto;
`
export const CommentsTitle = styled(Header3)`
  font-size: 4.2rem;
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

export const CommentWrapper = styled.div`
  margin: 24px 0;
`

export const CommentHeader = styled.div`
  display: flex;
  align-items: flex-end;
`

export const CommentAuthor = styled.a`
  h5 {
    margin: 0;
    font-size: 1.8rem;
  }
`

export const CommentDate = styled.p`
  margin: 0 0 2px 8px;
  font-size: 1rem;
`

export const CommentContent = styled.p``
