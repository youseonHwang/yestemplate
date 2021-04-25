import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from "react-router";
import { withRouter, RouteComponentProps } from 'react-router-dom';
{/* component */ }
import Applicant from '../../../../components/pages/writePage/write/applicant/Applicant';
{/* hook */ }
import useChangeApplicantField from '../../../../hooks/pages/writePage/useChangeApplicantField';

export interface stateType {
  from: { pathname: string },
  template: {
    id: string,
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

  {/* 첫 마운트 여부를 확인함 */ }
  const mounted = useRef(false)

  {/* input 변경된 값 hook으로 가져오기 */ }
  const { name, belong, position, onChangeApplicantFields } = useChangeApplicantField();
  const { state } = useLocation<stateType>();

  {/* 수정사항 변경여부 */ }
  const [isBelongChanged, setIsBelongChanged] = useState(false);
  const [isNameChanged, setIsNameChanged] = useState(false);
  const [isPositionChanged, setIsPositionChanged] = useState(false);

  {/* 일단 ''로 init 하기 */ }
  const [init, setInit] = useState({ name, belong, position });

  {/* 렌더링 된 후 한번만 동작 mypage -> write로 넘어 올 때 template 정보 init에 가져옴 */ }
  useEffect(() => {
    if (state) {
      if (state.template.applicant) {
        setInit(state.template.applicant)
      }
    }
    return () => { !mounted.current }
  }, [])

  {/* belong 값이 변경이 되면 */ }
  useEffect(() => {
    if (!mounted.current) { }
    else { setIsBelongChanged(true) }
  }, [belong])

  {/* position 값이 변경이 되면 */ }
  useEffect(() => {
    if (!mounted.current) {
    } else { setIsPositionChanged(true) }
  }, [position])

  {/* name 값이 변경이 되면 */ }
  useEffect(() => {
    if (!mounted.current) { mounted.current = true }
    else { setIsNameChanged(true) }
  }, [name])

  return (
    <Applicant
      belong={belong || isBelongChanged ? belong : init.belong}
      position={position || isPositionChanged ? position : init.position}
      name={name || isNameChanged ? name : init.name}
      onChangeApplicantFields={onChangeApplicantFields}
    />
  )
}

export default withRouter(ApplicantContainer);