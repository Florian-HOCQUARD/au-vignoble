import { graphql } from 'gatsby'
import React from 'react'
import BurgerMenu from '../components/BurgerMenu'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default ({ data }) => {
  const story = data.datoCmsPage
  return (
    <>
      <BurgerMenu />
      <Header />
      <div>
        <h1>{story.title}</h1>
        <img src={story.image.url} />
        <div>
          {story.texte}
        </div>
      </div>
      <Footer />
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
