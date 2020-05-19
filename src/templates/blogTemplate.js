import { Link, graphql } from "gatsby"

import { Layout } from './../components/Layout'
import { PristineImage } from './../components/PristineImage'
import React from "react"

export default function Template({
  data,
}) {
  const { markdownRemark } = data
  const { html } = markdownRemark
  return (
    <Layout>
      <Link to="/">Back to home</Link>

      <PristineImage/>
      
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}


export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
      }
    }
  }
`