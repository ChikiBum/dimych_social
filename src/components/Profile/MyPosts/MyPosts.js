import React, {createRef} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addpostActionCreator, updateNewPostTextActionCreator} from './../../../redux/profileReducer';

const MyPosts = ({ posts, dispatch, newPostText }) => {

const messages = posts.map((item) => {
  return <Post key={item.id}
        message={item.message}
        likesCount={item.likesCount}
  />
});

const newpostElement = createRef();

const addNewpost = () => {
  // addPost('fromMyPost');
  dispatch(addpostActionCreator())
};

const onPostChange = () => {
  const text = newpostElement.current.value;
  // updateNewPostText('fromMyPost', text);
  dispatch(updateNewPostTextActionCreator(text))
}

    return (
        <div className={s.postsBlock}>
        <h3>my posts</h3>
        <div>
          <div>
              <textarea 
                onChange={onPostChange}
                ref={newpostElement} 
                value={newPostText}
              />
          </div>
          <div>
            <button onClick={ addNewpost }>Add post</button>
          </div>
        </div>
        <div className={s.posts}>
          {messages}
        </div>
      </div>
    )
};

export default MyPosts;