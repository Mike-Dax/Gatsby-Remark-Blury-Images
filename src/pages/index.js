import { Link, graphql } from 'gatsby'

import GatsbyImage from "gatsby-image"
import { Layout } from './../components/Layout'
import { PristineImage } from './../components/PristineImage'
import React from "react"

const GatsbyImageFluid = ({data}) => {

    return (
        <div>
            <p>Gatsby Fluid Image:</p>
            <GatsbyImage fluid={data.file.childImageSharp.fluid}/>
        </div>
    )
}

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "screenshot.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 900, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ({ data }) => <Layout>
    <Link to="/markdown">To markdown</Link>
    <PristineImage/>
    <GatsbyImageFluid data={data}/>
    </Layout>
