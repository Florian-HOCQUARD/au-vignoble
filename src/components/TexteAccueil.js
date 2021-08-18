import React from 'react'
import '../styles/style.css'
import { Link } from 'gatsby'

const TexteAccueil = ({ img, titre, description, texteLien, lien }) => {
  console.log(lien)
  return (
    <>
      <div className='container1'>
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
          {/* <a className='card-link' to='/product'> */}
          <Link className='card-link' to={lien}>{texteLien}</Link>

          {/* </a> */}
        </div>

      </div>
    </>

  )
}

export default TexteAccueil
