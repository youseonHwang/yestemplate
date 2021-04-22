import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../modules/writeChange/applyDocument/actions';
import { DocumentState } from '../../../modules/writeChange/applyDocument/types';

function useChangeApplyDocumentField() : {
    fileName: Array<string | null>,
    onChangeDocumentFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
} {
    const dispatch = useDispatch();
    const {
        fileName,
    } = useSelector(({ documentField }: {documentField: DocumentState}) => ({
        fileName: documentField.applyDocument.fileName,
    }));

    const onChangeDocumentField = <T>(location: T, value: T): void => {
        dispatch(actions.DocumentChangeField({ key: location, value: value }));
    };

    const onChangeDocumentFields = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;

        onChangeDocumentField<string>(name, value);
    };
    return {
        fileName,
        onChangeDocumentFields,
    };
}

export default useChangeApplyDocumentField;