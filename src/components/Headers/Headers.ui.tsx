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

type HeaderProps = {
  color?: string
}

export const Header1 = styled.h1`
  color: ${(props: HeaderProps) => props.color};
`

export const PageTitle = styled(Header1)``

export const Header3 = styled.h3`
  color: ${(props: HeaderProps) => props.color};
`
export const DarkHeader3 = styled.h3`
  color: ${darkGray};
`

export const HomepageSectionTitle = styled(Header3)`
  font-size: 4.8rem;
  max-width: 72vw;
  margin-left: 0;
`
