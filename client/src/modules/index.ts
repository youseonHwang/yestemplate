import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

{/* 리듀서 임포트 */ }
import loginField from './login/reducer';
import loginRequestField from './postLogin/reducer';

{/* 사가 임포트 */ }
import { loginSaga } from '../modules/postLogin/saga';

{/* reducers */ }
const rootReducer = combineReducers({
  loginField,
  loginRequestField
});

{/* sagas */ }
export function* rootSaga(): Generator {
  yield all([
    loginSaga(),
  ]);
}

export type RootStore = ReturnType<typeof rootReducer>;
export default rootReducer;