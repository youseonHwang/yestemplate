{/* 신청내용 타입 지정 */}
import { ActionType } from 'typesafe-actions';
import { DocumentChangeField } from './actions';

export interface DocumentState {
    applyDocument: {
        fileName: Array<string | null>;
        etc: string;
    },
}

const actions = { DocumentChangeField }
export type Actions = ActionType<typeof actions>;