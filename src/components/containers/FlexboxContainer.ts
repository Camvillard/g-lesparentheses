import styled from "styled-components"

interface IProps {
  flexAlign?: string
  flexJustify?: string
}

export const FlexboxContainer = styled.div`
  display: flex;
  align-items: ${(props: IProps) => props.flexAlign || "center"};
  justify-content: ${(props: IProps) => props.flexJustify || "flex-start"};
`
