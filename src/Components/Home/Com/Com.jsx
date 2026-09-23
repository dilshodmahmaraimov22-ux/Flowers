import React from 'react'
import './Com.css'
import { FaStar } from 'react-icons/fa'
import com1 from '../../Images/com1.jpg'
import com2 from '../../Images/com2.jpg'
import com3 from '../../Images/com3.jpg'

const Com = () => {
  return (
    <>
    <div className="com">
        <div className="container">
            <div className="com__container">
                <h1 className='com__title'>Comments</h1>
                <ul className='com__list'>
                    <li className='com__item'>
                        <img className='com__avatar' src={com1} alt="surat" />
                        <p className='com__text'>i get flowers from them for my baby mama, she love them so much 🔥💯</p>
                        <li className='com__item2'>
                            <FaStar className='com__icon'/>
                            <FaStar className='com__icon'/>
                            <FaStar className='com__icon'/>
                            <FaStar className='com__icon'/>
                            <FaStar className='com__icon1'/>
                        </li>
                    </li>
                    <li className='com__item'>
                        <img className='com__avatar' src={com2} alt="surat" />
                        <p className='com__text'>i get flowers from them for my baby mama, she love them so much 🔥💯</p>
                        <li className='com__item2'>
                            <FaStar className='com__icon'/>
                            <FaStar className='com__icon'/>
                            <FaStar className='com__icon'/>
                            <FaStar className='com__icon'/>
                            <FaStar className='com__icon'/>
                        </li>
                    </li>
                    <li className='com__item'>
                        <img className='com__avatar' src={com3} alt="surat" />
                        <p className='com__text'>i get flowers from them for my baby mama, she love them so much 🔥💯</p>
                        <li className='com__item2'>
                            <FaStar className='com__icon'/>
                            <FaStar className='com__icon'/>
                            <FaStar className='com__icon'/>
                            <FaStar className='com__icon'/>
                            <FaStar className='com__icon'/>
                        </li>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Com