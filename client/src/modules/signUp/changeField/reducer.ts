import { createReducer } from 'typesafe-actions';
import { State, Actions } from './types';
import {
  SIGNUP_FIELD_CHANGE,
} from './actions';

const initialState: State = {
  userInfo: {
    name: "",
    email: "",
    password: "",
  },
};

const signUpFieldChange = createReducer<State, Actions>(initialState, {

  [SIGNUP_FIELD_CHANGE]: (state, action) => {
    const key = action.payload.key;
    if (
      key === 'name' ||
      key === 'email' ||
      key === 'password'
    ) {
      return {
        ...state,
        userInfo: {
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

export default signUpFieldChange;