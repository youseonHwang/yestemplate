import { takeEvery, call, put, delay } from 'redux-saga/effects';
import { signUp } from '../../../api/signup';
import { Actions } from '../../../modules/signUp/requestSignUp/types';

function* fetch(actions: Actions) {
  try {
    const request = yield call(signUp, actions.payload);
    yield put({
      type: 'SIGNUP_SUCCESS',
      payload: { success: request.success },
    });
    yield put({
      type: 'OPEN_MODAL',
      payload: { visible: true, theme: "success", msg: "회원가입 성공했습니다. 로그인 해주세요." }
    })
    yield delay(4000);
    yield put({
      type: 'OPEN_MODAL',
      payload: { visible: false }
    })
  } catch (error) {
    yield put({
      type: 'SIGNUP_FAILURE',
      payload: { msg: error.msg },
    });
    yield put({
      type: 'OPEN_MODAL',
      payload: { visible: true, theme: "error", msg: "회원가입 실패했습니다. 정보를 재확인해주세요." }
    })
    yield delay(4000);
    yield put({
      type: 'OPEN_MODAL',
      payload: { visible: false }
    })
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* signUpSaga() {
  yield takeEvery('SIGNUP_REQUEST', fetch);
}