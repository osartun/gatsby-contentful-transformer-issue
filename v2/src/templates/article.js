import { graphql } from "gatsby"
import React from "react"

export default function ArticlePage({
  data: {
    contentfulArticle: { title },
  },
}) {
  return <div>{title}</div>
}

export const pageQuery = graphql`
  query ArticlePage($id: String!) {
    contentfulArticle(id: { eq: $id }) {
      title
    }
  }
`
