// external librairies
import React from "react"
import { Link } from "gatsby"

// internal stuff

// styles & assets


class HomepagePostCard extends React.Component {
  render() {
    return (
      <div className={`blog-card ${this.props.postIndex}`}>
        <p className="meta-informations">histoire publiée le 12 janvier 2018</p>
        <div className="featured-image-container">
          <img
            src="https://res.cloudinary.com/lesparentheses/image/upload/v1569002038/test/coworkamping_63.jpg"
            alt=""
            className="featured-image"/>
          <div className="image-overlay"></div>
        </div>
        <h2 className="post-title"><span>deux mille dix-huit, deux mille dix-neuf</span></h2>
        <p className="post-excerpt">
        abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolor, quia, temporibus nisi nulla eius dolore dolores illo cumque similique porro praesentium sunt consequuntur, quas sed eum! Cupiditate velit, in. Lorem ipsum dolor sit amet, consectetur adipisicing elit..</p>
        <div className="button-block">
          <a href="#" className="button-simple secondary">lire la suite</a>
        </div>
      </div>
    )
  }
}

export default HomepagePostCard
