import styled from "styled-components"

type FullScreenContainerProps = {
  bgColor?: string
  color?: string
}
export const FullScreenContainer = styled.div<FullScreenContainerProps>`
  width: 100vw;
  height: 100vh;
  background: ${props => props.bgColor || "white"};
  color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`
