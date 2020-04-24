import React, { useState } from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO/SEO.component"
import { GlobalStyle } from "../theme/globalstyle"
import {
  AboutPageContainer,
  AboutContentWrapper,
  AboutMenuElement,
  AboutMenu,
  AboutPageTitle,
  AboutSectionContent,
  AboutSectionTitle,
  AboutContentHeader,
  AboutSectionParagraph,
  TopSection,
} from "../components/AboutPage/AboutPage.ui"
import { BackIcon } from "../components/Icons/BackIcon.component"

type AboutProps = {
  data: any
  location: string
}

const AboutPage = (props: AboutProps) => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const [sectionIsOpen, setOpenSection] = useState("")
  const [isInfosOpen, openInfos] = useState(false)
  const [isProInfosOpen, openProInfos] = useState(false)
  const [isRandomFactsOpen, openRandomFacts] = useState(false)

  type Section = "infos" | "pro" | "random" | ""

  const openSection = (section: Section) => {
    switch (section) {
      case "infos":
        setOpenSection("infos en vrac.")
        openProInfos(false)
        openRandomFacts(false)
        return openInfos(true)
      case "pro":
        setOpenSection("les trucs pro.")
        openInfos(false)
        openRandomFacts(false)
        return openProInfos(true)
      case "random":
        setOpenSection("randoms facts.")
        openInfos(false)
        openProInfos(false)
        return openRandomFacts(true)
    }
  }

  const closeAll = () => {
    setOpenSection("")
    openInfos(false)
    openProInfos(false)
    openRandomFacts(false)
  }

  return (
    <AboutPageContainer>
      <GlobalStyle />
      <SEO title="a propos" />
      <AboutContentWrapper>
        <AboutContentHeader isUp={sectionIsOpen}>
          <TopSection isUp={sectionIsOpen}>
            <AboutPageTitle color={"white"} isUp={sectionIsOpen}>
              à propos de moi.
            </AboutPageTitle>
            <AboutMenu isUp={sectionIsOpen}>
              <AboutMenuElement
                onClick={() => openSection("infos")}
                displayTitle={!isInfosOpen}
              >
                les infos générales
              </AboutMenuElement>
              <AboutMenuElement
                onClick={() => openSection("pro")}
                displayTitle={!isProInfosOpen}
              >
                les trucs pros
              </AboutMenuElement>
              <AboutMenuElement
                onClick={() => openSection("random")}
                displayTitle={!isRandomFactsOpen}
              >
                fun facts
              </AboutMenuElement>
            </AboutMenu>
          </TopSection>
          <AboutSectionTitle
            displayTitle={isInfosOpen || isProInfosOpen || isRandomFactsOpen}
          >
            <BackIcon onClickBack={() => closeAll()} sizeRatio={2} />
            {sectionIsOpen}
          </AboutSectionTitle>
        </AboutContentHeader>

        <AboutSectionContent displaySection={isInfosOpen}>
          <AboutSectionParagraph>
            je m’appelle camille, j’ai environ, approximativement, aux alentours
            d’un peu plus de 30 ans, mais je n’aime pas beaucoup en parler. Et
            comme tout le monde n’a de cesse de me répéter que je fais bien plus
            jeune, je m’en tiens à ça.
          </AboutSectionParagraph>
          <AboutSectionParagraph>
            je suis née au Chili, qui est le plus des pays du monde, même si je
            suis bien forcée d’admettre que ce n’est là que mon chauvinisme qui
            parle, puisque je n’ai pas vraiment eu l’occasion de tant explorer
            mon pays que ça.
          </AboutSectionParagraph>
          <AboutSectionParagraph>
            j’habite à Montréal. il fait souvent très froid, il fait souvent
            très chaud. on pourrait croire que cela fait en moyenne, mais en
            fait, pas du tout. néanmoins, la vie est douce, là bas, même si
            acheter du pain et du vin demande une reflexion financière
            importante.
          </AboutSectionParagraph>
          <AboutSectionParagraph>
            j’aime bien faire du sport, j'ai couru un marathon à l'aube de mes
            30 ans et ça m'a rendue suffisamment fière pour que je porte
            l'affreux coupe-vent rouge qui nous a été offert à la fin, même si
            le rouge ne me va pas. j,ai tendance à mettre des parenthèses dans
            toutes mes phrases et curisuement, jusqu'à présent dans cet à
            propos, il n'y en a aucune. d'habitude je suis très forte en
            orthographe, mais depuis que petit a je parle et écris en anglais
            tous les jours et petit b, j'ai délaissé ce blog, je suis vraiment
            une calamité et je fais des fautes partout, il faudra m'en excuser
            (mais remontez moi les fautes, surtout si c'est toi, maman, qui me
            lit.)
          </AboutSectionParagraph>
          <AboutSectionParagraph>
            enfin pour finir, j'ai un chat adorable qui nous a empêchés de
            dormir pendant environ 8 mois, avat qu'on se décide à acheter un
            distributeur automatique de croquettes, je voue un culte sans limite
            à Carrie Mathison et aux muffins anglais de mon amie Esme, je ne
            mets jamais de rouge à lèvres même si j'aimerai beaucoup, mais j'ai
            la bouhe un petit peu trop fine à mon goût pour oser porter du rouge
            vif, quel drame, et je perds souvent le fil de mes phrases.
          </AboutSectionParagraph>
        </AboutSectionContent>
        <AboutSectionContent displaySection={isProInfosOpen}>
          <AboutSectionParagraph>
            mon parcours professionel n'a rien à envie à [insérer un exemple
            mais je n'en ai pas trouvé encore pour le moment, contactez-moi si
            vous avez une idée], parce que j'ai eu un diplôme d'architecte, mais
            en fait j,ai pas aimé, alors je suis devenue graphiste puis
            directrice artistique mais ça m'a pas suffit, alors je uis devenue
            développeuse web et pour le moment, on dirait que ça me convient.
          </AboutSectionParagraph>
          <AboutSectionParagraph>
            je travaille chez Decathlon (à fond la forme) et je suis très
            contente parce qu'avant de travailler chez eux, cela faisait environ
            10 ans que mon rêvem c'était de travailler là bas. alors bon, comme
            quoi, il faut toujours croire plus ou moins en ses rêves, hein. je
            m'occupe de faire du développement frontend, c'est à dire de coder
            les interfaces que vous, amis utilisateurs, voyez. cest vraiment
            très chouette.
          </AboutSectionParagraph>
          <AboutSectionParagraph>
            puisqu'on parle de travail, hein, j'ai une affection particulière
            pour Javascript et j'utilise surtout React dans la vie de tous les
            jours. ce site est devloppé comme ça, en utilisant GatsbyJS comme
            framework. parfois je fais aussi un peu de backend, mais je suis
            vraiment moins bonne, et dans ce cas-là, j'utilise Ruby et le
            framwork Ruby on Rails, ou bien NodeJS, parce que bon, avec
            Javascripton peut tout faire et c'est très bien comme ça.
          </AboutSectionParagraph>
          <AboutSectionParagraph>
            parfois aussi, je prends des missions de freelance mais alors pour
            ça, il faut soit que vous ayez un budget foufou, soit que vous ayez
            du temps, soit que votre projet soit vraiment dingue, soit les trois
            à la fois.
          </AboutSectionParagraph>
        </AboutSectionContent>
        <AboutSectionContent displaySection={isRandomFactsOpen}>
          <AboutSectionParagraph>
            je déteste la betterave. genre, je déteste vraiment la betterave.
            lorsque j'habitais à Madrid, il y en avait vraiment trop souvent à
            la cantine et une fois, chez ma copine Julia, il y avait des
            betteraves à manger et comme on m'a toujours appris à toujours
            manger ce qu'il y a dans mon assiette chez les autres, j'avais tout
            mangé et j'ai tout vomi après. bref, je déteste vraiment les
            betteraves.
          </AboutSectionParagraph>
          <AboutSectionParagraph>
            je déteste aussi les Pim's à l'orange, mais ça c'est juste parce que
            c'est vraiment as bon, pas d'anecdote à raconter à ce sujet,
            j'espère que vous ne m'en voudrez pas.
          </AboutSectionParagraph>
          <AboutSectionParagraph>
            je me suis mariée après 8 mois de relation et c'était vraiment une
            des plus belles journées de ma vie (mais j'espère qu'il y en aura
            d'autres des belles comme ça).
          </AboutSectionParagraph>
          <AboutSectionParagraph>
            j'ai un chat adorable mais je crois que j'en ai déjà parlé.
          </AboutSectionParagraph>
        </AboutSectionContent>
      </AboutContentWrapper>
    </AboutPageContainer>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
