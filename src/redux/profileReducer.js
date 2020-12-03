const ADD_POST = 'ADD-POST',
UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type){
        case ADD_POST: 
        const newPost = {
            id: state.posts.length + 1, 
            message: state.newPostText, 
            likesCount: 0};
            
            state.posts.push(newPost);
            state.newPostText = 'Введите сообщение' ;
            return state;

        case UPDATE_NEW_POST_TEXT: 
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addpostActionCreator = () => {
    return {
      type : ADD_POST
    }
  } 

export const  updateNewPostTextActionCreator = (text) => {
    return {
      type : UPDATE_NEW_POST_TEXT,
      newText : text
    }
  }

export default profileReducer;