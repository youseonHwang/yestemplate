{/* 값 reducer로 전달 */}
import { createAction } from 'typesafe-actions';

{/* 액션 타입 지정 */}
export const LOGIN_CHANGE_FIELD = 'LOGIN_CHANGE_FIELD';

{/* 액션 함수 생성 후 들어온 상태 값 리턴 */}
export const changeLoginField = createAction(
  LOGIN_CHANGE_FIELD,
  ({ key, value }) => ({
    key,
    value,
  }),
)();

