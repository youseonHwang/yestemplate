/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { takeLatest, call, put, delay } from 'redux-saga/effects';

import {
  saveTemplate,
  editTemplate,
  uploadFile
} from '../../api/asyncTemplate';
import { Actions } from '../../modules/postWrite/types';

{/* 템플릿 저장 */ }
function* fetchSave(actions: Actions) {
  try {
    const req = yield call(saveTemplate, actions.payload);
    yield put({
      type: 'SAVE_TEMPLATE_FIELD_SUCCESS',
      payload: { success: req.success },
    });
    yield put({
      type: 'OPEN_MODAL',
      payload: { visible: true, theme: "success", msg: "템플릿 저장 성공했습니다." }
    })
    yield delay(4000);
    yield put({
      type: 'OPEN_MODAL',
      payload: { visible: false }
    })
  } catch (e) {
    yield put({
      type: 'SAVE_TEMPLATE_FIELD_FAILURE',
      payload: { msg: e.msg },
    });
    yield put({
      type: 'OPEN_MODAL',
      payload: { visible: true, theme: "error", msg: "템플릿 저장 실패했습니다." }
    })
    yield delay(4000);
    yield put({
      type: 'OPEN_MODAL',
      payload: { visible: false }
    })
  }
}

{/* 템플릿 수정 */ }
function* fetchEdit(actions: Actions) {
  try {
    const req = yield call(editTemplate, actions.payload);
    yield put({
      type: 'EDIT_TEMPLATE_FIELD_SUCCESS',
      payload: { template: req },
    });
    yield put({
      type: 'OPEN_MODAL',
      payload: { visible: true, theme: "success", msg: "템플릿 수정 성공했습니다." }
    })
    yield delay(4000);
    yield put({
      type: 'OPEN_MODAL',
      payload: { visible: false }
    })
  } catch (e) {
    yield put({
      type: 'EDIT_TEMPLATE_FIELD_FAILURE',
      payload: { msg: e.msg },
    });
    yield put({
      type: 'OPEN_MODAL',
      payload: { visible: true, theme: "error", msg: "템플릿 수정 실패했습니다." }
    })
    yield delay(4000);
    yield put({
      type: 'OPEN_MODAL',
      payload: { visible: false }
    })
  }
}
{/*파일업로드 */ }
function* fetchUpload(actions: Actions) {
  try {
    const req = yield call(uploadFile, actions.payload);
    yield put({
      type: 'UPLOAD_FILE_SUCCESS',
      payload: { isUpload: req.isUpload },
    });
  } catch (e) {
    yield put({
      type: 'UPLOAD_FILE_FAILURE',
      payload: { isUpload: false },
    });
  }
}
export function* requestTemplateSaga() {
  yield takeLatest('SAVE_TEMPLATE_FIELD_REQUEST', fetchSave);
  yield takeLatest('EDIT_TEMPLATE_FIELD_REQUEST', fetchEdit);
  yield takeLatest('UPLOAD_FILE_REQUEST', fetchUpload);
  // yield takeLatest('DELETE_RESUME_FIELD_REQUEST', fetchDelete);
}
