import React, { useState, useRef } from "react"
import Airtable from "airtable"

import { InputElement } from "../components/Inputs/InputElement.component"
import { GlobalStyle } from "../theme/globalstyle"
import SEO from "../components/SEO/SEO.component"
import { FullScreenContainer } from "../components/FullScreen/FullScreenContainer.ui"
import { themeColors } from "../theme/themeVariables"
import {
  ContactPageTitle,
  ContactInput,
  ContactForm,
  ContactPageWrapper,
  ContactTextarea,
  ContactDisclaimer,
  ContactButton,
  SuccessText,
} from "../components/ContactPage/ContactPage.ui"
import { BackHomeIcon } from "../components/AboutPage/AboutPage.ui"
import { BackIcon } from "../components/Icons/BackIcon.component"

const { darkGray } = themeColors

type Message = {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const [form, fillForm] = useState({ name: "", email: "", message: "" })
  const [isPosted, setPosted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    fillForm({ ...form, [`${name}`]: value })
  }

  const submitForm = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault()
    sendMessage(form)
  }

  const sendMessage = (message: Message) => {
    const base = new Airtable({
      apiKey: process.env.AIRTABLE_API_KEY,
    }).base("app45GbA2JUHNzpjq")

    base("contact")
      .create([
        {
          fields: message,
        },
      ])
      .then((r: any) => {
        console.log("r", r)

        if (r) {
          setPosted(true)
          formRef?.current?.reset()
        }
      })
  }

  return (
    <>
      <GlobalStyle />
      <SEO title={"contact page"} />
      <FullScreenContainer bgColor={darkGray} color={"white"}>
        <ContactPageWrapper>
          <BackHomeIcon to={"/"}>
            <BackIcon sizeRatio={2} />
          </BackHomeIcon>
          {isPosted ? (
            <SuccessText>bien reçu !</SuccessText>
          ) : (
            <>
              <ContactDisclaimer>
                avant toute chose, je préfère être très transparente : répondre
                aux courriels est une activité dans laquelle je suis assez
                mauvaise. je ferai toutefois de mon mieux pour répondre dans des
                délais pas trop délirants, c'est promis.
              </ContactDisclaimer>
              <ContactForm action="" onSubmit={submitForm}>
                <ContactInput
                  name={"name"}
                  onChange={onInputChange}
                  placeholder={"prénom"}
                  value={form.name}
                />
                <ContactInput
                  name={"email"}
                  onChange={onInputChange}
                  placeholder={"courriel"}
                  value={form.email}
                />
                <ContactTextarea
                  name={"message"}
                  onChange={onInputChange}
                  placeholder={"message"}
                  value={form.message}
                />
                <ContactButton textcolor={"white"}>envoyer</ContactButton>
              </ContactForm>
            </>
          )}
        </ContactPageWrapper>
      </FullScreenContainer>
    </>
  )
}

export default Contact
