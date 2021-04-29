import React, { useEffect } from 'react';
import { useLocation } from "react-router";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux'
{/* component */ }
import Applicant from '../../../../components/pages/writePage/write/applicant/Applicant';
{/* hook */ }
import useChangeApplicantField from '../../../../hooks/pages/writePage/useChangeApplicantField';
{/* actions */ }
import { ApplicantSelectField } from '../../../../modules/writeChange/applicant/actions'

export interface stateType {
  from: { pathname: string },
  isEdit: boolean,
  template: {
    _id: string,
    title: string,
    userFrom: string,
    applicant: {
      belong: string,
      position: string,
      name: string,
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
      fileName: Array<string>,
      etc: string
    },
    createdAt: string,
    updatedAt: string,
    __v: number
  }
}

const ApplicantContainer: React.FC<RouteComponentProps> = () => {
  const dispatch = useDispatch();

  {/* input 변경된 값 hook으로 가져오기 */ }
  const { name, belong, position, onChangeApplicantFields } = useChangeApplicantField();
  const { state } = useLocation<stateType>();

  {/* 렌더링 된 후 한번만 동작 mypage -> write로 넘어 올 때 template 정보 init에 가져옴 */ }
  useEffect(() => {
    if (state) {
      if (state.template.applicant) {
        const applicant = state.template.applicant
        dispatch(ApplicantSelectField({ applicant }))
      }
    }
  }, [])

  return (
    <Applicant
      belong={belong}
      position={position}
      name={name}
      onChangeApplicantFields={onChangeApplicantFields}
    />
  )
}

export default withRouter(ApplicantContainer);