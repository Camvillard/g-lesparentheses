import React from "react"
import styled from "styled-components"
import { themeFonts, themeColors } from "../../theme/themeVariables"

const { accentFont } = themeFonts
const { oldPink, mediumGray, gray } = themeColors

const BaselineText = styled.h4`
  font-family ${accentFont};
  font-size: 1.2rem;
  position: absolute;
  bottom: 12px;
  right: 22%;
  color: ${gray};
`
const Baseline = () => {
  return <BaselineText>histoires & ponctuation</BaselineText>
}

export default Baseline
