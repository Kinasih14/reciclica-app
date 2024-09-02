import { show, hide } from "./loading.actions";
import { loadingReducer } from "./loading.reducers";
import { LoadingState } from "./loading.reducers";
import { createAction } from '@ngrx/store';

describe('Loading store', () => {

  it('show', () => {
    const initialState: LoadingState = { isLoading: false };
    const newState = loadingReducer(initialState, show());

    expect(newState).toEqual({ isLoading: true });
  });

  it('hide', () => {
    const initialState: LoadingState = { isLoading: true };
    const newState = loadingReducer(initialState, hide());

    expect(newState).toEqual({ isLoading: false });
  });

  it('should keep state if action is unknown', () => {
    const initialState: LoadingState = { isLoading: true };
    const action = createAction("UNKNOWN"); // Correct usage with NgRx
    const newState = loadingReducer(initialState, action);

    expect(newState).toEqual({ isLoading: true });
  });

});
