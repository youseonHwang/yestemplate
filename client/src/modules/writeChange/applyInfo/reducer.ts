{/* 신청사항 상태 변경 */}
import { createReducer } from 'typesafe-actions';
import { Actions, ApplyInfoState } from './types';
import { INFO_CHANGE_FIELD } from './actions';

const initialState: ApplyInfoState = {
    applyInfo: {
        applyContent: '',
        respondent: {
            resName: '',
            resJumin: '',
            relation: '',
        },
        applyAmount: '',
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
});

export default applyInfoField;