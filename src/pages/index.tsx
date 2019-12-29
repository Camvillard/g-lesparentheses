import React from "react"
import { Link, graphql } from "gatsby"
import { FaPen } from "react-icons/fa";

import Layout from "../components/layout"
import SEO from "../components/seo"

import HomepagePostCard from "../components/post-cards/homepage-post-card";
import PetitesParenthesesCard from "../components/post-cards/petites-parentheses-card";
import AboutContainer from "../components/about-container";
import LastPostCard from "../components/post-cards/last-post-card";
import SecondPostCard from "../components/post-cards/second-post-card";
import ThirdPostCard from "../components/post-cards/third-post-card";
import FourthPostCard from "../components/post-cards/fourth-post-card";
import { HomepageSection } from "../components/containers/homepage-containers";
import { ButtonReadMore } from "../components/buttons/button-more";

interface IProps{
  data: any;
}
interface IState{}

class BlogIndex extends React.Component <IProps, IState>{

  onInputChange = (e) => {
    const elementToToggle = e.target.dataset.toggle
    console.log(elementToToggle)
    document.querySelector(elementToToggle).classList.add('move-input')
  };

  onInputValidation = (e) => {
    if (e.target.value) {
      e.target.classList.add('validated')
    }
  };

  onFormSubmit = (e) =>  {
    e.preventDefault()
    console.log("will validate your form")
  };

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} pageName={"homepage"} title={siteTitle}>
        <SEO title="All posts" />

        <HomepageSection>
          <LastPostCard />
          <SecondPostCard />
          <ThirdPostCard />
          <FourthPostCard />
        </HomepageSection>

        <ButtonReadMore />
        
        <AboutContainer />

        <div className="main-container petites-parentheses-container homepage-section">

          <h2 className="section-title column full-width">les petites parenthèses</h2>
          <p className="description">
          les petites parenthèses, ce sont tous ces petits textes sans forcément d'image ni même de ponctuation, mais qui en avaient marre de sommeiller dans mes petits carnets.
          </p>

          <div className="petites-parentheses-content grid">
            <PetitesParenthesesCard />
            <PetitesParenthesesCard />
            <PetitesParenthesesCard />
          </div>


        </div>

        <div className="homepage-section newsletter-container">
          <h2 className="section-title">infolettre.</h2>
          <p className="description">
          l’infolettre des parenthèses, c’est un peu comme une pochette surprise, parce que mon rythme de publication est 100% aléatoire.
          en revanche, je n’envoie jamais de spams. les spams sont, à l'instar des salades de betteraves, le premier fléau de l’humanité.
          </p>
          <form action="" className="form-stroke dark magic-form" onSubmit={this.onFormSubmit}>
             <input
               type="text"
               placeholder="adresse email /"
               onClick={this.onInputChange}
               onBlur={this.onInputValidation}
               data-toggle="#newsletter-email-input"/>
             <input
               type="submit"
               value="/ s'abonner"
               id="newsletter-email-input"/>
          </form>
        </div>

      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            description
          }
        }
      }
    }
  }
`
