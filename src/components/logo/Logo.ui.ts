import styled from "styled-components"

type WrapperProps = {
  width: string
  height: string
}

export const LogoWrapper = styled.div`
  width: ${(props: WrapperProps) => props.width};
  height: ${(props: WrapperProps) => props.height};
  margin: 32px auto;
  position: relative;
`
