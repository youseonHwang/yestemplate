{/* 신청사항 타입 지정 */}
import { ActionType } from 'typesafe-actions';
import { changeField } from './actions';

export interface ApplyInfoState {
    applyInfo: {
        applyContent: string,
        respondent: {
            resName: string,
            resJumin: string,
            relation: string,
        },
        applyAmount: string,
    };
}

const actions = { changeField }
export type Actions = ActionType<typeof actions>;