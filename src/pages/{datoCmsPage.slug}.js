import { graphql } from 'gatsby'
import React from 'react'
import BurgerMenu from '../components/BurgerMenu'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import '../styles/style.css'

export default ({ data }) => {
  const story = data.datoCmsPage

  return (
    <>
      <BurgerMenu />
      <Header />
      <MainContent />
      <div className='divStory'>
        <h1 className='titleStory'>{story.title}</h1>
        <img className='imgStory' src={story.image.url} />
        <div dangerouslySetInnerHTML={{ __html: story.texte }} className='textStory' />

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
