import styled from "styled-components"
import {
  themeColors,
  themeBreakpoints,
  themeFonts,
} from "../../theme/themeVariables"
import { Link } from "gatsby"

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

interface IButtonLinkSimpleProps {
  fontcolor?: string
}

export const ButtonLinkBlock = styled(Link)`
  display: block;
`

export const ButtonLink = styled(Link)`
  transition: 0.3s;
`

type IButtonLinkPlainProps = {
  bgColor: string
}
export const ButtonLinkPlain = styled(ButtonLink)`
  background: ${(props: IButtonLinkPlainProps) => props.bgColor};
  text-align: center;
  color: white;
  font-family: ${bodyFont};
  text-transform: uppercase;
  padding: 4px 24px;
`

export const ButtonLinkSimple = styled(ButtonLink)`
  text-transform: uppercase;
  font-family: ${bodyFont};
  font-size: 1.4rem;
  position: relative;
  color: ${(props: IButtonLinkSimpleProps) => props.fontcolor || oldPink};

  &:after {
    transition: 0.3s;
    position: absolute;
    bottom: -4px;
    left: 0;
    content: "";
    width: 28px;
    height: 3px;
    background: ${(props: IButtonLinkSimpleProps) =>
      props.fontcolor || oldPink};
  }

  &:hover:after {
    width: 100%;
  }

  @media (min-width: ${smScreen}) {
    font-size: 1.6rem;

    &:after {
      width: 32px;
    }
  }

  @media (min-width: ${lgScreen}) {
    font-size: 1.8rem;

    &:after {
      width: 34px;
    }
  }
`
