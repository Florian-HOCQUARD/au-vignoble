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
        <TexteAccueil img={wineDrink} titre='Histoire' description="Voici l'histoire du vin de sa naissance à aujourd'hui." texteLien='Voir plus' lien='/histoire' />
        <TexteAccueil img={shopCard} titre='Boutique' description="Pour trouver votre bonheur, c'est ici !" texteLien='Aller à la boutique' lien='/product' />
      </div>
    </Layout>

  )
}

export default IndexPage
