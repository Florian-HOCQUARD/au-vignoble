import { graphql } from 'gatsby'
import React from 'react'

const Page = ({ data }) => {
  const story = data.datoCmsPage
  return (
    <>
      <div>
        <h1>coucou</h1>
        <h1>{story.title}</h1>
        <img src={story.image.url} />
      </div>
    </>
  )
}

export const query = graphql`
    query($id: String!) {
        datoCmsPage(id: {eq:$id}) {
            id
            title
            texte
            image{
                url
            }
              }
        }
    `

export default Page
