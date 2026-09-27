import React from 'react'
import './Shop2.css'
import { FaStar, FaHeart, FaShoppingCart } from 'react-icons/fa'
import shopp1 from '../Images/shopp1.jpg'

const Shop2 = () => {
  return (
    <div className="shop">
      <div className="container">
        <div className="shop__item">
          <img className="shop__img" src={shopp1} alt="Sun flower" />

          <div className="shop__info">
            <h2 className="shop__title">Sun flower</h2>

            <p className="shop__text">
              Make every day brighter with our abundant bouquet of fresh
              sunflowers. These radiant, long-lasting blooms bring that
              just-picked-from-the-meadow feeling to birthdays, get well
              wishes, or any day you want to make someone you care about
              smile.
            </p>

            <div className="shop__rating">
              <FaStar className="shop__star" />
              <span>4.5/5</span>
            </div>
            <p className="shop__reviews">(101 people opinion)</p>

            <div className="shop__bottom">
              <p className="shop__price">100$ / each</p>

              <div className="shop__actions">
                <button className="shop__btn shop__btn--outline">
                  <FaHeart /> Add to favorite
                </button>
                <button className="shop__btn shop__btn--filled">
                  <FaShoppingCart /> Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop2