import React from 'react';
import s from './Dialogs.module.css'
import DilalogItem from './DilalogItem/DilalogItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from './../../redux/dialogsReducer';

const Dialogs = ( { dialogsPage: {dialogs, messages, newMessageText}, dispatch } ) => {

const dialogElements = dialogs.map( item => <DilalogItem name={item.name} avatar={item.avatar}  id={item.id} key={item.id}/>);
const messageElements = messages.map( item => <Message message={item.message} key={item.id}/>);

const addNewMassage = () => {
        // addPost('fromMessage');
        dispatch(sendMessageCreator()) 
   }

const onMessageChange = (e) => {
    // const text = newpostElement.current.value;
    const text = e.target.value;
    // updateNewPostText('fromMessage', text);
    dispatch(updateNewMessageBodyCreator(text)) ;
}

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div>
          <div>
              <textarea 
                onChange={ onMessageChange }
                value={newMessageText}/>
          </div>
          <div>
            <button onClick={ addNewMassage }>Add post</button>
          </div>
        </div>
        </div>
    )
}

export default Dialogs;