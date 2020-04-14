import styled from "styled-components"
import { themeBreakpoints } from "../../theme/themeVariables"

const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

type GridProps = {
  columns: string
  smColumns?: string
  mdColumns?: string
  lgColumns?: string
  xlgColumns?: string
  rows?: string
}
export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props: GridProps) => props.columns};
  grid-template-rows: ${(props: GridProps) => props.rows};
  grid-gap: 8px;

  @media (min-width: ${smScreen}) {
    grid-template-columns: ${(props: GridProps) => props.smColumns};
    grid-gap: 12px;
  }
  @media (min-width: ${lgScreen}) {
    grid-template-columns: ${(props: GridProps) => props.lgColumns};
    grid-gap: 24px;
  }
  @media (min-width: ${xlgScreen}) {
    grid-template-columns: ${(props: GridProps) => props.xlgColumns};
    grid-gap: 24px;
  }
`

type GridElementProps = {
  columns: string
  smColumns?: string
  mdColumns?: string
  lgColumns?: string
  xlgColumns?: string
  rows?: string
}
export const GridElement = styled.div`
  grid-column: ${(props: GridProps) => props.columns};
`
