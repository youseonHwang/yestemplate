import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

{/* 리듀서 임포트 */ }
import loginRequestField from './login/reducer';
import signUpRequestField from './signUp/reducer'

{/* 사가 임포트 */ }
//... 아직 없음


{/* reducers */ }
const rootReducer = combineReducers({
  loginRequestField,
  signUpRequestField
});

{/* sagas */ }
export function* rootSaga(): Generator {

  yield all([
    {/* import한 saga 배열에 넣기 */ }
  ]);
}

export type RootStore = ReturnType<typeof rootReducer>;
export default rootReducer;