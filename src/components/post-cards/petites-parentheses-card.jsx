import React from "react"
import { Link } from "gatsby"

class PetitesParenthesesCard extends React.Component {
  render() {
    return (
      <div className="petites-parentheses-card">
        <p className="meta-informations">12.01.2018</p>
        <h2 className="post-title">07</h2>
        <p className="post-excerpt">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolor, quia, temporibus nisi nulla eius dolore dolores illo cumque similique porro praesentium sunt consequuntur, quas sed eum! Cupiditate velit, in. Lorem ipsum dolor sit amet, consectetur adipisicing elit..</p>
        <div className="button-block">
          <a href="#" className="button-simple light">lire la suite</a>
        </div>
      </div>
    )
  }
}

export default PetitesParenthesesCard
