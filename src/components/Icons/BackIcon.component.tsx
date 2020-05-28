import React from "react"
import styled from "styled-components"

const BackIconElement = styled.svg``
type BackIconProps = {
  sizeRatio?: number
  color?: string
  onClickBack?: () => void
}
export const BackIcon = (props: BackIconProps) => {
  const { sizeRatio, color, onClickBack } = props
  return (
    <BackIconElement
      width={13 * (sizeRatio || 1)}
      height={10 * (sizeRatio || 1)}
      viewBox="0 0 13 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClickBack}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.49463 0.641067L4.85356 0L0 4.85356L4.85356 9.70712L5.49463 9.06606L1.73543 5.30686H12.4269V4.40025H1.73545L5.49463 0.641067Z"
        fill={color || "white"}
      />
    </BackIconElement>
  )
}
