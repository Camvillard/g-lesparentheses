import { SiteData } from "./SiteData.type"
import { MarkdownRemark, NodePost } from "./BlogPost.type"
import { Component } from "react"

export type PageProps = {
  children?: any
  data: PageData
  location: Location
  path: string
  uri: string
}

export type PageResources = {
  component: Component
  json: any
}

export type PageContext = {}

export type PageLocation = {}

export type PageData = {
  site: SiteData
  allMarkdownRemark: AllMarkdownRemark
}

export type AllMarkdownRemark = {
  edges: NodePost[]
}
