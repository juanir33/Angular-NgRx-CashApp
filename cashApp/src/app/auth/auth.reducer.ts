import { Action, createReducer, on } from '@ngrx/store';
import { setUser, unSetUser } from './auth.actions';
import { User } from './user';

export interface StateAuth{
	user: User | null; 
}

export const initialState: StateAuth = {
   user: null,
}

const _authReducer = createReducer(initialState,

	on(setUser, (state, {user}) => ({ ...state, user: {...user}})),
	on(unSetUser, state => ({...state, user: null}))

);

export function authReducer(state: StateAuth | undefined, action: Action) {
	return _authReducer(state, action);
}