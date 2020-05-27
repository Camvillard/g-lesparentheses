import { SiteData } from "./SiteData.type"
import { MarkdownRemark } from "./BlogPost.type"

export type PageData = {
  site: SiteData
  allMarkdownRemark: AllMarkdownRemark
}

export type AllMarkdownRemark = {
  edges: NodePost[]
}

export type NodePost = {
  node: MarkdownRemark
}
