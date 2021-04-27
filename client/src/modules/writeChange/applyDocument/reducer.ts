{/* 신청사항 상태 변경 */ }
import { createReducer } from 'typesafe-actions';
import { Actions, DocumentState } from './types';
import { DOCUMENT_CHANGE_FIELD, DOCUMENT_INIT_FIELD, DOCUMENT_SELECT_FIELD } from './actions';

const initialState: DocumentState = {
  applyDocument: {
    fileName: [],
    etc: "",
  },
}

const documentField = createReducer<DocumentState, Actions>(initialState, {
  [DOCUMENT_CHANGE_FIELD]: (state, action) => {
    const key = action.payload.key;

    if (
      key === 'fileName' ||
      key === 'etc'
    ) {
      return {
        ...state,
        applyDocument: {
          ...state.applyDocument,
          [key]: action.payload.value,
        },
      };
    } else {
      return {
        ...state,
        applyDocument: {
          ...state.applyDocument,
          [key]: action.payload.value,
        },
      };
    }
  },
  [DOCUMENT_INIT_FIELD]: (state) => ({
    ...state,
    applyDocument: {
      fileName: [],
      etc: "",
    },
  }),
  [DOCUMENT_SELECT_FIELD]: (state, action) => ({
    ...state,
    applyDocument: {
      ...action.payload.applyDocument,
    },
  }),
});

export default documentField;