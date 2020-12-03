const ADD_POST = 'ADD-POST',
UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type){
        case ADD_POST: 
        const newDialog = {
            id: state.dialogs.length + 1,  
            name:'Vladik', 
            avatar: 'https://otvet.imgsmail.ru/download/201890154_cc41733ab1966f78f7c3923f8988db3e_800.jpg'},
        newMessage = {
            id: state.messages.length + 1, 
            message: state.newMessageText};
                            
            state.dialogs.push(newDialog);
            state.messages.push(newMessage);
            state.newMessageText = 'Введите сообщение' ;
            return state;

        case UPDATE_NEW_POST_TEXT: 
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    return {
        type : ADD_POST
    }
} 

export const  updateNewMessageBodyCreator = (text) => {
    return {
      type : UPDATE_NEW_POST_TEXT,
      newText : text
    }
  }

export default dialogsReducer;