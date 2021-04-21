{/* 신청내용 액션 생성 */}
import { createAction } from 'typesafe-actions';

export const APPLICANT_CHANGE_FIELD = 'APPLICANT_CHANGE_FIELD';

export const ApplicantChangeField = createAction(
    APPLICANT_CHANGE_FIELD,
    ({ key, value }) => ({
        key,
        value,
    }),
)();
