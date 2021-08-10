import { graphql } from 'gatsby'
import React from 'react'

export default ({ data }) => {
  const post = data.datoCmsProduct
  return (
    <div>
      <h1>coucou</h1>
      <h1>{post.title}</h1>
      <img src={post.test.url} />
    </div>
  )
}

export const query = graphql`
  query($id: String!) {
      datoCmsProduct(id: {eq:$id}) {
          id
          title
          description
          quantit
          test {
              url
          }
            }
      }
  `
