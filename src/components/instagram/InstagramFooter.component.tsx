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
  return (
    <InstagramGrid
      columns={{ default: "1fr", sm: "180px auto", md: "270px auto" }}
      align={"end"}
    ></InstagramGrid>
  )
}

export default InstagramFooter
