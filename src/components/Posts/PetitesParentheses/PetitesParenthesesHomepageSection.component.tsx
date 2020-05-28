import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { HomepageSectionTitle } from "../../Headers/Headers.ui"
import { Grid } from "../../Grid/Grid.ui"
import PetitesParenthesesCard from "./PetitesParenthesesCard.component"

export const PetitesParenthesesHomepageSection = () => {
  const data = useStaticQuery(graphql`
    query petiteParenthesesQuery {
      allMarkdownRemark(
        sort: { fields: frontmatter___order, order: DESC }
        limit: 4
        filter: { frontmatter: { categories: { eq: "petites parenthèses" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              order
              categories
              date
              extrait
              image_alt
              image_url
              slug
              title
            }
          }
        }
      }
    }
  `)
  console.log("data", data)

  return (
    <>
      <HomepageSectionTitle>les petites parenthèses</HomepageSectionTitle>
      <p className="description">
        les petites parenthèses, ce sont tous ces petits textes sans forcément
        d'image ni même de ponctuation, mais qui en avaient marre de sommeiller
        dans mes petits carnets.
      </p>
      <Grid
        columns={{
          default: "1fr",
          sm: "1fr 1fr",
          md: "1fr 1fr 1fr",
          lg: "repeat(4, 1fr)",
        }}
      >
        <PetitesParenthesesCard />
        <PetitesParenthesesCard />
        <PetitesParenthesesCard />
      </Grid>
    </>
  )
}
