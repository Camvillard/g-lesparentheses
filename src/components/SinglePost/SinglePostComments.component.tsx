import React from "react"
import { CommentObject } from "../../shared/comments/Comment.model"
import {
  CommentsWrapper,
  CommentAuthor,
  CommentWrapper,
  CommentContent,
  CommentHeader,
  CommentDate,
  CommentsTitle,
} from "./SinglePostComments.ui"
import { UpperCounter } from "../Counter/UpperCounter.ui"

type SinglePostComments = {
  allComments: CommentObject[]
}
export const SinglePostComments = (props: SinglePostComments) => {
  const { allComments } = props
  return (
    <CommentsWrapper>
      <CommentsTitle>
        commentaires.<UpperCounter>({allComments.length})</UpperCounter>
      </CommentsTitle>
      {allComments.length === 0 && <p>pas de commentaire</p>}
      {allComments.map(comment => {
        const { commentaire, date, nom, id, url } = comment
        return (
          <CommentWrapper key={id}>
            <CommentHeader>
              <CommentAuthor
                href={url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <h5>{nom}</h5>
              </CommentAuthor>
              <CommentDate>/ posté le : {date}</CommentDate>
            </CommentHeader>
            <CommentContent>{commentaire}</CommentContent>
          </CommentWrapper>
        )
      })}
    </CommentsWrapper>
  )
}
