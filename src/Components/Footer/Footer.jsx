import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaLocationArrow } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaAt } from 'react-icons/fa'

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
                    <li className='footer-item'>
                        <h1 className='footer__link1'>Links</h1>
                        <Link className='footer__link'>Home</Link>
                        <Link className='footer__link'>About</Link>
                        <Link className='footer__link'>Shop</Link>
                        <Link className='footer__link'>Login</Link>
                    </li>
                    <li className='footer-item'>
                        <h1 className='footer__link1'>Links</h1>
                        <Link className='footer__link'>Home</Link>
                        <Link className='footer__link'>About</Link>
                        <Link className='footer__link'>Shop</Link>
                        <Link className='footer__link'>Login</Link>
                    </li>
                    <li className='footer-item'>
                        <h1 className='footer_link1'>Contact</h1>
                        <Link className='footer__link'> <FaLocationArrow/> 26985 Brighton Lane, Lake Forest, CA</Link>
                        <Link className='footer__link'><FaAt/> support@Flowers.com</Link>
                        <Link className='footer__link'> <FaPhone/> +1 236 5489</Link>
                    </li>
                </ul>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer