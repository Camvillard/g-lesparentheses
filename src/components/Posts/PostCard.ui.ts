import styled from "styled-components"
import { Accent } from "../../theme/globalstyle"
import { themeColors, themeBreakpoints } from "../../theme/themeVariables"
import { Grid, GridElement, GridElementProps } from "../Grid/Grid.ui"
import { ButtonLinkSimple } from "../Buttons/Buttons.ui"
import { Breakpoint } from "../../types/Breakpoint.type"
import { Link } from "gatsby"

const { mediumGray, darkGray } = themeColors

const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

export const PostContainer = styled(Grid)`
  margin: 24px auto 64px;
`

type CardMetaProps = {
  columns?: Breakpoint
}

export const CardMeta = styled(Accent)<CardMetaProps>`
  font-size: 1rem;
  font-weight: 300;
  color: ${mediumGray};
  margin: 0;
  grid-column: ${props => props.columns?.default || ""};
  text-align: right;
  @media (min-width: ${smScreen}) {
    grid-column: ${props => props.columns?.sm || ""};
    font-size: 1.2rem;
  }
  @media (min-width: ${mdScreen}) {
    grid-column: ${props => props.columns?.md || ""};
    font-size: 1.2rem;
  }
  @media (min-width: ${lgScreen}) {
    grid-column: ${props => props.columns?.lg || ""};
    font-size: 1.2rem;
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
  // @media (min-width: ${mdScreen}) {
  //   max-height: 600px;
  // }
`

export const FeturedImageOverlay = styled.div`
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4));
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

export const PostTitle = styled(Link)`
  font-size: 4.8rem;
  font-weight: 700;
  position: relative;
  margin-top: ${(props: PostTitleProps) => props.top?.default};
  margin-left: ${(props: PostTitleProps) => props.left?.default};
  line-height: 1.05;
  grid-column: ${(props: PostTitleProps) => props.columns.default};
  color: ${darkGray};

  @media (min-width: ${smScreen}) {
    grid-column: ${(props: PostTitleProps) => props.columns.sm};
    margin-top: ${(props: PostTitleProps) => props.top?.sm};
    margin-left: ${(props: PostTitleProps) => props.left?.sm};
    font-size: 5.6em;
  }

  @media (min-width: ${mdScreen}) {
    grid-column: ${(props: PostTitleProps) => props.columns.md};
    margin-top: ${(props: PostTitleProps) => props.top?.md};
    margin-left: ${(props: PostTitleProps) => props.left?.md};
    font-size: 6.2rem;
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
export const MoreButton = styled(ButtonLinkSimple)``
