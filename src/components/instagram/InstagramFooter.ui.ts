import styled from "styled-components"
import { themeColors, themeBreakpoints } from "../../theme/themeVariables"
import { Flexbox } from "../Containers/Flexbox.ui"

const {
  lightPink,
  oldPink,
  forestGreen,
  lightGray,
  mediumGray,
  gray,
  darkGray,
} = themeColors

const { smScreen, mdScreen, lgScreen } = themeBreakpoints

export const InstagramContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (min-width: ${smScreen}) {
  }

  @media (min-width: ${mdScreen}) {
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: ${lgScreen}) {
  }
`
export const InstagramImages = styled(Flexbox)`
  flex-wrap: wrap;

  a {
    width: 48%;
    margin: 1rem 1%;
  }

  @media (min-width: ${smScreen}) {
    margin-left: 32px;
    a {
      width: 31%;
    }
  }

  @media (min-width: ${mdScreen}) {
    margin-left: 40px;
  }

  @media (min-width: ${lgScreen}) {
    margin-left: 64px;
  }
`

export const InstagramPic = styled.img`
  width: 100%;
  border: 2px solid ${lightPink};
  @media (min-width: ${mdScreen}) {
    border: none;
  }
`
