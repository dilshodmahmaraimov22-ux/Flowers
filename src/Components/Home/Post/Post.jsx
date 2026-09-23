import React from 'react'
import './Post.css'
import avatar from '../../Images/avatar1.jpg'
import post1 from '../../Images/post1.jpg'
import post2 from '../../Images/post2.jpg'
import post3 from '../../Images/post3.jpg'

const Post = () => {
  return (
    <>
    <div className="post">
        <div className="container">
            <div className="post__container">
                <h1 className='post__title'>Latest posts</h1>
                <ul className='post__list'>
                    <li className='post__item'>
                        <img className='post__avatar' src={avatar} alt="avatar" />
                        <h2 className='post__date'>2022/22/8</h2>
                        <img className='post__img' src={post1} alt="rasm" />
                        <h1 className='post__title'></h1>
                        <p className='post__text'></p>
                        <img className='post__like' src="" alt="like" />
                        <h1 className='post__title2'></h1>
                    </li>
                    <li className='post__item'>
                        <img className='post__avatar' src={avatar} alt="avatar" />
                        <h2 className='post__date'>2022/22/8</h2>
                        <img className='post__img' src={post2} alt="rasm" />
                        <h1 className='post__title'></h1>
                        <p className='post__text'></p>
                        <img className='post__like' src="" alt="like" />
                        <h1 className='post__title2'></h1>
                    </li>
                    <li className='post__item'>
                        <img className='post__avatar' src={avatar} alt="avatar" />
                        <h2 className='post__date'>2022/22/8</h2>
                        <img className='post__img' src={post3} alt="rasm" />
                        <h1 className='post__title'></h1>
                        <p className='post__text'></p>
                        <img className='post__like' src="" alt="like" />
                        <h1 className='post__title2'></h1>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Post