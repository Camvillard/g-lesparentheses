import React from "react"
import { Link } from "gatsby"


class AboutContainer extends React.Component {
  render() {
    return (
      <div className="about-container homepage-section">
        <h3>à propos</h3>
        <div className="grid">

            <div className="column md-4 lg-6">
              <p className="about-content accent-text">
              je m’appelle camille, j’ai trente et quelques années et mon acceptation de cet âge est environ égal à mon dégoût des betteraves – à égalité avec mon incompréhension face aux personnes qui aiment les Pim’s à l’orange.
              </p>
              <p className="about-content accent-text">
              dans la vie, je suis principalement développeuse front-end et directrice artistique, mais je suis aussi un petit peu prof de code (de code avec des lignes de code, pas de code de savoir si le  panneau cédez le  passage est rond ou triangulaire) et un petit peu créatrice de contenus aussi ; ce qui me permet de faire de longs monologues lorsqu’on me demande mon travail (ce qui ne me plait pas forcément parce que je n’aime pas beaucoup parler de moi, même si ce à propos laisse à penser le contraire).
              </p>
            </div>

            <div className="column md-4 lg-6">
              <p className="about-content accent-text">
                j’habite à Montréal depuis quelques années et pour l’instant, j’aime suffisamment la neige pour avoir envie d’y rester, et comme on parle de Montréal, j’en profite pour vous dire que la ville souterraine dont parlent les guides touristiques n’existe pas.
              </p>
              <p className="about-content accent-text">
                je suis extrêmement intolérante envers les erreurs typographiques, mais comme je suis tout aussi pleine de contradictions, je n’aime pas beaucoup les majuscules et je m’en passe un peu trop souvent.
              </p>
              <div className="button-block">
                <Link to="/a-propos" className="button-simple accent">en savoir plus</Link>
              </div>

            </div>

         </div>


      </div>
    )
  }
}

export default AboutContainer
