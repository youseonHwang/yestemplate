import { createAction } from 'typesafe-actions';

export const SAVE_TEMPLATE_FIELD_REQUEST = 'SAVE_TEMPLATE_FIELD_REQUEST';
export const SAVE_TEMPLATE_FIELD_SUCCESS = 'SAVE_TEMPLATE_FIELD_SUCCESS';
export const SAVE_TEMPLATE_FIELD_FAILURE = 'SAVE_TEMPLATE_FIELD_FAILURE';

export const EDIT_TEMPLATE_FIELD_REQUEST = 'EDIT_TEMPLATE_FIELD_REQUEST';
export const EDIT_TEMPLATE_FIELD_SUCCESS = 'EDIT_TEMPLATE_FIELD_SUCCESS';
export const EDIT_TEMPLATE_FIELD_FAILURE = 'EDIT_TEMPLATE_FIELD_FAILURE';

export const UPLOAD_FILE_REQUEST = 'UPLOAD_FILE_REQUEST';
export const UPLOAD_FILE_SUCCESS = 'UPLOAD_FILE_SUCCESS';
export const UPLOAD_FILE_FAILURE = 'UPLOAD_FILE_FAILURE';

// export const DELETE_RESUME_FIELD_REQUEST = 'DELETE_RESUME_FIELD_REQUEST';
// export const DELETE_RESUME_FIELD_SUCCESS = 'DELETE_RESUME_FIELD_SUCCESS';
// export const DELETE_RESUME_FIELD_FAILURE = 'DELETE_RESUME_FIELD_FAILURE';

{/* template 저장 */ }
export const saveTemplateFieldRequest = createAction(
  SAVE_TEMPLATE_FIELD_REQUEST,
  ({ values }) => ({
    values,
  }),
)();

export const saveTemplateFieldSuccess = createAction(
  SAVE_TEMPLATE_FIELD_SUCCESS,
  ({ result }) => ({
    success: result,
  }),
)();

export const saveTemplateFieldFailure = createAction(
  SAVE_TEMPLATE_FIELD_FAILURE,
  ({ result }) => ({
    msg: result,
  }),
)();

{/* template 수정 */ }
export const editTemplateFieldRequest = createAction(
  EDIT_TEMPLATE_FIELD_REQUEST,
  ({ values }) => ({
    values,
  }),
)();

export const editTemplateFieldSuccess = createAction(
  EDIT_TEMPLATE_FIELD_SUCCESS,
  ({ result }) => ({
    template: result,
  }),
)();

export const editTemplateFieldFailure = createAction(
  EDIT_TEMPLATE_FIELD_FAILURE,
  ({ result }) => ({
    msg: result,
  }),
)();

{/* 파일 업로드 */ }
export const uploadFileRequest = createAction(
  UPLOAD_FILE_REQUEST,
  ({ formData }) => ({
    formData,
  }),
)();
export const uploadFileSuccess = createAction(
  UPLOAD_FILE_SUCCESS,
  ({ isUpload }) => ({
    isUpload,
  }),
)();

export const uploadFileFailure = createAction(
  UPLOAD_FILE_FAILURE,
  ({ isUpload }) => ({
    isUpload,
  }),
)();

// export const deleteResumeFieldRequest = createAction(
//   DELETE_RESUME_FIELD_REQUEST,
//   ({ resumeId }) => ({
//     resumeId,
//   }),
// )();

// export const deleteResumeFieldSuccess = createAction(
//   DELETE_RESUME_FIELD_SUCCESS,
//   ({ isDeleted, message }) => ({
//     isDeleted,
//     message,
//   }),
// )();

// export const deleteResumeFieldFailure = createAction(
//   DELETE_RESUME_FIELD_FAILURE,
//   ({ isDeleted, message }) => ({
//     isDeleted,
//     message,
//   }),
// )();
