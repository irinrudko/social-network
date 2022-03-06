import { combineReducers, createStore } from 'redux'
import { dialogsReducer } from './dialogs-reducer';
import { profileReducer } from './profile-reducer';

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

type RootState = typeof rootReducers;


export type ReduxStateType = ReturnType<RootState>

let store = createStore(rootReducers);
export default store;



