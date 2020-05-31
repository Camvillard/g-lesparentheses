import styled from "styled-components"
import { themeColors, themeBreakpoints } from "../../theme/themeVariables"
import { MainContainer } from "../Containers/MainContainer.ui"

const { oldPink, darkGray } = themeColors
const { mdScreen } = themeBreakpoints

export const CommentFormWrapper = styled(MainContainer)`
  margin-bottom: 64px;
`

export const CommentSuccessWrapper = styled.div`
  margin: 18px 0;
  background: ${oldPink};
  color: white;
  padding: 8px;
  position: relative;

  svg {
    position: absolute;
    top: 8px;
    right: 8px;
  }
`

export const CommentSucessClose = styled.div``

export const CommentSuccesTitle = styled.h4`
  color: ${darkGray};
  position: relative;
  margin-bottom: 8px;
  &:after {
    content: "";
    width: 32px;
    height: 2px;
    background: ${darkGray};
    position: absolute;
    left: 0;
    bottom: -4px;
  }
`

export const CommentSuccessText = styled.p`
  color: white;
  font-size: 1.2rem;
  max-width: 170px;
  margin-left: 0;
`

export const CommentForm = styled.form`
  max-width: 564px;
`
