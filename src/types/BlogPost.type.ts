import { SiteData } from "./SiteData.type"

export type BlogPostCardProps = {
  post: NodePost
}

export type NodePost = {
  node: Post
}

export type PostTemplateData = {
  markdownRemark: Post
  site: SiteData
}

export type Post = {
  id: string
  frontmatter: Frontmatter
  html: string
  rawMarkdownBody?: string
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
  has_info?: boolean
}

export type SinglePostData = {
  allAirtable: any
  markdownRemark: Post
  site: SiteData
  contentfulBlogPost: any
}
