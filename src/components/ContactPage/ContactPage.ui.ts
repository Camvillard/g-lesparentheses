import styled from "styled-components"
import { Header1 } from "../Headers/Headers.ui"
import { themeColors, themeFonts } from "../../theme/themeVariables"
import { ButtonSimple } from "../Buttons/Buttons.ui"

const { darkGray } = themeColors
const { accentFont, bodyFont } = themeFonts

export const ContactPageWrapper = styled.div`
  width: 90%;
  margin: auto;
`

export const ContactPageTitle = styled(Header1)`
  font-size: 2.4rem;
`

export const ContactDisclaimer = styled.p`
  color: white;
`

export const ContactForm = styled.form``

export const ContactInput = styled.input`
  border: none;
  background: ${darkGray};
  color: white;
  font-size: 5.2rem;
  font-family: ${bodyFont};
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
`
export const ContactTextarea = styled.textarea`
  border: none;
  background: ${darkGray};
  color: white;
  font-size: 5.2rem;
  font-family: ${bodyFont};
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
`
export const ContactButton = styled(ButtonSimple)``

export const SuccessText = styled.p`
  color: white;
  font-size: 3.2rem;
`
