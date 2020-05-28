import styled from "styled-components"
import { themeColors, themeBreakpoints } from "../../../theme/themeVariables"
import { ButtonLinkBlock } from "../../Buttons/Buttons.ui"

const { lightPink, oldPink } = themeColors

const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

export const PPCardContainer = styled.div`
  margin: 32px auto;
  position: relative;
  width: 80%;
  @media (min-width: ${mdScreen}) {
  }
`

export const PPCardTitle = styled.h2`
  position: absolute;
  top: 16px;
  left: 0;
  font-size: 14rem;
  color: ${oldPink};
  opacity: 0.2;
  margin: 0;
`

export const PPCardExcerpt = styled.p`
  position: relative;
  margin-top: 0.4rem;
  margin-bottom: 1.8rem;
`

export const PPReadMore = styled(ButtonLinkBlock)``
