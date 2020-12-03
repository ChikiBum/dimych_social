const ADD_POST = 'ADD-POST',
UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';

const initialState = {
  posts : [
      {id:1, message:'Hello!!', likesCount: 12},
      {id:2, message:'How are you?', likesCount: 11},
      {id:3, message:'Hello! You too', likesCount: 9},
      {id:4, message:'Yo', likesCount: 1},
      {id:5, message:'Yo', likesCount: 111}
  ],
  newPostText: 'Введите сообщение' 
}

const profileReducer = (state = initialState, action) => {
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