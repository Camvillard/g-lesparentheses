import styled from "styled-components"
import { MainContainer } from "../Containers/MainContainer.ui"
import { Header3 } from "../Headers/Headers.ui"
import { Accent } from "../../theme/globalstyle"
import { Link } from "gatsby"
import { ButtonLinkSimple } from "../Buttons/Buttons.ui"
import { HomepageSectionTitle } from "../Homepage/Homepage.ui"

export const AboutSectionWrapper = styled(MainContainer)`
  margin: auto;
`

export const AboutHeader = styled(HomepageSectionTitle)`
  margin-bottom: 2rem;
`

export const AboutContent = styled(Accent)``

export const AboutLinkWrapper = styled.div``

export const AboutLink = styled(ButtonLinkSimple)``
