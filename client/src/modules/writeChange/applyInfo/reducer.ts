{/* 신청사항 상태 변경 */ }
import { createReducer } from 'typesafe-actions';
import { Actions, ApplyInfoState } from './types';
import { INFO_CHANGE_FIELD, INFO_INIT_FIELD, INFO_SELECT_FIELD } from './actions';

const initialState: ApplyInfoState = {
  applyInfo: {
    applyContent: '',
    respondent: {
      resName: '',
      resJumin: '',
      relation: '',
    },
    applyAmount: 0,
  },
}

const applyInfoField = createReducer<ApplyInfoState, Actions>(initialState, {
  [INFO_CHANGE_FIELD]: (state, action) => {
    const key = action.payload.key;

    if (
      key === 'resName' ||
      key === 'resJumin' ||
      key === 'relation'
    ) {
      return {
        ...state,
        applyInfo: {
          ...state.applyInfo,
          respondent: {
            ...state.applyInfo.respondent,
            [key]: action.payload.value,
          },
        },
      };
    } else if (
      key === 'applyContent' ||
      key === 'applyAmount'
    ) {
      return {
        ...state,
        applyInfo: {
          ...state.applyInfo,
          [key]: action.payload.value,
        },
      };
    } else {
      return {
        ...state,
        applyInfo: {
          ...state.applyInfo,
        },
      };
    }
  },
  [INFO_INIT_FIELD]: (state) => ({
    ...state,
    applyInfo: {
      applyContent: '',
      respondent: {
        resName: '',
        resJumin: '',
        relation: '',
      },
      applyAmount: 0,
    },
  }),
  [INFO_SELECT_FIELD]: (state, action) => ({
    ...state,
    applyInfo: {
      ...action.payload.applyInfo,
    },
  }),
});

export default applyInfoField;