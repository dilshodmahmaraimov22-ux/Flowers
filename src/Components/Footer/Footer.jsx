import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className="container">
            <div className="footer__container">
                <ul className='footer__list'>
                    <li className='footer-item'>
                        <h1 className='footer__title'>Flower Shop</h1>
                        <p>
                            Some random stuff about flower shop and 
                            some more info cuz this box had to get fill 
                            Some random stuff about flower shop and 
                            some more info cuz this box had to get fill 
                            Some random stuff about flower shop and 
                            some more info cuz this box had to get fill
                        </p>
                    </li>
                    <li className='footer-item'></li>
                    <li className='footer-item'></li>
                    <li className='footer-item'></li>
                </ul>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer