import styled from 'styled-components';
import { Link } from 'gatsby';
import React from 'react';
import { ButtonBlock } from './buttons';
import {
  themeColors,
  themeBreakpoints,
  themeFonts
} from '../../theme/style-variables';

const { oldPink } = themeColors;
const { smScreen } = themeBreakpoints;
const { europaFont } = themeFonts


const ButtonReadMoreContainer = styled(ButtonBlock)`
  text-align: center;
  width: 90%;
  margin: 48px auto 64px;
  a {
    font-size: 4.8rem;
    font-family: ${europaFont};
    font-weight: 700;
    border-bottom: 4px solid ${oldPink};
  }

  @media(min-width: ${smScreen}) {
    width: 100%;
    padding: 24px 0;
    a {
      font-size: 7.8rem;
      color: ${oldPink};
    }
  }
`

export const ButtonReadMore = () => {
  return(
    <ButtonReadMoreContainer>
      <Link to="/articles" className="button-block">
        lire plus d'articles
      </Link>
    </ButtonReadMoreContainer>
  )
}