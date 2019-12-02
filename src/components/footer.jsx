 import React from "react"
import { Link } from "gatsby"


class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
          <footer>
            <div className="legal-stuff">
              <Link to="/" className="legal-links">mentions légales</Link>
              {" / "}
              <Link to="/" className="legal-links">confidentialité</Link>
            </div>
            <div className="brand-stuff">
              <p className="copyright">© {new Date().getFullYear()} - les parenthèses</p>
              <p className="brand">design & dév par <a href="https://www.cdltbisou.com">moi-même</a></p>
            </div>
          </footer>
      </React.Fragment>
    )
  }
}

export default Footer
