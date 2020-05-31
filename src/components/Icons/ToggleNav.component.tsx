import React from "react"
import styled from "styled-components"
import { themeBreakpoints, themeColors } from "../../theme/themeVariables"

const { smScreen, mdScreen } = themeBreakpoints
const { darkGray } = themeColors

const ToggleNavWrapper = styled.svg`
  width: 70%;
  margin-left: 30%;
  display: block;
  &:hover {
    cursor: hover;
  }
  @media (min-width: ${smScreen}) {
    width: 90%;
    margin-left: 5%;
  }
`

export const OpenNav = () => {
  return (
    <svg
      width="30"
      height="14"
      viewBox="0 0 30 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.63623 1.18182H29.7271M0.63623 12.8182H29.7271"
        stroke="#24262B"
        stroke-width="2"
      />
    </svg>
  )
}

export const CloseNav = () => {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.818359 1.02494L21.3887 21.5953M0.818359 21.3886L21.3887 0.818176"
        stroke="#24262B"
        stroke-width="2"
      />
    </svg>
  )
}
