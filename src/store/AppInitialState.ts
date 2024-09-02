// AppInitialState.ts
import { AppState } from "./AppState";

export const AppInitialState: AppState = {
  loading: {
    isLoading: false,
    show: false,
  },
  login: {
    error: null,
    isLoggedIn: false,
    isLoggingIn: false,
    isRecoveredPassword: false,
    isRecoveringPassword: false,
  }
};
