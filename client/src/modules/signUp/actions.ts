import { createAction } from 'typesafe-actions';

// 액션 타입 (이름) 생성
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

// 요청시
export const signUpRequest = createAction(
  SIGNUP_REQUEST,
  ({ name, email, password }) => ({ name, email, password }),
)();

// 회원가입 성공시 success반환?
export const signUpSuccess = createAction(
  SIGNUP_SUCCESS,
  ({ success }) => ({
    success,
  }),
)();

// 회원가입 실패시 msg 반환?
export const signUpFailure = createAction(
  SIGNUP_FAILURE, ({ msg }) => ({
    msg,
  }))();


// 회원가입 정보란 변경 관련 actions
export const SIGNUP_FIELD_CHANGE = 'SIGNUP_FIELD_CHANGE';
export const SIGNUP_FIELD_LOAD = 'SIGNUP_FIELD_LOAD';
export const SIGNUP_FIELD_INIT = 'SIGNUP_FIELD_INIT';

export const signUpFieldChange = createAction(
  SIGNUP_FIELD_CHANGE,
  ({ key, value }) => ({
    key,
    value,
  }),
)();

export const signUpFieldLoad = createAction(SIGNUP_FIELD_LOAD, ({ state }) => ({
  state,
}))();

export const signUpFieldInit = createAction(SIGNUP_FIELD_INIT, ({ }) => ({}))();