import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import { withRouter, RouteComponentProps } from 'react-router-dom';
{/* component */ }
import Applicant from '../../../../components/pages/writePage/write/applicant/Applicant';
{/* hook */ }
import useChangeApplicantField from '../../../../hooks/pages/writePage/useChangeApplicantField';

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


const ApplicantContainer: React.FC<RouteComponentProps> = () => {

  const { name, belong, etc, position, onChangeApplicantFields } = useChangeApplicantField();

  const [init, setInit] = useState({
    name, belong, etc, position
  });

  const { state } = useLocation<stateType>();
  useEffect(() => {
    if (state) {
      if (state.template.applicant) {
        setInit(state.template.applicant)
      }
    }
  }, [])

  return (
    <Applicant
      belong={belong || init.belong}
      position={position || init.position}
      name={name || init.name}
      etc={etc || init.etc}
      onChangeApplicantFields={onChangeApplicantFields}
    />
  )
}

export default withRouter(ApplicantContainer);