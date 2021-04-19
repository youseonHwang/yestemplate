import { createReducer } from 'typesafe-actions';
import { State, Actions } from './types';
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from './actions';

const initialState: State = {
  success: null,
  msg: '',
};

const signUpRequest = createReducer<State, Actions>(initialState, {
  [SIGNUP_SUCCESS]: (state, action) => ({
    ...state,
    success: action.payload.success,
  }),
  [SIGNUP_FAILURE]: (state, action) => ({
    ...state,
    msg: action.payload.msg,
  }),
  [SIGNUP_REQUEST]: (state) => ({ ...state }),
});

export default signUpRequest;