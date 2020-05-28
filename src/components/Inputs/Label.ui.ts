import styled from "styled-components"
import { themeFonts, themeColors } from "../../theme/themeVariables"

const { accentFont } = themeFonts
const { darkGray, gray, mediumGray, lightGray } = themeColors

export const Label = styled.label`
  font-size: 1.4rem;
  font-family: ${accentFont};
  color: ${darkGray};
`
