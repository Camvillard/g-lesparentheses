import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { InstagramContainer, InstagramPic } from "./InstagramFooter.ui"
import { WideContainer, MainContainer } from "../Containers/MainContainer.ui"
import { HomepageSectionTitle } from "../Homepage/Homepage.ui"

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
    <WideContainer>
      <MainContainer>
        <HomepageSectionTitle>sur instagram.</HomepageSectionTitle>
      </MainContainer>
      <InstagramContainer
        columns={{ default: "repeat(3, 1fr)", sm: "repeat(6, 1fr)" }}
      >
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
    </WideContainer>
  )
}

export default InstagramFooter
