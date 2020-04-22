import styled from "styled-components"
import { themeBreakpoints } from "../../theme/themeVariables"
import { Breakpoint } from "../../types/Breakpoint.type"

const { smScreen, mdScreen, lgScreen, xlgScreen } = themeBreakpoints

type GridProps = {
  columns: Breakpoint
  rows?: string
}
export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props: GridProps) => props.columns};
  grid-template-rows: ${(props: GridProps) => props.rows};
  grid-gap: 8px;

  @media (min-width: ${smScreen}) {
    grid-template-columns: ${(props: GridProps) => props.columns.sm};
    grid-gap: 12px;
  }
  @media (min-width: ${lgScreen}) {
    grid-template-columns: ${(props: GridProps) => props.columns.lg};
    grid-gap: 24px;
  }
  @media (min-width: ${xlgScreen}) {
    grid-template-columns: ${(props: GridProps) => props.columns.xlg};
    grid-gap: 24px;
  }
`

export interface GridElementProps {
  columns: Breakpoint
  rows?: string
}

export const GridElement = styled.div`
  grid-column: ${(props: GridElementProps) => props.columns};
  @media (min-width: ${smScreen}) {
    grid-column: ${(props: GridElementProps) => props.columns.sm};
  }
  @media (min-width: ${mdScreen}) {
    grid-column: ${(props: GridElementProps) => props.columns.md};
  }
  @media (min-width: ${lgScreen}) {
    grid-column: ${(props: GridElementProps) => props.columns.lg};
  }
  @media (min-width: ${xlgScreen}) {
    grid-column: ${(props: GridElementProps) => props.columns.xlg};
  }
`
