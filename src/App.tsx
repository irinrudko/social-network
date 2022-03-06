import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import NavBar from './components/Navbar/Navbar';
import Friends from './components/Friends/Friends';
import { BrowserRouter, Route } from 'react-router-dom';
import { ReduxStateType } from './redux/redux-store';
import { ActionTypes } from './redux/redux';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Store } from 'redux';


type AppType = {
  appState: () => ReduxStateType
  dispatch: (action: ActionTypes) => void
  store: Store<ReduxStateType, ActionTypes>
}

const App = (props: AppType) => {
  const state = props.appState();

  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <div className='app-wrapper'>
          <Header />
          <NavBar />

          <main className='app-wrapper-content'>
            <Route path='/profile' render={() => <Profile
              posts={state.profilePage.postsData} dispatch={props.dispatch} textPost={state.profilePage.postText} store={props.store} />} />
            <Route path='/dialogs' render={() => <DialogsContainer dialogs={state.dialogsPage.dialogsData} messages={state.dialogsPage.messagesData} messageText={state.dialogsPage.messageText}
              dispatch={props.dispatch} />} />
            <Route path='/friends' render={() => <Friends />} />
          </main>
        </div>
      </div >
    </BrowserRouter>
  );
}

export default App;
