import { AuthActionTypes, authReducer } from './auth-reducer';
import { combineReducers, createStore } from 'redux'
import { DialogsActionTypes, dialogsReducer } from './dialogs-reducer';
import { ProfileActionTypes, profileReducer } from './profile-reducer';
import { UsersActionTypes, usersReducer } from './users-reducer';

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})


export type ReduxStateType = ReturnType<typeof rootReducers>
export type ActionTypes = ProfileActionTypes | DialogsActionTypes | UsersActionTypes | AuthActionTypes


let store = createStore(rootReducers);
export default store;

//@ts-ignore
window.store = store;




