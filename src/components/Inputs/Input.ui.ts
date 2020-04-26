import styled from "styled-components"
import { themeColors, themeFonts } from "../../theme/themeVariables"

const { darkGray, gray, mediumGray, lightGray, oldPink } = themeColors
const { accentFont, bodyFont } = themeFonts

export const InputGroupWrapper = styled.div`
  margin: 16px 0;
`
export const TextareaGroupWrapper = styled.div`
  margin: 16px 0;
`

export const InputWrapper = styled.div`
  display: flex;
  border-bottom: 2px solid ${darkGray};
  padding: 6px 0;
`
export const TextareaWrapper = styled.div``

export const Textarea = styled.textarea`
  display: block;
  min-height: 12vh;
  width: 100%;
  border: none;
  border-bottom: 2px solid ${darkGray};
  font-size: 1.4rem;
  color: ${(props: InputProps) => (props.isValidated ? "white" : darkGray)};
  background: ${(props: InputProps) =>
    props.isValidated ? darkGray : "white"};
  font-weight: 300;
  padding-left: 8px;
  ::placeholder {
    font-size: 1.2rem;
    font-weight: 400;
    font-family: ${accentFont};
    color: ${mediumGray};
  }
`

type InputProps = {
  isValidated: boolean
}
export const Input = styled.input`
  font-size: 1.4rem;
  flex-grow: 1;
  border: none;
  display: block;
  padding-left: 8px;
  margin-left: 4px;
  color: ${(props: InputProps) => (props.isValidated ? "white" : darkGray)};
  background: ${(props: InputProps) =>
    props.isValidated ? darkGray : "white"};
  font-weight: 300;
  font-family: ${bodyFont};
  ::placeholder {
    font-size: 1.2rem;
    font-weight: 400;
    font-family: ${accentFont};
    color: ${mediumGray};
  }

  &:hover {
    background: ${(props: InputProps) =>
      props.isValidated ? darkGray : lightGray};
    outline: none;
    ::placeholder {
      color: white;
    }
  }

  &:focus {
    outline: 1px solid ${lightGray};
    outline-offset: 1px;
  }
`
export const InputError = styled.p`
  margin: 4px 0;
  font-size: 1.2rem;
  color: ${oldPink};
`
