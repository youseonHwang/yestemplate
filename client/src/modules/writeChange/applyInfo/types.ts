{/* 신청사항 타입 지정 */ }
import { ActionType } from 'typesafe-actions';
import { InfoSelectField, InfoChangeField, InfoInitField } from './actions';

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

const actions = { InfoChangeField, InfoInitField, InfoSelectField }
export type Actions = ActionType<typeof actions>;