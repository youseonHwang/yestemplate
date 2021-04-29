{/* login field 상태 값 변경 */ }
import { createReducer } from 'typesafe-actions';
import { State, Actions } from './types';
import { OPEN_MODAL, HIDE_MODAL } from './actions';

{/* 초기 상태 지정 */ }
const initialState: State = {
  modal: {
    visible: false,
    theme: "",
    msg: "",
  },
};

const openModal = createReducer<State, Actions>(initialState, {
  [OPEN_MODAL]: (state, action) => ({
    ...state,
    modal: {
      visible: action.payload.visible,
      theme: action.payload.theme,
      msg: action.payload.msg
    }
  }),
});

const hideModal = createReducer<State, Actions>(initialState, {
  [HIDE_MODAL]: (state, action) => ({
    ...state,
    modal: {
      visible: action.payload.visible,
      theme: action.payload.theme,
      msg: action.payload.msg
    }
  }),
});

export default openModal;