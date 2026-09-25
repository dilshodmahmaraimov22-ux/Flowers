import React from 'react'
import './Cart.css'
import cart1 from '../../Images/cart1.jpg'

const Cart = () => {
    
  return (
    <>
    <div className="cart">
        <div className="container">
            <div className="cart__container">
                <h1 className='cart__title'></h1>
                <ul className='cart__list'>
                    <li className='cart__item'>
                        <img className='cart__img' src={cart1} alt="" />
                        <h1 className='cart__name'></h1>
                        <p className='cart__text'></p>
                        <li className='cart__item2'>
                            <button className='cart__btn'></button>
                            <h1 className='cart__count'>0</h1>
                            <button className='cart__btn'></button>
                        </li>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cart