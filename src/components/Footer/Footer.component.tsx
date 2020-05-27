import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { themeFonts, themeColors } from "../../theme/themeVariables"

const { bodyFont } = themeFonts
const { darkGray } = themeColors

const FooterWrapper = styled.footer`
  width: 80vw;
  margin: 120px auto 48px;
`

const FooterLegal = styled.div`
  // text-align: center;
`

const FooterLink = styled(Link)`
  font-family: ${bodyFont};
  font-weight: 300;
  margin: 0 4px;
  font-size: 1.2rem;
  text-transform: uppercase;
`
const FooterBrand = styled.div`
  margin-top: 18px;
`

const BrandText = styled.p`
  font-size: 1.2rem;
  margin: 2px 0;
  color: ${darkGray};
`

const DesignText = styled.p`
  font-size: 1.2rem;
  margin-top: 12px;
  position: relative;
  &:before {
    content: "";
    width: 24px;
    height: 1px;
    background: ${darkGray};
    position: absolute;
    top: -6px;
    left: 0;
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLegal>
        <FooterLink to={"/"}>mentions legales</FooterLink>
        <FooterLink to={"/"}>confidentialité</FooterLink>
      </FooterLegal>
      <FooterBrand>
        <BrandText>© {new Date().getFullYear()} - les parenthèses</BrandText>
        <BrandText>
          tout le contenu m'appartient, merci de ne rien voler.
        </BrandText>
        <DesignText>
          design, developpement et ponctuation par cdlbisou (c'est moi)
        </DesignText>
      </FooterBrand>
    </FooterWrapper>
  )
}

export default Footer
