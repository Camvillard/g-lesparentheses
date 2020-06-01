import React, { useState, useRef } from "react"
import Airtable from "airtable"
import { InputElement } from "../Inputs/InputElement.component"
import { TextareaElement } from "../Inputs/TextareaElement.component"
import { ButtonSimple } from "../Buttons/Buttons.ui"
import {
  CommentSuccessWrapper,
  CommentSuccesTitle,
  CommentSuccessText,
  CommentForm,
  CommentFormWrapper,
} from "./SinglePostCommentForm.ui"
import { CloseIcon } from "../Icons/CloseIcon.component"
import { CommentObject } from "../../shared/comments/Comment.model"
import { CommentsTitle } from "./SinglePostComments.ui"

type CommentFormProps = {
  postId: string
}

const sendComment = (
  comment: CommentObject,
  setPostedComment: any,
  formRef: any
) => {
  const base = new Airtable({
    apiKey: "keyAOCtPMQ3gzQcWT",
  }).base("app45GbA2JUHNzpjq")

  base("commentaires")
    .create([
      {
        fields: comment,
      },
    ])
    .then((r: any) => {
      if (r) {
        setPostedComment(true)
        formRef.current.reset()
      }
    })
}

export const SinglePostCommentForm = ({ postId }: CommentFormProps) => {
  const [name, setName] = useState("")
  const formRef = useRef<HTMLFormElement>(null)
  const [email, setEmail] = useState("")
  const [url, setUrl] = useState("")
  const [message, setMessage] = useState("")
  const [commentIsPosted, setPostedComment] = useState(false)
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const comment = {
      postId,
      nom: name,
      email,
      url,
      commentaire: message,
    }
    sendComment(comment, setPostedComment, formRef)
  }

  return (
    <CommentFormWrapper>
      <CommentsTitle>laisser un commentaire</CommentsTitle>
      {commentIsPosted && (
        <CommentSuccessWrapper>
          <CloseIcon
            color={"white"}
            ratio={1}
            onCloseClick={() => setPostedComment(false)}
          />
          <CommentSuccesTitle>fantastique</CommentSuccesTitle>
          <CommentSuccessText>
            le commentaire a bien été posté, il s'affichera dare-dare.
          </CommentSuccessText>
        </CommentSuccessWrapper>
      )}
      <CommentForm action="" onSubmit={submitForm} ref={formRef}>
        <InputElement
          label={"nom, prénom"}
          placeholder={"hermione"}
          onInputBlur={e => setName(e.target.value)}
        />
        <InputElement
          label={"adresse mail"}
          type={"email"}
          placeholder={"hermione@hogwarts.mag"}
          onInputBlur={e => setEmail(e.target.value)}
        />
        <InputElement
          label={"site web"}
          type={"url"}
          placeholder={"https://wingardium-levio.sa"}
          onInputBlur={e => setUrl(e.target.value)}
        />
        <TextareaElement
          name={"commentaire"}
          label={"commentaire"}
          placeholder={
            "soyez gentils (ou au moins, argumentez, si vous n'êtes pas gentils.)"
          }
          onTextareaBlur={(e: React.FocusEvent<HTMLTextAreaElement>) =>
            setMessage(e.target.value)
          }
        />

        <ButtonSimple>envoyer le commentaire</ButtonSimple>
      </CommentForm>
    </CommentFormWrapper>
  )
}
