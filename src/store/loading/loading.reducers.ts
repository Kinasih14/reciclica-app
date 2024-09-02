import { createReducer, on, Action } from "@ngrx/store";
import { hide, show } from "./loading.actions";

// Definisikan initial state
export interface LoadingState {
  isLoading: boolean;
}

export const initialState: LoadingState = {
  isLoading: false,
};

// Buat reducer dengan initial state yang sesuai
const reducer = createReducer(
  initialState,
  on(show, (state) => ({
    ...state,
    isLoading: true
  })),
  on(hide, (state) => ({
    ...state,
    isLoading: false
  }))
);

export function loadingReducer(state: LoadingState | undefined, action: Action): LoadingState {
  return reducer(state, action);
}
