import styled from "styled-components"
import { PostTitle } from "../PostCard.ui"
import { Link } from "gatsby"

export const SecondPostTitleContainer = styled(Link)`
  grid-column: 1 / span 4;
`
export const SecondPostTitle = styled(PostTitle)`
  font-size: 4.2rem;
  margin-top: -40px;
`
