import { TSiteData } from "./SiteData.type"

export interface IPostTemplateData {
  markdownRemark: any
  site: TSiteData
}

export interface IFrontmatter {
  title: string
  categories: string
  date: string
  description: string
  image_url: string
}

export interface ISinglePostData {
  allAirtable: any
  markdownRemark: any
  site: TSiteData
}
