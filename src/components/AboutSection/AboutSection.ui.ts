import styled from "styled-components"
import { MainContainer } from "../Containers/MainContainer.ui"
import { Header3 } from "../Headers/Headers.ui"
import { Accent } from "../../theme/globalstyle"
import { Link } from "gatsby"
import { ButtonLinkSimple } from "../Buttons/Buttons.ui"

export const AboutSectionWrapper = styled(MainContainer)`
  margin: auto;
`

export const AboutHeader = styled(Header3)`
  font-size: 4.2rem;
  margin-bottom: 2rem;
  padding-left: 12px;
`

export const AboutContent = styled(Accent)``

export const AboutLinkWrapper = styled.div``

export const AboutLink = styled(ButtonLinkSimple)``
