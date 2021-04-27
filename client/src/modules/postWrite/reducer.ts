import { createReducer } from 'typesafe-actions';
import { SaveEditTemplateState, Actions } from './types';
import {
  SAVE_TEMPLATE_FIELD_REQUEST,
  SAVE_TEMPLATE_FIELD_SUCCESS,
  SAVE_TEMPLATE_FIELD_FAILURE,
  EDIT_TEMPLATE_FIELD_REQUEST,
  EDIT_TEMPLATE_FIELD_SUCCESS,
  EDIT_TEMPLATE_FIELD_FAILURE,
  UPLOAD_FILE_FAILURE,
  UPLOAD_FILE_REQUEST,
  UPLOAD_FILE_SUCCESS
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
  uploadFile: { isUpload: null },
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
    [EDIT_TEMPLATE_FIELD_REQUEST]: (state) => ({
      ...state,
    }),
    [EDIT_TEMPLATE_FIELD_SUCCESS]: (state, action) => ({
      ...state,
      editTemplate: {
        ['template']: action.payload.template,
        ['msg']: null,
      },
    }),
    [EDIT_TEMPLATE_FIELD_FAILURE]: (state, action) => ({
      ...state,
      editTemplate: {
        ['template']: null,
        ['msg']: action.payload.msg,
      },
    }),

    
    [UPLOAD_FILE_REQUEST]: (state) => ({
      ...state,
    }),
    [UPLOAD_FILE_SUCCESS]: (state) => ({
      ...state,
      uploadFile: {
        ['isUpload']: null,
      },
    }),
    [UPLOAD_FILE_FAILURE]: (state, action) => ({
      ...state,
      uploadFile: {
        ['isUpload']: action.payload.isUpload,
      },
    }),
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
