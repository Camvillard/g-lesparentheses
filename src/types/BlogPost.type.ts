import { SiteData } from "./SiteData.type"

export type PostTemplateData = {
  markdownRemark: MarkdownRemark
  site: SiteData
}

export type MarkdownRemark = {
  frontmatter: Frontmatter
  html: string
}

export type Frontmatter = {
  title: string
  categories: string
  date: string
  image_url: string
}

export type SinglePostData = {
  allAirtable: any
  markdownRemark: MarkdownRemark
  site: SiteData
}
