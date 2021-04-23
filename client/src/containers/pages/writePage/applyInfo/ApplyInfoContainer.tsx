import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import { withRouter, RouteComponentProps } from 'react-router-dom';
{/* component */ }
import ApplyInfo from '../../../../components/pages/writePage/write/applyInfo/ApplyInfo';
{/* hook */ }
import useChangeApplyInfoField from '../../../../hooks/pages/writePage/useChangeApplyInfoField';

interface stateType {
  from: { pathname: string },
  template: {
    id: string,
    title: string,
    userFrom: string,
    applicant: {
      belong: string,
      position: string,
      name: string,
      etc: string
    },
    applyInfo: {
      applyContent: string,
      respondent: {
        resName: string,
        resJumin: string,
        relation: string,
      },
      applyAmount: number,
    },
    applyDocument: {
      fileName: Array<string>
    },
    createdAt: string,
    updatedAt: string,
    __v: number
  }
}

const ApplyInfoContainer: React.FC<RouteComponentProps> = () => {
  const {
    applyContent,
    resName,
    resJumin,
    relation,
    applyAmount,
    onChangeApplyInfoFields,
  } = useChangeApplyInfoField();

  const [init, setInit] = useState({
    applyInfo: {
      applyContent: '',
      respondent: {
        resName: '',
        resJumin: '',
        relation: '',
      },
      applyAmount: 0,
    },
  });
  const { state } = useLocation<stateType>();
  console.log(state)
  useEffect(() => {
    if (state) {
      if (state.template.applyInfo) {
        setInit(state.template)
      }
    }
  }, [])

  return (
    <ApplyInfo
      applyContent={applyContent || init.applyInfo.applyContent}
      resName={resName || init.applyInfo.applyContent}
      resJumin={resJumin || init.applyInfo.applyContent}
      relation={relation || init.applyInfo.applyContent}
      applyAmount={applyAmount || init.applyInfo.applyAmount}
      onChangeApplyInfoFields={onChangeApplyInfoFields}
    />
  )
}

export default withRouter(ApplyInfoContainer);