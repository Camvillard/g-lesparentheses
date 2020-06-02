import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  InstagramGrid,
  InstagramContainer,
  InstagramPic,
  InstagramTitle,
} from "./InstagramFooter.ui"
import { WideContainer, MainContainer } from "../MainContainer/MainContainer.ui"
import { HomepageSectionTitle } from "../Homepage/Homepage.ui"
import { Grid } from "../Grid/Grid.ui"

export type InstagramData = {
  node: InstagramDataNode
}

type InstagramDataNode = {
  original: string
  id: string
  caption: string
  localFile: InstragmLocalFiles
}

type InstragmLocalFiles = {
  url: string
}

const instagramPosts = [{ id: "B_3Ex_pFZm2", url: "" }]

const InstagramFooter = () => {
  const data = useStaticQuery(graphql`
    query InstagramQuery {
      allInstaNode(limit: 6) {
        edges {
          node {
            id
            original
            caption
            localFile {
              url
            }
          }
        }
      }
    }
  `)
  const instagramData = data.allInstaNode.edges
  return (
    <InstagramGrid
      columns={{ default: "1fr", sm: "180px auto", md: "270px auto" }}
      align={"end"}
    >
      <InstagramTitle>instagram.</InstagramTitle>
      <InstagramContainer columns={{ default: "repeat(3, 1fr)", sm: "" }}>
        {instagramData.map((ig: InstagramData) => (
          <a
            href={`https://www.instagram.com/p/${ig.node.id}/`}
            target="_blank"
            rel="noopener noreferrer"
            key={ig.node.id}
          >
            <InstagramPic
              key={ig.node.id}
              src={ig.node.original}
              alt={ig.node.caption}
            />
          </a>
        ))}
      </InstagramContainer>
    </InstagramGrid>
  )
}

export default InstagramFooter
