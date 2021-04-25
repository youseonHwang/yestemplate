/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { takeLatest, call, put } from 'redux-saga/effects';
import {
  saveTemplate
} from '../../api/asyncTemplate';
import { Actions } from '../../modules/postWrite/types';

{/* 템플릿 저장 */}
function* fetchSave(actions: Actions) {
  console.log('saga로 옴')
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

// {/* 템플릿 수정 */}
// function* fetchEdit(actions: Actions) {
//   try {
//     const req = yield call(editResumeAsync, actions.payload);
//     yield put({
//       type: 'EDIT_RESUME_FIELD_SUCCESS',
//       payload: { resume: req },
//     });
//   } catch (e) {
//     yield put({
//       type: 'EDIT_RESUME_FIELD_FAILURE',
//       payload: { message: e.message },
//     });
//   }
// }

// function* fetchUpdate(actions: Actions) {
//   try {
//     const req = yield call(updateResumeAsync, actions.payload);
//     yield put({
//       type: 'UPDATE_RESUME_FIELD_SUCCESS',
//       payload: { newResume: req.newResume, isEdited: req.isEdited },
//     });
//   } catch (e) {
//     yield put({
//       type: 'UPDATE_RESUME_FIELD_FAILURE',
//       payload: { isEdited: e.message },
//     });
//   }
// }

// function* fetchUpload(actions: Actions) {
//   try {
//     const req = yield call(uploadImageAsync, actions.payload);
//     yield put({
//       type: 'ON_UPLOAD_IMAGE_SUCCESS',
//       payload: { location: req.location, isUpload: req.isUpload },
//     });
//   } catch (e) {
//     yield put({
//       type: 'ON_UPLOAD_IMAGE_FAILURE',
//       payload: { isEdited: e.message },
//     });
//   }
// }

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
  // yield takeLatest('EDIT_RESUME_FIELD_REQUEST', fetchEdit);
  // yield takeLatest('UPDATE_RESUME_FIELD_REQUEST', fetchUpdate);
  // yield takeLatest('ON_UPLOAD_IMAGE_REQUEST', fetchUpload);
  // yield takeLatest('DELETE_RESUME_FIELD_REQUEST', fetchDelete);
}
