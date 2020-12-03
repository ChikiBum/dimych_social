import React from 'react';
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DilalogItem = ( { name, avatar, id } ) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={`/dialogs/${id}`} activeClassName={s.activeLink}>
                <img src={avatar}/>
                {name}
            </NavLink>
        </div>
    )
};


export default DilalogItem;