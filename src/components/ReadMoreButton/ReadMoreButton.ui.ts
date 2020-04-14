import styled from "styled-components"
import { ButtonBlock } from "../Buttons/Buttons.ui"
import { Link } from "gatsby"
import {
  themeFonts,
  themeColors,
  themeBreakpoints,
} from "../../theme/themeVariables"

const { $bodyFont } = themeFonts
const { oldPink } = themeColors
const { smScreen } = themeBreakpoints

export const ReadMoreButtonContainer = styled(ButtonBlock)`
  text-align: center;
  width: 100%;
  margin: 48px auto 64px;

  @media (min-width: ${smScreen}) {
    width: 100%;
    padding: 24px 0;
  }
`
export const ReadMoreLink = styled(Link)`
  font-size: 7.2rem;
  line-height: 1.05;
  font-family: ${$bodyFont};
  font-weight: 800;
  -webkit-text-stroke: 1px ${oldPink};
  -webkit-text-fill-color: white;
  transition: 0.4s;

  &:focus,
  &:active {
    -webkit-text-fill-color: ${oldPink};
    outline: none;
  }

  // @media (min-width: ${smScreen}) {
  //   a {
  //     font-size: 7.8rem;
  //     color: ${oldPink};
  //   }
  // }
`
