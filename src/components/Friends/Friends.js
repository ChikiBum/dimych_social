import React from 'react';
import s from './Friends.module.css'

const Friends = ({ sideBar }) => {
    const friendsElements = sideBar.map( item => <div className={s.friend} key={item.id}> <img src={item.avatar}/>{item.name}</div>);

    return (
        <div>
           <h1>Friends</h1> 
            <div className={s.friendsWrapper}>
                {friendsElements}
            </div>
        </div>
    )
}

export default Friends;