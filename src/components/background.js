import React from "react"

export default function background() {
  return (
    <BackgroundImage
      Tag="section"
      fluid={imgData.desktop.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </BackgroundImage>
  )
}
