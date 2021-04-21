import { takeEvery, call, put } from 'redux-saga/effects';
import { signUp } from '../../../api/signup';
import { Actions } from '../../../modules/signUp/requestSignUp/types';

function* fetch(actions: Actions) {
  try {
    const request = yield call(signUp, actions.payload);
    yield put({
      type: 'SIGNUP_SUCCESS',
      payload: { success: request.success },
    });
  } catch (error) {
    yield put({
      type: 'SIGNUP_FAILURE',
      payload: { msg: error.msg },
    });
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* signUpSaga() {
  yield takeEvery('SIGNUP_REQUEST', fetch);
}