import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import { FaShoppingCartt } from 'react-icons/fa'

const Card = () => {
  return (
    <>
    <div className="card">
        <div className="container">
            <div className="card__container">
                <h1 className='card__contaier'>Best selers</h1>
                <ul className='card__list'>
                    <li className='card__item'>
                        <img className='card__img' src="" alt="" />
                        <h1 className='card__img'></h1>
                        <h2 className='card__price'></h2>
                        <Link className='card__link'><FaShoppingCart/></Link>
                    </li>
                    <li className='card__item'>
                        <img className='card__img' src="" alt="" />
                        <h1 className='card__img'></h1>
                        <h2 className='card__price'></h2>
                        <Link className='card__link'><FaShoppingCart/></Link>
                    </li>
                    <li className='card__item'>
                        <img className='card__img' src="" alt="" />
                        <h1 className='card__img'></h1>
                        <h2 className='card__price'></h2>
                        <Link className='card__link'><FaShoppingCart/></Link>
                    </li>
                    <li className='card__item'>
                        <img className='card__img' src="" alt="" />
                        <h1 className='card__img'></h1>
                        <h2 className='card__price'></h2>
                        <Link className='card__link'><FaShoppingCart/></Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card