import React from "react"
import {
  AboutSectionWrapper,
  AboutHeader,
  AboutContent,
  AboutLink,
  AboutLinkWrapper,
} from "./AboutSection.ui"
import { Grid, GridElement } from "../Grid/Grid.ui"
import { themeColors } from "../../theme/themeVariables"

const { forestGreen, darkGray } = themeColors

type AboutSectionProps = {}

const AboutSection = (props: AboutSectionProps) => {
  return (
    <AboutSectionWrapper>
      <AboutHeader color={darkGray}>à propos.</AboutHeader>
      <Grid
        columns={{ default: "repeat(4, 1fr)", lg: "repeat(12, 1fr)" }}
        align={"end"}
      >
        <GridElement columns={{ default: "span 3", lg: "2 / span 4" }}>
          <AboutContent>
            je m’appelle camille, j’ai trente et quelques années et mon
            acceptation de cet âge est environ égal à mon dégoût des betteraves
            – à égalité avec mon incompréhension face aux personnes qui aiment
            les Pim’s à l’orange.
          </AboutContent>
          <AboutContent>
            dans la vie, je suis principalement développeuse front-end chez
            Décathlon et directrice artistique en free-lance, mais je fais plein
            d'autrs petits trucs en plus ; ce qui me permet de faire de longs
            monologues lorsqu’on me demande mon travail (ce qui ne me plait pas
            forcément parce que je n’aime pas beaucoup parler de moi, même si ce
            à propos laisse à penser le contraire).
          </AboutContent>
        </GridElement>
        <GridElement
          columns={{ default: "2 / span 3", lg: "6 / span 4" }}
          margin={{ default: "8px 0", lg: "0" }}
        >
          <AboutContent>
            j’habite à Montréal depuis quelques années et pour l’instant, j’aime
            suffisamment la neige pour avoir envie d’y rester, et comme on parle
            de Montréal, j’en profite pour vous dire que la ville souterraine
            dont parlent les guides touristiques n’existe pas.
          </AboutContent>
          <AboutContent>
            je suis extrêmement intolérante envers les erreurs typographiques,
            mais comme je suis tout aussi pleine de contradictions, je n’aime
            pas beaucoup les majuscules et je m’en passe un peu trop souvent.
          </AboutContent>
        </GridElement>
        <GridElement columns={{ default: "2 / span 3" }}>
          <AboutLink textcolor={forestGreen} to={"/a-propos"}>
            lire toute l'autobiographie.
          </AboutLink>
        </GridElement>
      </Grid>
    </AboutSectionWrapper>
  )
}

export default AboutSection
