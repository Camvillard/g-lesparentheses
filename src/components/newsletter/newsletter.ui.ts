import styled from "styled-components"
import { themeBreakpoints, themeColors } from "../../theme/themeVariables"

const { oldPink } = themeColors
const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

export const NewsletterMainContainer = styled.div`
  padding: 16px;
  width: 92vw;
  background: ${oldPink};
  margin-bottom: 54px;
  margin-top: 56px;

  @media (min-width: ${smScreen}) {
  }

  @media (min-width: ${mdScreen}) {
  }

  @media (min-width: ${lgScreen}) {
  }
`

export const NewsletterSectionTitle = styled.p`
  margin-top: -40px;
  @media (min-width: ${smScreen}) {
  }

  @media (min-width: ${mdScreen}) {
  }

  @media (min-width: ${lgScreen}) {
  }
`

// export const NewsletterForm = styled(FromStroked)`
//   input[type="submit"] {
//     margin-left: calc(100% - 77px);
//     text-align: right;
//     border-bottom: 0;
//     margin-top: 1rem;
//   }
//   @media (min-width: ${smScreen}) {
//   }

//   @media (min-width: ${mdScreen}) {
//   }

//   @media (min-width: ${lgScreen}) {
//   }
// `
