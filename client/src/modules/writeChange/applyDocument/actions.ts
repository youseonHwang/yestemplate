{/* 신청내용 액션 생성 */ }
import { createAction } from 'typesafe-actions';

export const DOCUMENT_CHANGE_FIELD = 'DOCUMENT_CHANGE_FIELD';
export const DOCUMENT_INIT_FIELD = 'DOCUMENT_INIT_FIELD';
export const DOCUMENT_SELECT_FIELD = 'DOCUMENT_SELECT_FIELD';

export const DocumentChangeField = createAction(
  DOCUMENT_CHANGE_FIELD,
  ({ key, value }) => ({
    key,
    value,
  }),

)();

export const DocumentInitField = createAction(
  DOCUMENT_INIT_FIELD,
  ({ values }) => ({
    values
  }),
)();

export const DocumentSelectField = createAction(
  DOCUMENT_SELECT_FIELD,
  ({ applyDocument }) => ({
    applyDocument
  }),
)();