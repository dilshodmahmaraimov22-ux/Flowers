import React from 'react'
import './Shop2.css'
import { FaStar } from 'react-icons/fa'
import shopp1 from '../Images/shopp1.jpg'
import { FaHeart } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'

const Shop2 = () => {
  return (
    <>
    <div className="shop">
        <div className="container">
            <div className="shop__container">
                <ul className='shop__list'>
                    <li className='shop__item'>
                        <img className='shop__img' src={shopp1} alt="" />
                        <div className='shop__flex'>
                            <h1 className='shop__title'>Sun flower</h1>
                            <p className='shop__text'>Make every day brighter with our abundant bouquet of fresh sunflowers. These radiant, long-lasting blooms bring that just-picked-from-the-meadow feeling to birthdays, get well wishes, or any day you want to make someone you care about smile.</p>
                            <h1 className='shop__rating'><FaStar className='shop__star'/>4,5/5</h1>
                            <p className='shop__text2'>(101 people opinion)</p>
                            <div className='shop__flex2'>
                                <h1 className='shop__rating2'>100$ / each</h1>
                                <button className='shop__btn'><FaHeart/>Add to favorite</button>
                                <button className='shop__btn'><F/>Add to cart</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Shop2