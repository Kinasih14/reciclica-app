import { createReducer, on, Action } from '@ngrx/store';
import {
  login,
  loginFail,
  loginSuccess,
  recoverPassword,
  recoverPasswordFail,
  recoverPasswordSuccess,
} from "./login.actions";
import { LoginState } from "./LoginState";
import { AppInitialState } from '../AppInitialState';

// Define the initial state
const initialState: LoginState = AppInitialState.login;

// Create the reducer
const reducer = createReducer(
  initialState,
  on(recoverPassword, (state) => ({
    ...state,
    error: null,
    isRecoveredPassword: false,
    isRecoveringPassword: true,
  })),
  on(recoverPasswordSuccess, (state) => ({
    ...state,
    error: null,
    isRecoveredPassword: true,
    isRecoveringPassword: false,
  })),
  on(recoverPasswordFail, (state, { error }) => ({
    ...state,
    error,
    isRecoveredPassword: false,
    isRecoveringPassword: false,
  })),
  on(login, (state) => ({
    ...state,
    error: null,
    isLoggedIn: false,
    isLoggingIn: true,
  })),
  on(loginSuccess, (state) => ({
    ...state,
    isLoggedIn: true,
    isLoggingIn: false,
  })),
  on(loginFail, (state, { error }) => ({
    ...state,
    error,
    isLoggedIn: false,
    isLoggingIn: false,
  }))
);

// Export the reducer function with proper types
export function loginReducer(state: LoginState | undefined, action: Action): LoginState {
  return reducer(state, action);
}
