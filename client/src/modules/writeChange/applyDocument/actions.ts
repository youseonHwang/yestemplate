{/* 신청내용 액션 생성 */}
import { createAction } from 'typesafe-actions';

export const DOCUMENT_CHANGE_FIELD = 'DOCUMENT_CHANGE_FIELD';

export const DocumentChangeField = createAction(
    DOCUMENT_CHANGE_FIELD,
    ({ key, value }) => ({
        key,
        value,
    }),
)();
