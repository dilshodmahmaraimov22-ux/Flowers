import React, { useState } from 'react'
import './Cart.css'
import cart1 from '../../Images/cart1.jpg'
import cart2 from '../../Images/cart2.jpg'
import { FaTrash } from 'react-icons/fa'

const Cart = () => {
    const [count, setCount] = useState(0);
    const [sount, setSount] = useState(0);

    
  return (
    <>
    <div className="cart">
        <div className="container">
            <div className="cart__container">
                <h1 className='cart__title'>Your Cart</h1>
                <ul className='cart__list'>
                        <li className='cart__1'>
                            <img className='cart__img' src={cart1} alt="" />
                        </li>
                        <li className='cart__1'>
                            <h1 className='cart__name'>Sun flower</h1>
                        <p className='cart__text'>unit pric 10$</p>
                        <button onClick={()=>setCount(count + 1)} className='cart__btn'>+</button>
                        <h1 className='cart__count'>{count}</h1>
                        <button onClick={()=>setCount(count - 1)} className='cart__btn'>-</button>
                        </li>
                        <li className='cart__1'>
                            <button className='cart__trash'><FaTrash/></button>
                        <h1 className='cart__total'>Total 10$</h1>
                        </li>

                        <li className='cart__2'>
                            <img className='cart__img' src={cart2} alt="" />
                        </li>
                        <li className='cart__2'>
                            <h1 className='cart__name'>White flower</h1>
                        <p className='cart__text'>unit pric 10$</p>
                        <button onClick={()=>setSount(sount + 1)} className='cart__btn'>+</button>
                        <h1 className='cart__count'>{sount}</h1>
                        <button onClick={()=>setSount(sount - 1)} className='cart__btn'>-</button>
                        </li>
                        <li className='cart__2'>
                            <button className='cart__trash'><FaTrash/></button>
                            <h1 className='cart__total'>Total 10$</h1>
                        </li>

                    <li className='cart__item2'>
                        <h1 className='cart__title2'>Subtotal for 3 items: 62$</h1>
                        <button className='cart__check'>Checkout</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cart