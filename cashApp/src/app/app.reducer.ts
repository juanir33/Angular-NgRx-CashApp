import { Action, ActionReducerMap } from '@ngrx/store';
import * as ui from './shared/ui.reducer';	
import { State } from './shared/ui.reducer';
import { authReducer, StateAuth } from './auth/auth.reducer';


export interface AppState {
   ui: ui.State,
   user: StateAuth
}



export const appReducers: ActionReducerMap<AppState> = {
   ui: ui.uiReducer,
   user: authReducer
}