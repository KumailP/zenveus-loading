import React from "react"
// import ReactFloaterJs from "react-floaterjs"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="center-main">
      {/* <ReactFloaterJs> */}
      <h1>zenveus</h1>
      {/* </ReactFloaterJs> */}
      <p>
        Delivering web &amp; mobile services consistently and rapidly to
        businesses all around the globe
      </p>
      <div className="social-icons">
        <a
          href="http://www.facebook.com/ekstek"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a
          href="http://twitter.com/zenveus"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://www.youtube.com/channel/UC3UwpowzvxhUigHya7VQwfA"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
