{/* 변경 값 reducer로 전달 */}
import { createAction } from 'typesafe-actions';

export const LOGIN_CHANGE_FIELD = 'LOGIN_CHANGE_FIELD';

export const changeLoginField = createAction(
  LOGIN_CHANGE_FIELD,
  ({ key, value }) => ({
    key,
    value,
  }),
)();