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

interface IHeaderProps {
  scale?: number
  color?: string
}

export const Header1 = styled.h1`
  color: ${(props: IHeaderProps) => props.color};
`

export const PageTitle = styled(Header1)<IHeaderProps>``

export const Header3 = styled.h3`
  color: ${(props: IHeaderProps) => props.color};
`
export const DarkHeader3 = styled.h3`
  color: ${darkGray};
`
