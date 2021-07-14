import { graphql } from "gatsby"
import React from "react"

export default function CategoryPage({
  data: {
    contentfulCategory: { name },
  },
}) {
  return <div>{name}</div>
}

export const pageQuery = graphql`
  query CategoryPage($id: String!) {
    contentfulCategory(id: { eq: $id }) {
      name
    }
  }
`
