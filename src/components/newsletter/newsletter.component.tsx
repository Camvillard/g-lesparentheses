import React, { Component } from "react"
import {
  NewsletterMainContainer,
  NewsletterSectionTitle,
} from "./newsletter.ui"

class NewsletterSection extends Component {
  public render() {
    return (
      <NewsletterMainContainer>
        <NewsletterSectionTitle>infolettre.</NewsletterSectionTitle>
        l’infolettre des parenthèses, c’est un peu comme une pochette surprise,
        parce que mon rythme de publication est 100% aléatoire. en revanche, je
        n’envoie jamais de spams. les spams sont, à l'instar des salades de
        betteraves, le premier fléau de l’humanité.
        {/* <NewsletterForm
          action=""
          onSubmit={this.onFormSubmit}
          className="form-stroke dark magic-form"
        > */}
        {/* <Input
            type="text"
            placeholder="adresse email /"
            onClick={this.onInputChange}
            onBlur={this.onInputValidation}
            data-toggle="#newsletter-email-input"
          /> */}
        {/* <input
            type="submit"
            value="/ s'abonner"
            id="newsletter-email-input"
          />
        </NewsletterForm> */}
      </NewsletterMainContainer>
    )
  }

  private onInputChange = e => {
    const elementToToggle = e.target.dataset.toggle
    document.querySelector(elementToToggle).classList.add("move-input")
  }

  private onInputValidation = e => {
    if (e.target.value) {
      e.target.classList.add("validated")
    }
  }

  private onFormSubmit = e => {
    e.preventDefault()
    console.log("will validate your form")
  }
}

export default NewsletterSection
