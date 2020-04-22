import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  InstagramContainer,
  InstagramPic,
  InstagramImages,
} from "./InstagramFooter.ui"
import { IInstagramData } from "./InstagramFooter.model"
import { MainContainer } from "../Containers/MainContainer.ui"

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
    <MainContainer>
      <InstagramContainer>
        sur instagram.
        <InstagramImages justify="center">
          {instagramData.map((ig: IInstagramData) => (
            <a
              href={`https://www.instagram.com/p/${ig.node.id}/`}
              target="_blank"
              key={ig.node.id}
            >
              <InstagramPic
                key={ig.node.id}
                src={ig.node.original}
                alt={ig.node.caption}
              />
            </a>
          ))}
        </InstagramImages>
      </InstagramContainer>
    </MainContainer>
  )
}

export default InstagramFooter
