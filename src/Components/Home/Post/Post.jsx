import React from 'react'
import './Post.css'
import avatar from '../../Images/avatar1.jpg'

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
                        <h2 className='post__date'></h2>
                        <img className='post__img' src="" alt="rasm" />
                        <h1 className='post__title'></h1>
                        <p className='post__text'></p>
                        <img className='post__like' src="" alt="like" />
                        <h1 className='post__title2'></h1>
                    </li>
                    <li className='post__item'>
                        <img className='post__avatar' src={avatar} alt="avatar" />
                        <h2 className='post__date'></h2>
                        <img className='post__img' src="" alt="rasm" />
                        <h1 className='post__title'></h1>
                        <p className='post__text'></p>
                        <img className='post__like' src="" alt="like" />
                        <h1 className='post__title2'></h1>
                    </li>
                    <li className='post__item'>
                        <img className='post__avatar' src={avatar} alt="avatar" />
                        <h2 className='post__date'></h2>
                        <img className='post__img' src="" alt="rasm" />
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