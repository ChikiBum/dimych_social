import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

const store = {
    _state : {
        profilePage: {
            posts : [
                {id:1, message:'Hello!!', likesCount: 12},
                {id:2, message:'How are you?', likesCount: 11},
                {id:3, message:'Hello! You too', likesCount: 9},
                {id:4, message:'Yo', likesCount: 1},
                {id:5, message:'Yo', likesCount: 111}
            ],
            newPostText: 'Введите сообщение' 
        },
    
        dialogsPage: {
            dialogs : [
                {id:1, name:'Sanych', avatar: 'https://cdn1.flamp.ru/6e8b1e5fe1cc01a4d15e1d27c602dfa7.jpg'},
                {id:2, name:'Andriy', avatar: 'https://i.pinimg.com/originals/4d/af/2f/4daf2f183af331a8ba9a12bc2a458486.jpg'},
                {id:3, name:'Strelya', avatar: 'https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg'},
                {id:4, name:'Vladik', avatar: 'https://otvet.imgsmail.ru/download/201890154_cc41733ab1966f78f7c3923f8988db3e_800.jpg'},
                {id:5, name:'Marik', avatar: 'data:image/jpeg;base64,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'}
              ],
            messages : [
                {id:1, message:'Hello!!'},
                {id:2, message:'How are you?'},
                {id:3, message:'Hello! You too'},
                {id:4, message:'Yo'},
                {id:5, message:'Yo'}
              ],
            newMessageText: 'Введите сообщение' 
        },
    
        sideBar: [
            {id:1, name:'Sanych', avatar: 'https://cdn1.flamp.ru/6e8b1e5fe1cc01a4d15e1d27c602dfa7.jpg'},
            {id:2, name:'Andriy', avatar: 'https://i.pinimg.com/originals/4d/af/2f/4daf2f183af331a8ba9a12bc2a458486.jpg'},
            {id:3, name:'Strelya', avatar: 'https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg'},
        ]
       
      
    } ,
    _callSubscriber(){
        console.log('state changed')
    },
    
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
    
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
        
    }   
}



export default store;