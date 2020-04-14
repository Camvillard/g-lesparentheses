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

const { $bodyFont, $accentFont } = themeFonts

interface IButtonSimpleProps {
  fontColor?: string
}

interface IButtonPlainProps {
  bgColor: string
}

export const ButtonBlock = styled.div`
  display: block;
`

export const ButtonPlain = styled.a`
  background: ${(props: IButtonPlainProps) => props.bgColor};
  text-align: center;
  color: white;
  font-family: ${$bodyFont};
  text-transform: uppercase;
  padding: 4px 24px;
`

export const Button = styled.a`
  transition: 0.3s;
`

export const ButtonSimple = styled(Button)`
  text-transform: uppercase;
  font-family: ${$bodyFont};
  font-size: 1.4rem;
  position: relative;
  color: ${(props: IButtonSimpleProps) => props.fontColor || oldPink};

  &:after {
    transition: 0.3s;
    position: absolute;
    bottom: -4px;
    left: 0;
    content: "";
    width: 28px;
    height: 3px;
    background: ${(props: IButtonSimpleProps) => props.fontColor || oldPink};
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
