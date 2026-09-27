import React from 'react'
import shop1 from '../../Images/shop1.jpg'
import shop2 from '../../Images/shop2.jpg'
import shop3 from '../../Images/shop3.jpg'
import shop4 from '../../Images/shop4.jpg'
import './Shop.css'

const products = [
  { img: shop1, title: 'Periwinkle', price: '5$' },
  { img: shop2, title: 'Daisy', price: '5$' },
  { img: shop3, title: 'Sun flower', price: '5$' },
  { img: shop4, title: 'White Rose', price: '5$' },
]

const Shop1 = () => {
  return (
    <div className="shop">
      <div className="container">
        <ul className="shop__list">
          {products.map((item, index) => (
            <li className="shop__item" key={index}>
              <img
                className="shop__img"
                src={item.img}
                alt={item.title}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <h3 className="shop__title">{item.title}</h3>
              <div className="shop__flex">
                <p className="shop__text">{item.price}</p>
                <button className="shop__btn">
                  <span className="shop__btn-icon">🛒</span> Add to cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Shop1