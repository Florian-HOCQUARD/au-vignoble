import React from 'react'
import BurgerMenu from '../components/BurgerMenu'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/style.css'
import img from '../styles/img/verres.jpg'

const Product = () => {
  return (
    <>
      <BurgerMenu />
      <Header />
      <div class='container'>
        <div class='card'>
          <div class='container-fliud'>
            <div class='wrapper row'>
              <div class='preview col-md-6'>

                <div class='preview-pic tab-content'>
                  <div class='tab-pane active' id='pic-1'><img src={img} /></div>
                  <div class='tab-pane' id='pic-2'><img src='http://placekitten.com/400/252' /></div>
                  <div class='tab-pane' id='pic-3'><img src='http://placekitten.com/400/252' /></div>
                  <div class='tab-pane' id='pic-4'><img src='http://placekitten.com/400/252' /></div>
                  <div class='tab-pane' id='pic-5'><img src='http://placekitten.com/400/252' /></div>
                </div>
                <ul class='preview-thumbnail nav nav-tabs'>
                  <li class='active'><a data-target='#pic-1' data-toggle='tab'><img src='http://placekitten.com/200/126' /></a></li>
                  <li><a data-target='#pic-2' data-toggle='tab'><img src='http://placekitten.com/200/126' /></a></li>
                  <li><a data-target='#pic-3' data-toggle='tab'><img src='http://placekitten.com/200/126' /></a></li>
                  <li><a data-target='#pic-4' data-toggle='tab'><img src='http://placekitten.com/200/126' /></a></li>
                  <li><a data-target='#pic-5' data-toggle='tab'><img src='http://placekitten.com/200/126' /></a></li>
                </ul>

              </div>
              <div class='details col-md-6'>
                <h3 class='product-title'>Pinard</h3>
                <div class='rating'>
                  <div class='stars'>
                    <span class='fa fa-star checked' />
                    <span class='fa fa-star checked' />
                    <span class='fa fa-star checked' />
                    <span class='fa fa-star' />
                    <span class='fa fa-star' />
                  </div>
                  <span class='review-no'>41 reviews</span>
                </div>
                <p class='product-description'>Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
                <h4 class='price'>current price: <span>$180</span></h4>
                <div class='action'>
                  <button class='add-to-cart btn btn-default' type='button'>add to cart</button>
                  <button class='like btn btn-default' type='button'><span class='fa fa-heart' /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Product
