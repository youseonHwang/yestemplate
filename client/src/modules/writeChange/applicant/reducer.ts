{/* 신청사항 상태 변경 */}
import { createReducer } from 'typesafe-actions';
import { Actions, ApplicantState } from './types';
import { APPLICANT_CHANGE_FIELD } from './actions';

const initialState: ApplicantState = {
    applicant: {
        belong: '',
        position: '',
        name: '',
        etc: '',
    },
}

const applicantField = createReducer<ApplicantState, Actions>(initialState, {
    [APPLICANT_CHANGE_FIELD]: (state, action) => {
        const key = action.payload.key;

        if (
            key === 'belong' ||
            key === 'position' ||
            key === 'name' ||
            key === 'etc'
        ) {
            return {
                ...state,
                applicant: {
                    ...state.applicant,
                    [key]: action.payload.value,
                },
            };
        } else{
            return {
                ...state,
                applicant: {
                    ...state.applicant,
                    [key]: action.payload.value,
                },
            };
        }
    },
});

export default applicantField;