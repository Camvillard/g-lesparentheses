import { CommentObject } from "./Comment.model"

type EdgeComment = {
  node: NodeComment
}

type NodeComment = {
  data: CommentObject
  id: string
  table: string
}

export const convertNodesInComments = (
  comments: EdgeComment[]
): CommentObject[] => {
  return comments.map(comment => {
    return {
      id: comment.node.id,
      postId: comment.node.data.postId,
      commentaire: comment.node.data.commentaire,
      date: comment.node.data.date,
      nom: comment.node.data.nom,
      email: comment.node.data.email,
      url: comment.node.data.url,
    }
  })
}
