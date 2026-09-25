import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className="login">
        <div className="container">
            <div className="login__container">
                <ul className='login__list'>
                    <li className='login__item'>
                        <h1 className='login__title'></h1>
                        <p></p>
                        <Link to="/"/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login