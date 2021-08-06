import * as React from 'react'
import Layout from '../components/Layout'
import TexteAccueil from '../components/TexteAccueil'
import wineDrink from '../styles/img/wineDrink.jpg'
import MainContent from '../components/MainContent'
import shopCard from '../styles/img/shopCard.jpg'

const IndexPage = () => {
  return (

    <Layout>
      <MainContent />
      <div className='cardShop'>
        <TexteAccueil img={wineDrink} titre='Histoire' description='kdqfhjgidfqshb' texteLien='Voir plus' />
        <TexteAccueil img={shopCard} titre='Boutique' description='kdqfhjgidfqshb' texteLien='Aller à la boutique' />
      </div>
    </Layout>

  )
}

export default IndexPage
