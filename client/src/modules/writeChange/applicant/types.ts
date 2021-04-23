{/* 신청내용 타입 지정 */}
import { ActionType } from 'typesafe-actions';
import { ApplicantChangeField } from './actions';

export interface ApplicantState {
    applicant: {
        belong: string;
        position: string;
        name: string;
    }
}

export type Actions = ActionType<typeof ApplicantChangeField>;