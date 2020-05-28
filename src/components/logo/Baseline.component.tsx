import React from "react"
import styled from "styled-components"
import {
  themeFonts,
  themeColors,
  themeBreakpoints,
} from "../../theme/themeVariables"

const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints
const { accentFont } = themeFonts
const { oldPink, mediumGray, gray } = themeColors

const BaselineText = styled.h4`
  font-family ${accentFont};
  font-size: 1.2rem;
  position: absolute;
  bottom: 12px;
  right: 16px;
  color: ${gray};
  @media (min-width: ${smScreen}) {
    font-size: 1.4rem;
    bottom: 24px;
    right: 24px;
  }
  @media (min-width: ${mdScreen}) {
  }
  @media (min-width: ${lgScreen}) {
  }
  @media (min-width: ${xlgScreen}) {
  }
`
const Baseline = () => {
  return <BaselineText>histoires & ponctuation</BaselineText>
}

export default Baseline
