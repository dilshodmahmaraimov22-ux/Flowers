import React from 'react'
import hero1 from '../Images/hero1.png'

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
                        <img src={hero1} alt="" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero