import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'


const Login = () => {
    const [text, setText] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("text=", text, "password=", password);
        
    }

  return (
    <>
    <div className="login">
        <div className="container">
            <div className="login__container">
                <ul className='login__list'>
                    <li className='login__item'>
                        <h1 className='login__title'>Login</h1>
                        <p className='login__text'>Login and have more fun</p>
                        <Link to="/" className='login__link'><FaHome/> Back to home</Link>
                        <form onSubmit={handleSubmit}>
                            <input className='login__username' 
                            type="text"
                            placeholder='loginni kiriting'
                            value={text}
                            onChange={(e)=>setText(e.target.value)}
                            />
                            <input className='login__password' 
                            type="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                             />
                            <input type="checkbox" />
                            <button type='submit' className='login__btn'>Login</button>
                        </form>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login