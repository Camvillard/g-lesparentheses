import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import { InstagramContainer, InstagramPic, InstagramImages } from './InstagramFooter.ui'
import { SectionTitle } from '../../pages/ui/index.ui'
import { IInstagramData } from './InstagramFooter.model'
import { MainContainer } from '../containers/MainContainer'

const InstagramFooter = () =>  {
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
  return(
    <MainContainer>
      <InstagramContainer>
        <SectionTitle>sur instagram.</SectionTitle>
        <InstagramImages flexJustify="center">
        { instagramData.map( (ig: IInstagramData) =>
        (
          <a href={`https://www.instagram.com/p/${ig.node.id}/`} target="_blank">
          <InstagramPic 
            key={ig.node.id} src={ig.node.original} alt={ig.node.caption} />
          </a>
        )

        )}
        </InstagramImages>
      </InstagramContainer>
    </MainContainer>
  )
}




export default InstagramFooter