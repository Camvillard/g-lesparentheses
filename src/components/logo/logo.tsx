import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from 'styled-components';
import { Accent } from "../../theme/globalstyle";
import {
  themeColors,
  themeBreakpoints,
  themeFonts
} from '../../theme/style-variables';

const {
  xsmScreen,
  smScreen,
  mdScreen,
  lgScreen,
  xlgScreen
} = themeBreakpoints;

const LogoContainer = styled.header`
  width: 72%;
  margin: 24px auto;
  position: relative;
  @media(min-width: ${smScreen}) {
    width: 42%;
    margin-top: 32px;
  }
  @media(min-width: ${mdScreen}) {
    width: 32%;
  }
  @media(min-width: ${lgScreen}) {
    width: 22%;
  }
`

const LogoTagline = styled(Accent)`
  position: absolute;
  bottom: 20px;
  right: 52px;
  color: 
`

const Logo = () => {
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
    <LogoContainer>
      <Image
        fluid={data.file.childImageSharp.fluid}
        alt="Gatsby Docs are awesome"
        className="logo-image"
      />
      <LogoTagline>
      histoires & ponctuation
      </LogoTagline>
    </LogoContainer>
  )
}

export default Logo
