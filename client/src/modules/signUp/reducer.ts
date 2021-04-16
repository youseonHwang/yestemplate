import { createReducer } from 'typesafe-actions';
import { State, Actions } from './types';
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_FIELD_CHANGE,
} from './actions';

const initialState: State = {
  userInfo: {
    name: "name",
    email: "email@gmail.com",
    password: "password",
  },
  success: null,
  msg: '',
};

const signUpRequestField = createReducer<State, Actions>(initialState, {


  [SIGNUP_SUCCESS]: (state, action) => ({
    ...state,
    success: action.payload.success,
  }),
  [SIGNUP_FAILURE]: (state, action) => ({
    ...state,
    msg: action.payload.msg,
  }),
  [SIGNUP_REQUEST]: (state) => ({
    ...state
  }),

  [SIGNUP_FIELD_CHANGE]: (state, action) => {
    const key = action.payload.key;
    if (
      key === 'name' ||
      key === 'email' ||
      key === 'password'
    ) {
      return {
        ...state,
        ask: {
          ...state.userInfo,
          [key]: action.payload.value,
        },
      };
    } else {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
        },
      };
    }
  },

});

export default signUpRequestField;