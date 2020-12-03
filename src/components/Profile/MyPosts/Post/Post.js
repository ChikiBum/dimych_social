import React from 'react';
import s from './Post.module.css';

const Post = ({ message, likesCount }) => {
  return (
    <div className={s.item}>
        <img src='https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg'/>
        { message }
        <div>
          <span>like</span> { likesCount }
        </div>
    </div>
  )
};

export default Post;