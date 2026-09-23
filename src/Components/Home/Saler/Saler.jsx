import React from 'react'
import './Saler.css'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import card1 from '../../Images/card1.jpg'
import card2 from '../../Images/card2.jpg'
import card3 from '../../Images/card3.jpg'
import card4 from '../../Images/card4.jpg'

const Saler = () => {
  return (
    <>
    <div className="saler">
        <div className="container">
            <div className="saler__container">
                <h1 className='saler__contaier'>Best selers</h1>
                <ul className='saler__list'>
                    <li className='saler__item'>
                        <img className='saler__img' src={card1} alt="flower" />
                        <h1 className='saler__name'>Daisy</h1>
                        <h2 className='saler__price'>5$</h2>
                        <Link className='saler__link'><FaShoppingCart/>Add to cart</Link>
                    </li>
                    <li className='saler__item'>
                        <img className='saler__img' src={card2} alt="flower" />
                        <h1 className='saler__name'>Sun flower</h1>
                        <h2 className='saler__price'>5$</h2>
                        <Link className='saler__link'><FaShoppingCart/>Add to cart</Link>
                    </li>
                    <li className='saler__item'>
                        <img className='saler__img' src={card3} alt="flower" />
                        <h1 className='saler__name'>White Rose</h1>
                        <h2 className='saler__price'>5$</h2>
                        <Link className='saler__link'><FaShoppingCart/>Add to cart</Link>
                    </li>
                    <li className='saler__item'>
                        <img className='saler__img' src={card4} alt="flower" />
                        <h1 className='saler__name'>Periwinkle</h1>
                        <h2 className='saler__price'>5$</h2>
                        <Link className='saler__link'><FaShoppingCart/>Add to cart</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Saler