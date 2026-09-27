import React from 'react'
import './Shop2.css'
import { FaStar, FaHeart, FaShoppingCart } from 'react-icons/fa'
import shopp1 from '../Images/shopp1.jpg'

const Shop2 = () => {
  return (
    <div className="shop2">
      <div className="shop2-container">
        <div className="shop2-card">
          <img className="shop2-image" src={shopp1} alt="Sun flower" />

          <div className="shop2-content">
            <h2 className="shop2-heading">Sun flower</h2>

            <p className="shop2-description">
              Make every day brighter with our abundant bouquet of fresh
              sunflowers. These radiant, long-lasting blooms bring that
              just-picked-from-the-meadow feeling to birthdays, get well
              wishes, or any day you want to make someone you care about
              smile.
            </p>

            <div className="shop2-rating">
              <FaStar className="shop2-star-icon" />
              <span>4.5/5</span>
            </div>
            <p className="shop2-reviews">(101 people opinion)</p>

            <div className="shop2-footer">
              <p className="shop2-price">100$ / each</p>

              <div className="shop2-buttons">
                <button className="shop2-btn shop2-btn-outline">
                  <FaHeart /> Add to favorite
                </button>
                <button className="shop2-btn shop2-btn-filled">
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