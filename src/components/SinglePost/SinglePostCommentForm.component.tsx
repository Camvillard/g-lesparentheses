import React, { useState } from "react"
import Airtable from "airtable"
import { InputElement } from "../Inputs/InputElement.component"
import { MainContainer } from "../Containers/MainContainer.ui"
import { TextareaElement } from "../Inputs/TextareaElement.component"

type CommentFormProps = {
  postId: string
}
type Comment = {
  postId: string
  nom: string
  email: String
  url?: string
  commentaire: string
}

const sendComment = (comment: Comment) => {
  const base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  }).base("app45GbA2JUHNzpjq")

  base("commentaires").create([
    {
      fields: comment,
    },
  ])
}

export const SinglePostCommentForm = ({ postId }: CommentFormProps) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [url, setUrl] = useState("")
  const [message, setMessage] = useState("")
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const comment = { postId, nom: name, email, url, commentaire: message }
    sendComment(comment)
  }

  return (
    <MainContainer>
      <h3>COMMENTAIRES</h3>
      <form action="" onSubmit={submitForm}>
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

        <button>envoyer</button>
      </form>
    </MainContainer>
  )
}
