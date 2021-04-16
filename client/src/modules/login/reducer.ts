import { createReducer } from 'typesafe-actions';
import { State, Actions } from './types';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './actions';

const initialState: State = {
  success: null,
  msg: '',
};

const loginRequestField = createReducer<State, Actions>(initialState, {
  [LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    success: action.payload.success,
  }),
  [LOGIN_FAILURE]: (state, action) => ({
    ...state,
    msg: action.payload.msg,
  }),
  [LOGIN_REQUEST]: (state) => ({ ...state }),
});

export default loginRequestField;