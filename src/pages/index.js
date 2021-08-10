import * as React from 'react'
import Layout from '../components/Layout'
import TexteAccueil from '../components/TexteAccueil'
import wineDrink from '../styles/img/wineDrink.jpg'
import MainContent from '../components/MainContent'
import shopCard from '../styles/img/shopCard.jpg'
import { story } from './{datoCmsPage.slug}'

const IndexPage = () => {
  return (

    <Layout>
      <MainContent />
      <div className='cardShop'>
        <TexteAccueil img={wineDrink} titre='Histoire' description={`/${story}`} texteLien='Voir plus' lien={`/${story}`} />
        <TexteAccueil img={shopCard} titre='Boutique' description='kdqfhjgidfqshb' texteLien='Aller à la boutique' />
      </div>
    </Layout>

  )
}

export default IndexPage
