import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
{/* component */ }
import ApplyInfo from '../../../../components/pages/writePage/write/applyInfo/ApplyInfo';
{/* hook */ }
import useChangeApplyInfoField from '../../../../hooks/pages/writePage/useChangeApplyInfoField';

const ApplyInfoContainer: React.FC<RouteComponentProps> = () => {
  const {
    applyContent,
    resName,
    resJumin,
    relation,
    applyAmount,
    onChangeApplyInfoFields,
  } = useChangeApplyInfoField();

  return (
    <ApplyInfo
        applyContent={applyContent}
        resName={resName}
        resJumin={resJumin}
        relation={relation}
        applyAmount={applyAmount}
        onChangeApplyInfoFields={onChangeApplyInfoFields}
    />
  )
}

export default withRouter(ApplyInfoContainer);