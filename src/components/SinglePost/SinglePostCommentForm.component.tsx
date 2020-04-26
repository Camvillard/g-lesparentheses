import React, { useState } from "react"
import { InputElement } from "../Inputs/InputElement.component"
import { MainContainer } from "../Containers/MainContainer.ui"

export const SinglePostCommentForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [url, setUrl] = useState("")
  const [comment, setComment] = useState("")
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(name, email, url)
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
          placeholder={"hermione@hogwarts.mag"}
          onInputBlur={e => setEmail(e.target.value)}
        />
        <InputElement
          label={"site web"}
          placeholder={"https://wingardium-levio.sa"}
          onInputBlur={e => setUrl(e.target.value)}
        />
        <textarea name="" placeholder={"test"} />
        <button>envoyer</button>
      </form>
    </MainContainer>
  )
}
