{/* 신청내용 타입 지정 */ }
import { ActionType } from 'typesafe-actions';
import { DocumentChangeField, DocumentInitField, DocumentSelectField } from './actions';

export interface DocumentState {
  applyDocument: {
    fileName: Array<string | null>;
    etc: string;
  },
}

const actions = { DocumentChangeField, DocumentInitField, DocumentSelectField }
export type Actions = ActionType<typeof actions>;