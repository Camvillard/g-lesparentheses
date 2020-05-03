import React from "react"

type CloseIconProps = {
  color: string
  ratio: number
  onCloseClick?: () => void
}
export const CloseIcon = (props: CloseIconProps) => {
  const { color, ratio, onCloseClick } = props
  return (
    <svg
      width={16 * ratio}
      height={16 * ratio}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onCloseClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.41424 8L15.0711 13.6569L13.6569 15.0711L8.00002 9.41421L2.34317 15.0711L0.928955 13.6569L6.58581 8L0.928955 2.34315L2.34317 0.928932L8.00002 6.58579L13.6569 0.928933L15.0711 2.34315L9.41424 8Z"
        fill={color}
      />
    </svg>
  )
}
