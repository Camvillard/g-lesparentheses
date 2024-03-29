import React from "react"
import styled from "styled-components"
import { themeBreakpoints } from "../../theme/themeVariables"

const { smScreen } = themeBreakpoints

const BlobMenuWrapper = styled.svg`
  position: fixed;
  bottom: -10px;
  left: -30vw;
  z-index: -1;
  width: 124vw;
  height: auto;
  @media (min-width: ${smScreen}) {
    left: -44px;
    bttom: 0;
    width: 692px;
  }
`

export const BlobMenu = () => {
  return (
    <BlobMenuWrapper
      className="blob-menu"
      width="717"
      height="717"
      viewBox="0 0 717 717"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M691.009 383.723C716.549 347.495 723.09 261.802 711.41 217.562C704.246 190.391 692.566 162.523 670.763 148.241C646.313 132.217 615.788 137.094 587.6 132.739C515.651 121.592 463.479 51.0522 396.669 19.0044C357.268 0.0195007 312.572 -4.85731 270.523 4.89638C232.368 13.7792 195.303 36.4217 175.057 73.6947C151.074 118.109 154.968 173.844 145.624 224.703C137.525 269.291 118.681 311.441 91.7391 345.405C67.2886 376.233 35.9858 400.792 17.4533 436.497C-4.03819 477.95 -4.97259 530.725 10.7567 575.139C26.4859 619.553 57.7887 656.129 94.5423 680.688C171.164 731.546 273.794 728.759 348.235 673.721C373.931 654.736 396.202 630.178 422.209 611.541C440.898 597.956 461.299 587.679 480.922 575.661C539.79 539.608 649.427 442.593 691.009 383.723Z"
        fill="#87A496"
      />
    </BlobMenuWrapper>
  )
}

const BlobSocialWrapper = styled.svg`
  position: fixed;
  bottom: 97px;
  left: -31vw;
  z-index: -1;
  width: 117vw;
  height: auto;
`

export const BlobSocial = () => {
  return (
    <BlobSocialWrapper
      className="blob-social"
      width="767"
      height="762"
      viewBox="0 0 767 762"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M569.942 728.229C629.474 680.629 595.626 580.659 614.155 550.118C640.94 506.003 698.544 490.044 733.401 451.707C783.943 395.853 772.385 306.247 732.3 243.055C692.215 179.864 626.355 131.897 557.467 98.604C488.58 65.3114 413.639 44.2169 340.257 20.6461C286.321 3.3119 222.753 -14.2057 176.89 17.8946C155.059 32.9359 141.299 56.5067 128.182 79.3438C99.7468 128.962 70.3022 182.615 75.5307 239.203C78.1908 268.002 89.8402 295.792 89.6568 324.774C89.6568 401.631 8.29439 458.861 0.589276 535.719C-4.6392 586.896 25.5392 636.605 66.7249 668.247C107.911 699.889 190.007 676.135 253.299 688.791C304.391 698.88 456.384 819.119 569.942 728.229Z"
        fill="#363A42"
      />
    </BlobSocialWrapper>
  )
}
