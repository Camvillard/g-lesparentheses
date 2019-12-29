import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import { MainContainer } from "./containers/main-container";
import { Accent } from "../theme/globalstyle";
import { GreyHeader3 } from "./headers/headers";

const AboutContainerComponent = styled(MainContainer)`
  width: 80%;
  margin: auto;
`
const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
`

const AboutGreyHeader3 = styled(GreyHeader3)`
  font-size: 4.2rem;
  margin-bottom: 2rem;
  padding-left: 12px;
`

const AboutContent = styled(Accent)`

`

const AboutColumn = styled.div`
  grid-column: ${(props: any) => props.col ? props.col : ""}
`

class AboutContainer extends React.Component {
  render() {
    return (
      <AboutContainerComponent>
        <AboutGreyHeader3>à propos</AboutGreyHeader3>
        <div className="grid">
          <AboutGrid>
            <AboutColumn col={"1 / span 3"}>

              <AboutContent>
                je m’appelle camille, j’ai trente et quelques années et mon acceptation de cet âge est environ égal à mon dégoût des betteraves – à égalité avec mon incompréhension face aux personnes qui aiment les Pim’s à l’orange.
              </AboutContent>
              <AboutContent>
                dans la vie, je suis principalement développeuse front-end chez Décathlon et directrice artistique en free-lance, mais je suis aussi un petit peu prof de code (de code avec des lignes de code, pas de code de savoir si le panneau cédez le passage est rond ou triangulaire) pour Le Wagon et un petit peu créatrice de contenus aussi ; ce qui me permet de faire de longs monologues lorsqu’on me demande mon travail (ce qui ne me plait pas forcément parce que je n’aime pas beaucoup parler de moi, même si ce à propos laisse à penser le contraire).
              </AboutContent>

            </AboutColumn>
            <AboutColumn col={"2 / span 3"}>

              <AboutContent>
                j’habite à Montréal depuis quelques années et pour l’instant, j’aime suffisamment la neige pour avoir envie d’y rester, et comme on parle de Montréal, j’en profite pour vous dire que la ville souterraine dont parlent les guides touristiques n’existe pas.
              </AboutContent>
              <AboutContent>
                je suis extrêmement intolérante envers les erreurs typographiques, mais comme je suis tout aussi pleine de contradictions, je n’aime pas beaucoup les majuscules et je m’en passe un peu trop souvent.
              </AboutContent>
              <Link to="/a-propos" className="button-simple accent">en savoir plus</Link>
            </AboutColumn>

          </AboutGrid>


         </div>


      </AboutContainerComponent>
    )
  }
}

export default AboutContainer
