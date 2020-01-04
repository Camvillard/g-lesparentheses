import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import { themeColors, themeBreakpoints, themeFonts } from "./style-variables"

const {
  lightPink,
  oldPink,
  forestGreen,
  lightGray,
  mediumGray,
  gray,
  darkGray,
} = themeColors

const { europaFont, gemeliFont } = themeFonts

const { mdScreen, lgScreen } = themeBreakpoints

export const Accent = styled.p`
  font-family: ${gemeliFont};
`

export const GlobalStyle = createGlobalStyle`
  @import url("https://use.typekit.net/pjh5yca.css");

  :root {
    font-size: 62.5%;
  }

  html {
    box-sizing: border-box;
    overflow-y: scroll;
  }

  * {
    box-sizing: border-box;
  }
  
  *:before {
    box-sizing: border-box;
  }
  
  *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
    font-family: ${europaFont};
    color: ${gray};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0.3em auto 0.1em;
    font-family: ${europaFont};
    color: ${darkGray};
    font-weight: 700;
    line-height: 1.1;
  }

  h1 {
    font-size: 4.2rem;
  }

  h2 {
    font-size: 3.8rem;
  }

  h3 {
    font-size: 3.4rem;
  }

  h4 {
    font-size: 2.8rem;
  }

  h5 {
    font-size: 2.4rem;
  }

  h6 {
    font-size: 2rem;
  }

  p, li {
    margin: 0.3em auto 0.8em;
    font-family: ${europaFont};
    color: ${gray};
    font-weight: 300;
    font-size: 1.4rem;
  }

  em, a {
    font-family: ${gemeliFont};
    font-size: 1.4rem;
  }

  a {
    text-decoration: none;
    color: ${oldPink};
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
  
  img {
    max-width: 100%;
    margin: 0;
    padding: 0;
  }

  @media (min-width: ${mdScreen}) {

    h1 {
      font-size: 5.2rem;
    }

    h2 {
      font-size: 4.4rem;
    }

    h3 {
      font-size: 3.8rem;
    }

    h4 {
      font-size: 3.2rem;
    }

    h5 {
      font-size: 2.8rem;
    }

    h6 {
      font-size: 2.4rem;
    }
  
    p, li, em, a {
      font-size: 1.6rem;
    }
  } 

  @media (min-width: ${lgScreen}) {

    h1 {
      font-size: 5.8rem;
    }

    h2 {
      font-size: 5rem;
    }

    h3 {
      font-size: 4.4rem;
    }

    h4 {
      font-size: 3.8rem;
    }

    h5 {
      font-size: 3.2rem;
    }

    h6 {
      font-size: 2.8rem;
    }

    p, li, em, a {
      font-size: 1.8rem;
    }
  
    p.accent-text,
    .accent-text {
      font-size: 1.6rem;
    }
  } 



`
