import { createAction } from 'typesafe-actions';

export const SAVE_TEMPLATE_FIELD_REQUEST = 'SAVE_TEMPLATE_FIELD_REQUEST';
export const SAVE_TEMPLATE_FIELD_SUCCESS = 'SAVE_TEMPLATE_FIELD_SUCCESS';
export const SAVE_TEMPLATE_FIELD_FAILURE = 'SAVE_TEMPLATE_FIELD_FAILURE';

// export const EDIT_RESUME_FIELD_REQUEST = 'EDIT_RESUME_FIELD_REQUEST';
// export const EDIT_RESUME_FIELD_SUCCESS = 'EDIT_RESUME_FIELD_SUCCESS';
// export const EDIT_RESUME_FIELD_FAILURE = 'EDIT_RESUME_FIELD_FAILURE';

// export const UPDATE_RESUME_FIELD_REQUEST = 'UPDATE_RESUME_FIELD_REQUEST';
// export const UPDATE_RESUME_FIELD_SUCCESS = 'UPDATE_RESUME_FIELD_SUCCESS';
// export const UPDATE_RESUME_FIELD_FAILURE = 'UPDATE_RESUME_FIELD_FAILURE';

// export const ON_UPLOAD_IMAGE_REQUEST = 'ON_UPLOAD_IMAGE_REQUEST';
// export const ON_UPLOAD_IMAGE_SUCCESS = 'ON_UPLOAD_IMAGE_SUCCESS';
// export const ON_UPLOAD_IMAGE_FAILURE = 'ON_UPLOAD_IMAGE_FAILURE';

// export const DELETE_RESUME_FIELD_REQUEST = 'DELETE_RESUME_FIELD_REQUEST';
// export const DELETE_RESUME_FIELD_SUCCESS = 'DELETE_RESUME_FIELD_SUCCESS';
// export const DELETE_RESUME_FIELD_FAILURE = 'DELETE_RESUME_FIELD_FAILURE';

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

// //* EDIT_RESUME_FIELD_SAGA_ACTIONS
// export const editResumeFieldRequest = createAction(
//   EDIT_RESUME_FIELD_REQUEST,
//   ({ resumeId }) => ({
//     resumeId,
//   }),
// )();

// export const editResumeFieldSuccess = createAction(
//   EDIT_RESUME_FIELD_SUCCESS,
//   ({ result }) => ({
//     resume: result,
//   }),
// )();

// export const editResumeFieldFailure = createAction(
//   EDIT_RESUME_FIELD_FAILURE,
//   ({ result }) => ({
//     message: result,
//   }),
// )();

// //* UPDATE_RESUME_FIELD_SAGA_ACTIONS
// export const updateResumeFieldRequest = createAction(
//   UPDATE_RESUME_FIELD_REQUEST,
//   ({ values }) => ({
//     values,
//   }),
// )();

// export const updateResumeFieldSuccess = createAction(
//   UPDATE_RESUME_FIELD_SUCCESS,
//   ({ result }) => ({
//     newResume: result,
//   }),
// )();

// export const updateResumeFieldFailure = createAction(
//   UPDATE_RESUME_FIELD_FAILURE,
//   ({ result }) => ({
//     isEdited: result,
//   }),
// )();

// export const onUploadImageRequest = createAction(
//   ON_UPLOAD_IMAGE_REQUEST,
//   ({ formData }) => ({
//     formData,
//   }),
// )();
// export const onUploadImageSuccess = createAction(
//   ON_UPLOAD_IMAGE_SUCCESS,
//   ({ location, isUpload }) => ({
//     location,
//     isUpload,
//   }),
// )();

// export const onUploadImageFailure = createAction(
//   ON_UPLOAD_IMAGE_FAILURE,
//   ({ location, isUpload }) => ({
//     location,
//     isUpload,
//   }),
// )();

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
