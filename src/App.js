import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = ( {state: { profilePage, dialogsPage, sideBar }, dispatch}  ) => {
  
  return (
      <div className = 'app-wrapper'>
        <Header />
        <Navbar state={sideBar}/>
        <div className='app-wrapper-content'>
          {/* <Route path='/dialogs' component={Dialogs}/> */}
          <Route path='/dialogs' render={() => <Dialogs dialogsPage={dialogsPage} dispatch={dispatch}/>}/>
          {/* <Route path='/profile' component={Profile}/> */}
          <Route path='/profile' render={() => <Profile profilePage={profilePage} dispatch={dispatch} />}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
  );
}

export default App;  
