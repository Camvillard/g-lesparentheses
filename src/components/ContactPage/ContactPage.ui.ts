import styled, { keyframes } from "styled-components"
import { Header1 } from "../Headers/Headers.ui"
import {
  themeColors,
  themeFonts,
  themeBreakpoints,
} from "../../theme/themeVariables"
import { ButtonSimple } from "../Buttons/Buttons.ui"

const { darkGray } = themeColors
const { accentFont, bodyFont } = themeFonts
const { smScreen, mdScreen, lgScreen } = themeBreakpoints

export const ContactPageWrapper = styled.div`
  width: 90%;
  margin: auto;
`

export const ContactPageTitle = styled(Header1)`
  font-size: 2.4rem;
`

export const ContactDisclaimer = styled.p`
  color: white;
  @media (min-width: ${smScreen}) {
    max-width: 60vw;
    margin-left: 0;
  }
  @media (min-width: ${mdScreen}) {
    max-width: 50vw;
  }
`

export const ContactForm = styled.form``

export const ContactInput = styled.input`
  border: none;
  background: ${darkGray};
  color: white;
  font-family: ${bodyFont};
  font-size: 5.2rem;
  font-weight: 700;
  width: 100%;
  ::placeholder {
    font-family: ${bodyFont};
    font-size: 5.2rem;
    -webkit-text-stroke: 1px white;
    -webkit-text-fill-color: ${darkGray};
  }
  &:hover,
  &:focus,
  &:active {
    outline: none;
  }
  @media (min-width: ${smScreen}) {
    font-size: 9.2rem;
    ::placeholder {
      font-size: 9.2rem;
    }
  }
`
export const ContactTextarea = styled.textarea`
  border: none;
  background: ${darkGray};
  color: white;
  font-size: 5.2rem;
  font-family: ${bodyFont};
  font-weight: 700;
  width: 100%;
  height: 100%;
  ::placeholder {
    font-family: ${bodyFont};
    font-size: 5.2rem;
    font-weight: 700;
    -webkit-text-stroke: 1px white;
    -webkit-text-fill-color: ${darkGray};
  }
  &:hover,
  &:focus,
  &:active {
    outline: none;
  }
  @media (min-width: ${smScreen}) {
    font-size: 9.2rem;
    ::placeholder {
      font-size: 9.2rem;
    }
  }
`

const fillWithColor = keyframes`
  0% {
    width: 12px;
  }

  25% {
    width: 22px;
  }
  50% {
    width: 40px;

  }
  100% {
    width: 100%;
  }
`

// button::before {
//   content: "";
//   position: absolute;
//   top: 0px;
//   bottom: 0px;
//   left: 0px;
//   width: 3px;
//   background: $dark-blue;
//   transition: all 0.5s ease;
//   z-index: -1;
// }

// button:hover {
//   color: white;
//   &::before {
//   transform: translateX(110px);
//   background: white;
//     // transform: scaleX(50);
//     // width: 100%;
//   }
// }

// export const ContactButton = styled(ButtonSimple)``
export const ContactButton = styled.button`
  -webkit-appareance: none;
  border: none;
  background: none;
  font-family: ${bodyFont};
  font-size: 5.2rem;
  font-weight: 700;
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: ${darkGray};
  position: relative;
  transition: 0.4s;
  padding: 0;
  &:hover {
    cursor: pointer;
    -webkit-text-fill-color: white;
  }
  &:focus {
    outline: none;
  }
  @media (min-width: ${smScreen}) {
    font-size: 9.2rem;
    ::placeholder {
      font-size: 9.2rem;
    }
  }
`

export const SuccessText = styled.p`
  color: white;
  font-size: 3.2rem;
`
