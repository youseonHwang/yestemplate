{/* 값 reducer로 전달 */ }
import { createAction } from 'typesafe-actions';

{/* 액션 타입 지정 */ }
export const OPEN_MODAL = 'OPEN_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const openModal = createAction(
  OPEN_MODAL,
  ({ visible, theme, msg }) => ({
    visible,
    theme,
    msg,
  }),
)();
export const hideModal = createAction(
  HIDE_MODAL,
  ({ visible, theme, msg }) => ({
    visible,
    theme,
    msg,
  }),

)();