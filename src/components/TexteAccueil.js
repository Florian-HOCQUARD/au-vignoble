import React from 'react'
import '../styles/style.css'

const TexteAccueil = ({ img, titre, description, texteLien }) => {
  return (
    <>
      <div className='container'>
        <div className='card' data-tilt data-tilt-max='30' data-tilt-glare data-tilt-glare='0.55'>
          <div className='img-container'>
            <img className='img' src={img} alt='#' />
          </div>
          <div className='category'>
            <div className='sub-head'>{titre}</div>
          </div>
          <div className='description'>
            {description}
          </div>
          <a className='card-link' href='realisation.html'>
            {texteLien}
          </a>
        </div>

      </div>
    </>

  )
}

export default TexteAccueil
