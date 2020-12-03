import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
    <div >
        <div>
          <img  src='https://autoua.net/media/uploads/skoda/karoq-scout.jpg' />
        </div>
        <div className={s.descriptionBlock}>
          ava + desc
        </div>
    </div>
    )
};

export default ProfileInfo;