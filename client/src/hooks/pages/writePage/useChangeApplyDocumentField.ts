import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../modules/writeChange/applyDocument/actions';
import { DocumentState } from '../../../modules/writeChange/applyDocument/types';

function useChangeApplyDocumentField() : {
    fileName: Array<string | null>,
    onChangeFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
} {
    const dispatch = useDispatch();
    const {
        fileName,
    } = useSelector(({ documentField }: {documentField: DocumentState}) => ({
        fileName: documentField.applyDocument.fileName,
    }));

    const onChangeField = <T>(location: T, value: T): void => {
        dispatch(actions.DocumentChangeField({ key: location, value: value }));
    };

    const onChangeFields = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;

        onChangeField<string>(name, value);
    };
    return {
        fileName,
        onChangeFields,
    };
}

export default useChangeApplyDocumentField;