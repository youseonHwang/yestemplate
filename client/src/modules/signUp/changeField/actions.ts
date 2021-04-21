import { createAction } from 'typesafe-actions';


// 회원가입 정보란 변경 관련 actions
export const SIGNUP_FIELD_CHANGE = 'SIGNUP_FIELD_CHANGE';

export const signUpFieldChange = createAction(
  SIGNUP_FIELD_CHANGE,
  ({ key, value }) => ({
    key,
    value,
  }),
)();

