import styled from "styled-components"
import { ButtonLinkBlock } from "../../Buttons/Buttons.ui"
import { Link } from "gatsby"
import {
  themeFonts,
  themeColors,
  themeBreakpoints,
} from "../../../theme/themeVariables"

const { bodyFont } = themeFonts
const { oldPink, darkGray } = themeColors
const { smScreen, mdScreen, lgScreen } = themeBreakpoints

export const ReadMoreButtonContainer = styled(ButtonLinkBlock)`
  height: 100vh;
  background: ${oldPink};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin: 24px auto;
  font-size: 6.4rem;
  font-weight: 700;
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: ${oldPink};
  &:focus,
  &:active {
    outline: none;
  }

  @media (min-width: ${smScreen}) {
    width: 100%;
    height: auto;
    background: white;
    -webkit-text-stroke: 1px ${oldPink};
    -webkit-text-fill-color: white;
    padding: 24px 0;
    font-size: 8.4rem;
  }

  @media (min-width: ${mdScreen}) {
    font-size: 10.4rem;
  }
`
export const ReadMoreLink = styled(Link)`
  font-size: 7.2rem;
  line-height: 1.05;
  font-family: ${bodyFont};
  font-weight: 800;
  transition: 0.4s;
`
