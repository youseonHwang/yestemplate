{/* 신청내용 타입 지정 */ }
import { ActionType } from 'typesafe-actions';
import { ApplicantChangeField, ApplicantInitField, ApplicantSelectField } from './actions';

export interface ApplicantState {
  applicant: {
    belong: string;
    position: string;
    name: string;
  }
}

const actions = {
  ApplicantInitField,
  ApplicantChangeField,
  ApplicantSelectField
};

export type Actions = ActionType<typeof actions>;