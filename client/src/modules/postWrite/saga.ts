/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { takeLatest, call, put } from 'redux-saga/effects';
import {
  saveTemplate,
  editTemplate,
  uploadFile
} from '../../api/asyncTemplate';
import { Actions } from '../../modules/postWrite/types';

{/* 템플릿 저장 */ }
function* fetchSave(actions: Actions) {
  console.log(actions.payload)
  try {
    const req = yield call(saveTemplate, actions.payload);
    yield put({
      type: 'SAVE_TEMPLATE_FIELD_SUCCESS',
      payload: { success: req.success },
    });
  } catch (e) {
    yield put({
      type: 'SAVE_TEMPLATE_FIELD_FAILURE',
      payload: { msg: e.msg },
    });
  }
}

{/* 템플릿 수정 */ }
function* fetchEdit(actions: Actions) {
  console.log(actions.payload)
  try {
    const req = yield call(editTemplate, actions.payload);
    yield put({
      type: 'EDIT_TEMPLATE_FIELD_SUCCESS',
      payload: { template: req },
    });
  } catch (e) {
    yield put({
      type: 'EDIT_TEMPLATE_FIELD_FAILURE',
      payload: { msg: e.msg },
    });
  }
}
{/*파일업로드 */ }
function* fetchUpload(actions: Actions) {
  console.log('fetchUpload', actions.payload)
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

// function* fetchDelete(actions: Actions) {
//   try {
//     const req = yield call(deleteResumeAsync, actions.payload);
//     yield put({
//       type: 'DELETE_RESUME_FIELD_SUCCESS',
//       payload: { isDeleted: req.isDeleted },
//     });
//   } catch (e) {
//     yield put({
//       type: 'DELETE_RESUME_FIELD_FAILURE',
//       payload: { message: e.message },
//     });
//   }
// }

export function* requestTemplateSaga() {
  yield takeLatest('SAVE_TEMPLATE_FIELD_REQUEST', fetchSave);
  yield takeLatest('EDIT_TEMPLATE_FIELD_REQUEST', fetchEdit);
  yield takeLatest('UPLOAD_FILE_REQUEST', fetchUpload);
  // yield takeLatest('DELETE_RESUME_FIELD_REQUEST', fetchDelete);
}
