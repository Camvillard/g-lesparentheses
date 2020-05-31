import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { Grid } from "../../Grid/Grid.ui"
import { PetitesParenthesesCard } from "../../Posts/PetitesParentheses/PetitesParenthesesCard.component"
import { PetitesParenthesesData } from "../../../types/PetitesParentheses.type"
import { HomepageSection, HomepageSectionTitle } from "../Homepage.ui"
import { Header3 } from "../../Headers/Headers.ui"

const PetitesParenthesesSectionTitle = styled(HomepageSectionTitle)`
  max-width: 526px;
`

const PetitesParenthesesDisclaimer = styled.p`
  max-width: 526px;
  margin-left: 0;
`

export const PetitesParenthesesHomepageSection = () => {
  const data: PetitesParenthesesData = useStaticQuery(graphql`
    query petiteParenthesesQuery {
      allMarkdownRemark(
        sort: { fields: frontmatter___order, order: DESC }
        limit: 4
        filter: { frontmatter: { categories: { eq: "petites parenthèses" } } }
      ) {
        edges {
          node {
            id
            rawMarkdownBody
            frontmatter {
              date
              slug
              title
            }
          }
        }
      }
    }
  `)
  const { allMarkdownRemark } = data
  const posts = allMarkdownRemark.edges

  return (
    <>
      <HomepageSection>
        <PetitesParenthesesSectionTitle>
          les petites parenthèses
        </PetitesParenthesesSectionTitle>
        <PetitesParenthesesDisclaimer>
          les petites parenthèses, ce sont tous ces petits textes sans forcément
          d'image ni même de ponctuation, mais qui en avaient marre de
          sommeiller dans mes petits carnets.
        </PetitesParenthesesDisclaimer>
        <Grid
          columns={{
            default: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
            lg: "repeat(4, 1fr)",
          }}
        >
          {posts.map(post => (
            <PetitesParenthesesCard post={post.node} key={post.node.id} />
          ))}
        </Grid>
      </HomepageSection>
    </>
  )
}
