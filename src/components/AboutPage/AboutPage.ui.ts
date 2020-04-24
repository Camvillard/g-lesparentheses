import styled from "styled-components"
import { WideContainer } from "../Containers/MainContainer.ui"
import { themeColors } from "../../theme/themeVariables"

const { darkGray } = themeColors

export const AboutPageContainer = styled(WideContainer)`
  background: ${darkGray};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
