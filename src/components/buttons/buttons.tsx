import styled from 'styled-components';
import { themeColors } from '../../theme/style-variables';
import { themeBreakpoints } from '../../theme/style-breakpoints';
import { themeFonts } from '../../theme/style-fonts';

const {   lightPink,
  oldPink,
  forestGreen,
  lightGray,
  mediumGray,
  gray,
  darkGray} = themeColors;

const {
  xsmScreen,
  smScreen,
  mdScreen,
  lgScreen,
  xlgScreen
} = themeBreakpoints;

const { europaFont, gemeliFont} = themeFonts;

interface IButtonSimpleProps {
  fontColor?: string;
}

interface IButtonPlainProps {
  bgColor: string;
}

interface IButtonBlockProps {
  top: string;
  right: string;
  bottom: string;
  left: string;

}

export const ButtonBlock = styled.div`
  display: block;
`

export const ButtonPlain = styled.a`
  background: ${(props: IButtonPlainProps) => props.bgColor};
  text-align: center;
  color: white;
  font-family: ${europaFont};
  text-transform: uppercase;
  padding: 4px 24px;
`

export const Button = styled.a`
  transition: 0.3s;
`

export const ButtonSimple = styled(Button)`
  text-transform: uppercase;
  font-family: ${europaFont};
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

  @media(min-width: ${smScreen}) {
    font-size: 1.6rem;

    &:after {
      width: 32px;
    }
  }

  @media(min-width: ${lgScreen}) {
    font-size: 1.8rem;

    &:after {
      width: 34px;
    }
  }
`