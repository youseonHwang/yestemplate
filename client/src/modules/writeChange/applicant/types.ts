{/* 신청내용 타입 지정 */}
import { ActionType } from 'typesafe-actions';
import { ApplicantChangeField } from './actions';

export interface ApplicantState {
    applicant: {
        belong: '',
        position: '',
        name: '',
        etc: '',
    },
}

const actions = { ApplicantChangeField }
export type Actions = ActionType<typeof actions>;