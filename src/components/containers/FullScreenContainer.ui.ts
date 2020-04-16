import styled from "styled-components"

type Props = {
  bgColor: string
  color: string
}
export const FullScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props: Props) => props.bgColor};
  color: ${(props: Props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`
