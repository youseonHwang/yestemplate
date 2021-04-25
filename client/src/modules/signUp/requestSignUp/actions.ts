import { createAction } from 'typesafe-actions';

//? ACTION_TYPES
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const signUpRequest = createAction(
  SIGNUP_REQUEST,
  ({ name, email, password }) => ({ name, email, password }),
)();

export const signUpSuccess = createAction(
  SIGNUP_SUCCESS,
  ({ success }) => ({
    success,
  }),
)();

export const signUpFailure = createAction(SIGNUP_FAILURE, ({ msg }) => ({
  msg,
}))();