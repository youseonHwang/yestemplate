import { createReducer } from 'typesafe-actions';
import { SaveEditTemplateState, Actions } from './types';
import {
  SAVE_TEMPLATE_FIELD_REQUEST,
  SAVE_TEMPLATE_FIELD_SUCCESS,
  SAVE_TEMPLATE_FIELD_FAILURE
} from './actions';

const initialState: SaveEditTemplateState = {
  saveTemplate: {
    success: null,
    msg: null,
  },
  editTemplate: {
    template: null,
    msg: null,
  },
  updateTemplate: {
    isEdited: null,
    newTemplate: null,
  },
  uploadImage: { location: '', isUpload: null },
  deleteTemplate: { isDeleted: false, msg: null },
};

const postWrite = createReducer<SaveEditTemplateState, Actions>(
  initialState,
  {
    [SAVE_TEMPLATE_FIELD_REQUEST]: (state) => ({
      ...state,
    }),
    [SAVE_TEMPLATE_FIELD_SUCCESS]: (state, action) => ({
      ...state,
      saveTemplate: {
        ['success']: action.payload.success,
        ['msg']: null,
      },
    }),
    [SAVE_TEMPLATE_FIELD_FAILURE]: (state, action) => ({
      ...state,
      saveTemplate: {
        ['success']: false,
        ['msg']: action.payload.msg,
      },
    }),
    // [EDIT_RESUME_FIELD_REQUEST]: (state) => ({
    //   ...state,
    // }),
    // [EDIT_RESUME_FIELD_SUCCESS]: (state, action) => ({
    //   ...state,
    //   editResume: {
    //     ['resume']: action.payload.resume,
    //     ['message']: null,
    //   },
    // }),
    // [EDIT_RESUME_FIELD_FAILURE]: (state, action) => ({
    //   ...state,
    //   editResume: {
    //     ['resume']: null,
    //     ['message']: action.payload.message,
    //   },
    // }),
    // [UPDATE_RESUME_FIELD_REQUEST]: (state) => ({
    //   ...state,
    // }),
    // [UPDATE_RESUME_FIELD_SUCCESS]: (state, action) => ({
    //   ...state,
    //   updateResume: {
    //     ['newResume']: action.payload.newResume,
    //     ['isEdited']: null,
    //   },
    // }),
    // [UPDATE_RESUME_FIELD_FAILURE]: (state, action) => ({
    //   ...state,
    //   updateResume: {
    //     ['newResume']: null,
    //     ['isEdited']: action.payload.isEdited,
    //   },
    // }),
    // [ON_UPLOAD_IMAGE_REQUEST]: (state) => ({
    //   ...state,
    // }),
    // [ON_UPLOAD_IMAGE_SUCCESS]: (state, action) => ({
    //   ...state,
    //   uploadImage: {
    //     ['location']: action.payload.location,
    //     ['isUpload']: null,
    //   },
    // }),
    // [ON_UPLOAD_IMAGE_FAILURE]: (state, action) => ({
    //   ...state,
    //   uploadImage: {
    //     ['location']: null,
    //     ['isUpload']: action.payload.isUpload,
    //   },
    // }),
    // [DELETE_RESUME_FIELD_REQUEST]: (state) => ({
    //   ...state,
    // }),
    // [DELETE_RESUME_FIELD_SUCCESS]: (state, action) => ({
    //   ...state,
    //   deleteResume: {
    //     isDeleted: action.payload.isDeleted,
    //     message: null,
    //   },
    // }),
    // [DELETE_RESUME_FIELD_FAILURE]: (state, action) => ({
    //   ...state,
    //   deleteResume: {
    //     isDeleted: false,
    //     message: action.payload.message,
    //   },
    // }),
  },
);
export default postWrite;
