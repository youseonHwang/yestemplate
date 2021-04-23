import React, { useEffect, useState, useRef } from 'react';
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

const ApplyInfoContainer: React.FC<RouteComponentProps> = () => {

  {/* 첫 마운트 여부를 확인함 */ }
  const mounted = useRef(false)

  {/* 수정사항 변경여부 */ }
  const [isApplyContentChanged, setIsApplyContentChanged] = useState(false);
  const [isResNameChanged, setIsResNameChanged] = useState(false);
  const [isRelationChanged, setIsRelationChanged] = useState(false);
  const [isResJuminChanged, setIsResJuminChanged] = useState(false);
  const [isApplyAmountChanged, setIsApplyAmountChanged] = useState(false);

  const {
    applyContent,
    resName,
    resJumin,
    relation,
    applyAmount,
    onChangeApplyInfoFields,
  } = useChangeApplyInfoField();

  const [init, setInit] = useState({
    applyContent: '',
    respondent: {
      resName: '',
      resJumin: '',
      relation: '',
    },
    applyAmount: 0,

  });
  const { state } = useLocation<stateType>();
  useEffect(() => {
    if (state) {
      if (state.template.applyInfo) {
        setInit(state.template.applyInfo)
      }
    }
    return () => { !mounted.current }
  }, [])

  {/* applyContent 값이 변경이 되면 */ }
  useEffect(() => {
    if (!mounted.current) { }
    else { setIsApplyContentChanged(true) }
  }, [applyContent])

  {/* resName 값이 변경이 되면 */ }
  useEffect(() => {
    if (!mounted.current) {
    } else { setIsResNameChanged(true) }
  }, [resName])

  {/* resJumin 값이 변경이 되면 */ }
  useEffect(() => {
    if (!mounted.current) { }
    else { setIsResJuminChanged(true) }
  }, [resJumin])

  {/* relation 값이 변경이 되면 */ }
  useEffect(() => {
    if (!mounted.current) {
    } else { setIsRelationChanged(true) }
  }, [relation])


  {/* applyAmount 값이 변경이 되면 */ }
  useEffect(() => {
    if (!mounted.current) { mounted.current = true }
    else { setIsApplyAmountChanged(true) }
  }, [applyAmount])

  console.log(init)

  return (
    <ApplyInfo
      applyContent={applyContent || isApplyContentChanged ? applyContent : init.applyContent}
      resName={resName || isResNameChanged ? resName : init.respondent.resName}
      resJumin={resJumin || isResJuminChanged ? resJumin : init.respondent.resJumin}
      relation={relation || isRelationChanged ? relation : init.respondent.relation}
      applyAmount={applyAmount || isApplyAmountChanged ? applyAmount : init.applyAmount}
      onChangeApplyInfoFields={onChangeApplyInfoFields}
    />
  )
}

export default withRouter(ApplyInfoContainer);