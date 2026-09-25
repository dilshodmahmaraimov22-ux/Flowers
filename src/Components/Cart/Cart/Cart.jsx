import React, { useState } from 'react'
import './Cart.css'
import cart1 from '../../Images/cart1.jpg'
import cart2 from '../../Images/cart2.jpg'
import { FaTrash } from 'react-icons/fa'

const Cart = () => {
    const [count, setCount] = useState(0);

    const handleDelete = (index)=>{
        const del = count.filter((a, i)=> i !== index);
        setCount(del);
    }
    
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
                    <li className='cart__item'>
                        <button onClick={()=>handleDelete(index)} className='cart__trash'><FaTrash/></button>
                        <h1 className='cart__total'>Total 10$</h1>
                    </li>

                    <li className='cart__items'>
                        <img className='cart__img' src={cart2} alt="" />
                        <h1 className='cart__name'>White flower</h1>
                        <p className='cart__text'>unit pric 10$</p>
                        <li className='cart__item3'>
                            <button onClick={()=>setCount(count + 1)} className='cart__btn'>+</button>
                            <h1 className='cart__count'>{count}</h1>
                            <button onClick={()=>setCount(count - 1)} className='cart__btn'>-</button>
                        </li>
                    </li>
                    <li className='cart__items'>
                        <button onClick={()=>handleDelete(index)} className='cart__trash'><FaTrash/></button>
                        <h1 className='cart__total'>Total 10$</h1>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cart