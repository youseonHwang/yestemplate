import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
{/* component */ }
import ApplyDocument from '../../../../components/pages/writePage/write/applyDocument/ApplyDocument';
{/* hook */ }
import useChangeApplyDocumentField from '../../../../hooks/pages/writePage/useChangeApplyDocumentField';

const DocumentContainer: React.FC<RouteComponentProps> = () => {
  const {
    fileName,
    onChangeFields,
  } = useChangeApplyDocumentField();

  return (
    <ApplyDocument
      fileName = {fileName}
      onChangeFields={onChangeFields}
    />
  )
}

export default withRouter(DocumentContainer);