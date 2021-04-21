{/* 신청사항 액션 생성 */}
import { createAction } from 'typesafe-actions';

export const INFO_CHANGE_FIELD = 'INFO_CHANGE_FIELD';

export const changeField = createAction(
    INFO_CHANGE_FIELD,
    ({ key, value }) => ({
        key,
        value,
    }),
)();
