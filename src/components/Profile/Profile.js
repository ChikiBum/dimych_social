import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ profilePage: {posts, newPostText}, dispatch }) => {

    return (
    <div >
      <ProfileInfo />
      <MyPosts 
        posts={posts} 
        dispatch={dispatch}
        newPostText={newPostText}
      />
    </div>
    )
};

export default Profile;