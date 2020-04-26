import styled from "styled-components"
import { themeColors, themeFonts } from "../../theme/themeVariables"

const { darkGray, gray, mediumGray, lightGray, oldPink } = themeColors
const { accentFont, bodyFont } = themeFonts

export const InputGroupWrapper = styled.div`
  margin: 24px 0;
`

export const InputWrapper = styled.div`
  display: flex;
  border-bottom: 2px solid ${darkGray};
  padding: 6px 0;
`

type InputProps = {
  isValidated: boolean
}
export const Input = styled.input`
  flex-grow: 1;
  border: none;
  display: block;
  padding-left: 8px;
  margin-left: 4px;
  color: white;
  background: ${(props: InputProps) => (props.isValidated ? darkGray : "none")};
  font-weight: 300;
  font-family: ${bodyFont};
  ::placeholder {
    font-weight: 400;
    font-family: ${accentFont};
    color: ${mediumGray};
  }

  &:hover {
    background: ${darkGray};
    outline: none;
    ::placeholder {
      color: white;
    }
  }
`
export const InputError = styled.p`
  margin: 4px 0;
  font-size: 1.2rem;
  color: ${oldPink};
`
