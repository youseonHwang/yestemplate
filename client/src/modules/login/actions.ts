import { createAction } from 'typesafe-actions';

export const LOGIN_CHANGE_FIELD = 'LOGIN_CHANGE_FIELD';

{/* reducer로 변경 값 전달 */}
export const changeLoginField = createAction(
  LOGIN_CHANGE_FIELD,
  ({ key, value }) => ({
    key,
    value,
  }),
)();
