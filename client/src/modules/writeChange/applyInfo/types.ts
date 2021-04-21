{/* 신청사항 타입 지정 */}
import { ActionType } from 'typesafe-actions';
import { InfoChangeField } from './actions';

export interface ApplyInfoState {
    applyInfo: {
        applyContent: string,
        respondent: {
            resName: string,
            resJumin: string,
            relation: string,
        },
        applyAmount: number,
    };
}

const actions = { InfoChangeField }
export type Actions = ActionType<typeof actions>;