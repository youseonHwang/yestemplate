{/* 신청내용 액션 생성 */ }
import { createAction } from 'typesafe-actions';

export const APPLICANT_CHANGE_FIELD = 'APPLICANT_CHANGE_FIELD';
export const APPLICANT_INIT_FIELD = 'APPLICANT_INIT_FIELD';
export const APPLICANT_SELECT_FIELD = 'APPLICANT_SELECT_FIELD';

export const ApplicantChangeField = createAction(
  APPLICANT_CHANGE_FIELD,
  ({ key, value }) => ({
    key,
    value,
  }),
)();

export const ApplicantInitField = createAction(
  APPLICANT_INIT_FIELD,
  ({ values }) => ({
    values,
  }),
)();

export const ApplicantSelectField = createAction(
  APPLICANT_SELECT_FIELD,
  ({ applicant }) => ({
    applicant,
  }),
)();

