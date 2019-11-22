// external librairies
import React from "react"
import { Link } from "gatsby"

// internal stuff

// styles & assets


class HomepageLastCard extends React.Component {
  render() {
    return (
      <div className="blog-card last-post">
        <p className="meta-informations">histoire publiée le 12 janvier 2018</p>
        <div
          className="featured-image-container"
          style={{
            background: "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.8)), url(https://res.cloudinary.com/lesparentheses/image/upload/v1569002037/test/coworkamping_100.jpg)"
          }}>
        </div>
        <h2 className="post-title"><span>deux mille dix-huit, deux mille dix-neuf</span></h2>
        <p className="post-excerpt">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolor, quia, temporibus nisi nulla eius dolore dolores illo cumque similique porro praesentium sunt consequuntur, quas sed eum! Cupiditate velit, in. Lorem ipsum dolor sit amet, consectetur adipisicing elit..</p>
        <div className="button-block">
          <a href="#" className="button-simple secondary">lire la suite</a>
        </div>
      </div>
    )
  }
}

export default HomepageLastCard
