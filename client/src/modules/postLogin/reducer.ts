import { createReducer } from 'typesafe-actions';
import { State, Actions } from './types';
import {
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
} from './actions';

const initialState: State = {
  isMailSucssessed: null,
  message: '',
};

const loginRequestField = createReducer<State, Actions>(initialState, {
  [POST_LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    isMailSucssessed: action.payload.isMailSucssessed,
  }),
  [POST_LOGIN_FAILURE]: (state, action) => ({
    ...state,
    message: action.payload.message,
  }),
  [POST_LOGIN_REQUEST]: (state) => ({ ...state }),
});
export default loginRequestField;