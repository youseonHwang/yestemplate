{/* login field 상태 값 변경 */}
import { createReducer } from 'typesafe-actions';
import { State, Actions } from './types';
import { LOGIN_CHANGE_FIELD } from './actions';

const initialState: State = {
  login: {
    email: "",
    password: "",
  },
};

const loginField = createReducer<State, Actions>(initialState, {
  [LOGIN_CHANGE_FIELD]: (state, action) => {
    const key = action.payload.key;
    if(
      key === 'email' || 
      key === 'password' 
    ) {
      return {
        ...state,
        login: {
          ...state.login,
          [key]: action.payload.value,
        },
      };
    } else {
      return {
        ...state,
        login: {
          ...state.login,
        },
      };
    }
  },
});

export default loginField;