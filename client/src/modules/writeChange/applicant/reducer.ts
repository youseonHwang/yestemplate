{/* 신청사항 상태 변경 */ }
import { createReducer } from 'typesafe-actions';
import { Actions, ApplicantState } from './types';
import { APPLICANT_CHANGE_FIELD, APPLICANT_INIT_FIELD, APPLICANT_SELECT_FIELD } from './actions';

const initialState: ApplicantState = {
  applicant: {
    belong: "",
    position: "",
    name: "",
  },
}

const applicantField = createReducer<ApplicantState, Actions>(initialState, {
  [APPLICANT_CHANGE_FIELD]: (state, action) => {
    const key = action.payload.key;
    if (
      key === 'belong' ||
      key === 'position' ||
      key === 'name'
    ) {
      return {
        ...state,
        applicant: {
          ...state.applicant,
          [key]: action.payload.value,
        },
      };
    } else {
      return {
        ...state,
        applicant: {
          ...state.applicant,
        },
      };
    }
  },
  [APPLICANT_INIT_FIELD]: (state) => ({
    ...state,
    applicant: {
      belong: "",
      position: "",
      name: "",
    },
  }),
  [APPLICANT_SELECT_FIELD]: (state, action) => ({
    ...state,
    applicant: {
      ...action.payload.applicant,
    },
  }),
});

export default applicantField;