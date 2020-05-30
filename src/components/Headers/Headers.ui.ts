import styled from "styled-components"
import {
  themeColors,
  themeBreakpoints,
  themeFonts,
} from "../../theme/themeVariables"

const {
  lightPink,
  oldPink,
  forestGreen,
  lightGray,
  mediumGray,
  gray,
  darkGray,
} = themeColors

const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

const { bodyFont, accentFont } = themeFonts

interface HeaderProps {
  color?: string
}

export const Header1 = styled.h1<HeaderProps>`
  color: ${props => props.color};
`

export const Header3 = styled.h3<HeaderProps>`
  color: ${props => props.color};
`
export const PageTitle = styled(Header1)`
  font-size: 2.2rem;
`
