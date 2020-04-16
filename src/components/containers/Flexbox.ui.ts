import styled from "styled-components"

type Props = {
  align?: string
  justify?: string
  direction?: string
}

export const Flexbox = styled.div`
  display: flex;
  align-items: ${(props: Props) => props.align || "center"};
  justify-content: ${(props: Props) => props.justify || "flex-start"};
  flex-direction: ${(props: Props) => props.direction || "row"};
`
