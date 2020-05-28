import { SiteData } from "./SiteData.type"

export type BlogPostCardProps = {
  post: NodePost
}

export type NodePost = {
  node: MarkdownRemark
}

export type PostTemplateData = {
  markdownRemark: MarkdownRemark
  site: SiteData
}

export type MarkdownRemark = {
  id: string
  frontmatter: Frontmatter
  html: string
}

export type Frontmatter = {
  title: string
  categories: string
  date: string
  image_url: string
  image_alt: string
  extrait: string
  order: number
  slug: string
}

export type SinglePostData = {
  allAirtable: any
  markdownRemark: MarkdownRemark
  site: SiteData
  contentfulBlogPost: any
}
