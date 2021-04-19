import { createAction } from 'typesafe-actions';

//? ACTION_TYPES
export const POST_LOGIN_REQUEST = 'POST_LOGIN_REQUEST';
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
export const POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE';

export const loginPostRequest = createAction(
  POST_LOGIN_REQUEST,
  ({ email, password }) => ({ email, password }),
)();

export const loginPostSuccess = createAction(
  POST_LOGIN_SUCCESS,
  ({ isLoginSuccessed }) => ({
    isLoginSuccessed,
  }),
)();

export const loginPostFailure = createAction(POST_LOGIN_FAILURE, ({ message }) => ({
  message,
}))();