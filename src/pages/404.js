import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <div>
      <Seo title="Not Found" />

      <main className="error-page">
        <div className="error-container">
          <h1>OOPS Page Not Found! </h1>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Error
