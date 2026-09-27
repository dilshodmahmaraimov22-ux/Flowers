import React from 'react'
import shop1 from '../../Images/shop1.jpg'
import shop2 from '../../Images/shop2.jpg'
import shop3 from '../../Images/shop3.jpg'
import shop4 from '../../Images/shop4.jpg'

const Shop1 = () => {
  return (
    <>
    <div className="shop">
        <div className="container">
            <div className="shop__container">
                <ul className='shop__list'>
                    <li className='shop__item'>
                        <img className='shop__img' src={shop1} alt="" />
                        <h1 className='shop__title'>Periwinkle</h1>
                        <li className='shop__flex'>
                            <p className='shop__text'>5$</p>
                            <button className='shop__btn'>Add to cart</button>
                        </li>
                    </li>
                    <li className='shop__item'>
                        <img className='shop__img' src={shop2} alt="" />
                        <h1 className='shop__title'>Periwinkle</h1>
                        <li className='shop__flex'>
                            <p className='shop__text'>5$</p>
                            <button className='shop__btn'>Add to cart</button>
                        </li>
                    </li>
                    <li className='shop__item'>
                        <img className='shop__img' src={shop3} alt="" />
                        <h1 className='shop__title'>Periwinkle</h1>
                        <li className='shop__flex'>
                            <p className='shop__text'>5$</p>
                            <button className='shop__btn'>Add to cart</button>
                        </li>
                    </li>
                    <li className='shop__item'>
                        <img className='shop__img' src={shop4} alt="" />
                        <h1 className='shop__title'>Periwinkle</h1>
                        <li className='shop__flex'>
                            <p className='shop__text'>5$</p>
                            <button className='shop__btn'>Add to cart</button>
                        </li>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Shop1