import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

{/* 리듀서 임포트 */ }
import signUpChangeField from './signUp/changeField/reducer'
import requestSignUp from './signUp/requestSignUp/reducer'

{/* 사가 임포트 */ }
import { signUpSaga } from './signUp/requestSignUp/saga'

{/* reducers */ }
const rootReducer = combineReducers({
  signUpChangeField,
  requestSignUp
});

{/* sagas */ }
export function* rootSaga(): Generator {
  {/* import한 saga 배열에 넣기 */ }
  yield all([
    signUpSaga()
  ]);
}

export type RootStore = ReturnType<typeof rootReducer>;
export default rootReducer;