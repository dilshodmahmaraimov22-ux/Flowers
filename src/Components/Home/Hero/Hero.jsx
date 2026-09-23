import React from 'react'
import hero1 from '../../Images/hero1.jpg'
import hero2 from '../../Images/hero2.jpg'
import hero3 from '../../Images/hero3.jpg'
import hero4 from '../../Images/hero4.jpg'
import hero5 from '../../Images/hero5.jpg'
import hero6 from '../../Images/hero6.jpg'

const Hero = () => {
  return (
    <>
    <div className="hero">
        <div className="container">
            <div className="hero__container">
                <ul className='hero__list'>
                    <li className='hero__item'>
                        <h1 className='hero__title'>Flowers, 🌻 what the world needs</h1>
                        <p className='hero__text'>Browse between hounders of flowers</p>
                        <button className='hero__btn'>Browse</button>
                    </li>
                    <li className='hero__item'>
                        <img className='hero__img' src={hero1} alt="flower" />
                        <img className='hero__img' src={hero2} alt="flower" />
                        <img className='hero__img' src={hero3} alt="flower" />
                        <img className='hero__img' src={hero4} alt="flower" />
                        <img className='hero__img' src={hero5} alt="flower" />
                        <img className='hero__img' src={hero6} alt="flower" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero