import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
{/* component */ }
import ApplyDocument from '../../../../components/pages/writePage/write/applyDocument/ApplyDocument';
{/* hook */ }
import useChangeApplyDocumentField from '../../../../hooks/pages/writePage/useChangeApplyDocumentField';

const DocumentContainer: React.FC<RouteComponentProps> = () => {
  const {
    fileName,
    onChangeDocumentFields,
  } = useChangeApplyDocumentField();

  return (
    <ApplyDocument
      fileName = {fileName}
      onChangeDocumentFields={onChangeDocumentFields}
    />
  )
}

export default withRouter(DocumentContainer);