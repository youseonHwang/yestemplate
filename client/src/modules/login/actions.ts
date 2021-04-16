import { createAction } from 'typesafe-actions';

// 액션 타입 (이름) 생성
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// 요청시
export const loginRequest = createAction(
  LOGIN_REQUEST,
  ({ name, email, token }) => ({ name, email, token }),
)();

// 로그인 성공시 success반환?
export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  ({ success }) => ({
    success,
  }),
)();

// 로그인 실패시 msg 반환?
export const loginFailure = createAction(
  LOGIN_FAILURE, ({ msg }) => ({
    msg,
  }))();