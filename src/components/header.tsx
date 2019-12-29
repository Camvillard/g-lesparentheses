import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from 'styled-components';


const HeaderContainer = styled.header`
  width: 90%;
  margin: 24px auto;
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "lesparentheses_logo.png"}) {
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
    <HeaderContainer>
      <Image
        fluid={data.file.childImageSharp.fluid}
        alt="Gatsby Docs are awesome"
        className="logo-image"
      />
      <p className="header-tagline">histoires & ponctuation</p>
    </HeaderContainer>
  )
}

export default Header
