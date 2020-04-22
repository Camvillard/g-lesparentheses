import styled from "styled-components"
import { Accent } from "../../theme/globalstyle"
import { themeColors, themeBreakpoints } from "../../theme/themeVariables"
import { Grid, GridElement, GridElementProps } from "../Grid/Grid.ui"
import { ButtonSimple } from "../Buttons/Buttons.ui"
import { Breakpoint } from "../../types/Breakpoint.type"

const { mediumGray, darkGray } = themeColors

const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

export const PostContainer = styled(Grid)`
  margin: 24px auto 64px;
`

type CardMetaProps = {
  columns: Breakpoint
}

export const CardMeta = styled(Accent)`
  font-size: 1.2rem;
  font-weight: 300;
  color: ${mediumGray};
  margin: 0;
  grid-column: ${(props: CardMetaProps) => props.columns?.default || ""};
  text-align: right;
  @media (min-width: ${smScreen}) {
    grid-column: ${(props: CardMetaProps) => props.columns?.sm || ""};
  }
`

export const FeaturedImageContainer = styled(GridElement)`
  position: relative;

  @media (min-width: ${mdScreen}) {
    width: 100%;
    margin: auto;
  }
`

export const FeaturedImage = styled.img`
  width: 100%;
  @media (min-width: ${mdScreen}) {
    max-height: 600px;
  }
`

export const FeturedImageOverlay = styled.div`
  background: linear-gradient(
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.4)
  );
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

interface PostTitleProps extends GridElementProps {
  fontSize?: string
  top?: Breakpoint
  left?: Breakpoint
}

export const PostTitle = styled.h2`
  position: relative;
  margin-top: ${(props: PostTitleProps) => props.top?.default || "0"};
  margin-left: ${(props: PostTitleProps) => props.left?.default || "0"};
  line-height: 1.05;
  grid-column: ${(props: PostTitleProps) => props.columns.default};
  a {
    color: ${darkGray};
    font-size: 1em;
  }

  @media (min-width: ${smScreen}) {
    grid-column: ${(props: PostTitleProps) => props.columns.sm};
    margin-top: ${(props: PostTitleProps) => props.top?.sm || "0"};
    margin-left: ${(props: PostTitleProps) => props.left?.sm || "0"};
    a {
      font-size: 1.6em;
    }
  }

  @media (min-width: ${mdScreen}) {
    grid-column: ${(props: PostTitleProps) => props.columns.sm};
    width: 60%;
    margin-left: 0;
    margin-top: -42px;
    font-size: 5.2rem;
  }

  @media (min-width: ${lgScreen}) {
    grid-column: ${(props: PostTitleProps) => props.columns.lg};
  }

  @media (min-width: ${xlgScreen}) {
    grid-column: ${(props: PostTitleProps) => props.columns.xlg};
  }
`
export const PostExcerpt = styled.p`
  word-break: break-word;
`
export const MoreButton = styled(ButtonSimple)`
  display: block;
`
