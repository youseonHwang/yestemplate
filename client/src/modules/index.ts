import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

{/* 리듀서 임포트 */ }
import loginField from './login/reducer';
import loginRequestField from './postLogin/reducer';
import signUpChangeField from './signUp/changeField/reducer'
import requestSignUp from './signUp/requestSignUp/reducer'

{/* 사가 임포트 */ }
import { loginSaga } from '../modules/postLogin/saga';
import { signUpSaga } from './signUp/requestSignUp/saga'

{/* reducers */ }
const rootReducer = combineReducers({
  loginField,
  loginRequestField,
  signUpChangeField,
  requestSignUp
})

{/* sagas */ }
export function* rootSaga(): Generator {
  yield all([
    loginSaga(),
    signUpSaga()
  ]);
}

export type RootStore = ReturnType<typeof rootReducer>;
export default rootReducer;