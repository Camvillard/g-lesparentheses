// external librairies
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


// internal stuff

// styles & assets


const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath:  {eq: "lesparentheses_logo.png"}) {
         id
          childImageSharp {
            id
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
       }
    }
  `)
  return (
    <header>
      <Image
        fluid={data.file.childImageSharp.fluid}
        alt="Gatsby Docs are awesome"
        className="logo-image"
      />
      <p className="header-tagline">histoires & ponctuation</p>
    </header>
  )
}

export default Header
