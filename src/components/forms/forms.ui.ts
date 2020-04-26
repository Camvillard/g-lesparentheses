import styled from "styled-components"
import {
  themeFonts,
  themeBreakpoints,
  themeColors,
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
const { bodyFont, accentFont } = themeFonts

const { mdScreen } = themeBreakpoints

// export const Label = styled.label`
//   font-size: 1.4rem;
// `

// export const FromStroked = styled.form`
//   padding: 16px 0;

//   input {
//     padding: 4px 8px;
//     border-bottom: 1px solid ${darkGray};
//     width: 100%;
//     font-family: ${accentFont};

//     ::placeholder {
//       color: ${darkGray};
//       opacity: 1;
//       font-family: ${accentFont};
//     }
//   }

//   input[type="submit"] {
//     border: none;
//     width: auto;
//     background: none;
//     border-bottom: 1px solid ${darkGray};
//   }

//   input:hover,
//   input:focus,
//   input:active {
//     background: ${darkGray};
//     color: white;
//     outline: none;
//   }
// `
