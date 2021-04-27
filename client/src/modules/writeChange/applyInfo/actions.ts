{/* 신청사항 액션 생성 */ }
import { createAction } from 'typesafe-actions';

export const INFO_CHANGE_FIELD = 'INFO_CHANGE_FIELD';
export const INFO_INIT_FIELD = 'INFO_INIT_FIELD';
export const INFO_SELECT_FIELD = 'INFO_SELECT_FIELD';

export const InfoChangeField = createAction(
  INFO_CHANGE_FIELD,
  ({ key, value }) => ({
    key,
    value,
  }),
)();

export const InfoInitField = createAction(
  INFO_INIT_FIELD,
  ({ values }) => ({
    values
  }),
)();
export const InfoSelectField = createAction(
  INFO_SELECT_FIELD,
  ({ applyInfo }) => ({
    applyInfo
  }),
)();


