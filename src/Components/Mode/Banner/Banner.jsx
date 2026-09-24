import React from 'react'
import { FaLightbulb } from 'react-icons/fa'
import { FaBolt } from 'react-icons/fa6'
import { FaHammer } from 'react-icons/fa'
import { FaBox } from 'react-icons/fa'
import { FaScrewdriverWrench } from 'react-icons/fa6'
import { FaKey } from 'react-icons/fa'

const Banner = () => {
  return (
    <>
    <div className="banner">
        <div className="container">
            <div className="banner__container">
                <ul className='banner__list'>
                    <li className='banner__item'>
                        <FaLightbulb/>
                        <h1 className='banner__title'></h1>
                        <p className='banner__text'></p>
                    </li>
                    <li className='banner__item'>
                        <FaBolt/>
                        <h1 className='banner__title'></h1>
                        <p className='banner__text'></p>
                    </li>
                    <li className='banner__item'>
                        <FaHammer/>
                        <h1 className='banner__title'></h1>
                        <p className='banner__text'></p>
                    </li>
                    <li className='banner__item'>
                        <FaBox/>
                        <h1 className='banner__title'></h1>
                        <p className='banner__text'></p>
                    </li>
                    <li className='banner__item'>
                        <FaScrewdriverWrench/>
                        <h1 className='banner__title'></h1>
                        <p className='banner__text'></p>
                    </li>
                    <li className='banner__item'>
                        <FaKey/>
                        <h1 className='banner__title'></h1>
                        <p className='banner__text'></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner