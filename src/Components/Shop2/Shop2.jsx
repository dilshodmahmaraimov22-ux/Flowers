import React from 'react'
import './Shop2.css'
import { FaStar } from 'react-icons/fa'

const Shop2 = () => {
  return (
    <>
    <div className="shop">
        <div className="container">
            <div className="shop__container">
                <ul className='shop__list'>
                    <li className='shop__item'>
                        <img className='shop__img' src="" alt="" />
                        <div className='shop__flex'>
                            <h1 className='shop__title'></h1>
                            <p className='shop__text'></p>
                            <h1 className='shop__rating'><FaStar className='shop__star'/>4,5/5</h1>
                            <p className='shop__text2'></p>
                            <div className='shop__flex2'>
                                <h1 className='shop__rating2'>100$ / each</h1>
                                <button className='shop__btn'></button>
                                <button className='shop__btn'></button>
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