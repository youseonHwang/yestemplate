import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'
import * as actions from '../../../modules/writeChange/applyDocument/actions';
import { DocumentState } from '../../../modules/writeChange/applyDocument/types';

function useChangeApplyDocumentField(): {
  fileName: Array<string | null>;
  etc: string;
  onChangeDocumentFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
} {
  const dispatch = useDispatch();
  const {
    fileName,
    etc,
  } = useSelector(({ documentField }: { documentField: DocumentState }) => ({
    fileName: documentField.applyDocument.fileName,
    etc: documentField.applyDocument.etc,
  }));

  const onChangeDocumentField = <T>(location: T, value: T): void => {
    dispatch(actions.DocumentChangeField({ key: location, value: value }));
  };
  const onChangeDocumentFields = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    event.target.files
    onChangeDocumentField<string>(name, value);
  };
  return {
    fileName,
    etc,
    onChangeDocumentFields,
  };
}

export default useChangeApplyDocumentField;