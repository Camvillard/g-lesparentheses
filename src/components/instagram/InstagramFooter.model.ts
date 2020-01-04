export interface IInstagramData {
  node: IInstagramDataNode
}

interface IInstagramDataNode {
  original: string
  id: string
  caption: string
  localFile: IInstragmLocalFiles
}

interface IInstragmLocalFiles {
  url: string
}
