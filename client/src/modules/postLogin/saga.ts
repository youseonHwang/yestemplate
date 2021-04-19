{/* api가 있어야 사용 가능.. */ }
import { takeEvery, call, put } from 'redux-saga/effects';
import { postLoginAsync } from '../../api/login';
import { Actions } from '../../modules/postLogin/types';

{/* yield put에서 각각의 타입을 리슨하고 있는 리듀서가 반응함 */}

function* fetchLogin(actions: Actions) {
  try {
    const req = yield call(postLoginAsync, actions.payload);
    yield put({ 
      type: 'POST_LOGIN_SUCCESS',
      payload: { isLoginSuccessed: req.isLoginSuccessed },
    });
  } catch (error) {
    yield put({
      type: 'POST_LOGIN_FAILURE',
      payload: { message: error.message },
    });
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* loginSaga() {
  yield takeEvery('POST_LOGIN_REQUEST', fetchLogin);
}