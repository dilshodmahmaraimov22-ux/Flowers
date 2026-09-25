import React, { useState } from 'react'
import './Cart.css'
import cart1 from '../../Images/cart1.jpg'

const Cart = () => {
    const [count, setCount] = useState(0);
    
  return (
    <>
    <div className="cart">
        <div className="container">
            <div className="cart__container">
                <h1 className='cart__title'>Your Cart</h1>
                <ul className='cart__list'>
                    <li className='cart__item'>
                        <img className='cart__img' src={cart1} alt="" />
                        <h1 className='cart__name'>Sun flower</h1>
                        <p className='cart__text'>unit pric 10$</p>
                        <li className='cart__item2'>
                            <button onClick={()=>setCount(count + 1)} className='cart__btn'>+</button>
                            <h1 className='cart__count'>{count}</h1>
                            <button onClick={()=>setCount(count - 1)} className='cart__btn'>-</button>
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