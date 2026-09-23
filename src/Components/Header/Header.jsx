import React from 'react'
import { Link } from 'react-router-dom'
import human from '../Images/human.png'
import shop from '../Images/shop.png'
import './Header.css'

const Header = () => {
  return (
    <>
    <div className="header">
        <div className="container">
            <div className="header__container">
                <h1 className='header__title'>Flower Shop</h1>
                <ul className='header__list'>
                    <li className='header__item'>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/shop">Shop</Link>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className='header__item'>
                        <img className='header__img' src={human} alt="surat" />
                        <img className='header__img' src={shop} alt="surat" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header