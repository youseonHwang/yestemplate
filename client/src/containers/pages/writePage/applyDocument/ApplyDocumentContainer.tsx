import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from "react-router";
import { withRouter, RouteComponentProps } from 'react-router-dom';
{/* component */ }
import ApplyDocument from '../../../../components/pages/writePage/write/applyDocument/ApplyDocument';
{/* hook */ }
import useChangeApplyDocumentField from '../../../../hooks/pages/writePage/useChangeApplyDocumentField';
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

const DocumentContainer: React.FC<RouteComponentProps> = () => {
  const {
    fileName,
    etc,
    onChangeDocumentFields,
  } = useChangeApplyDocumentField();

  {/* 첫 마운트 여부를 확인함 */ }
  const mounted = useRef(false)

  {/* 수정사항 변경여부 */ }
  const [isFileNameChanged, setIsFileNameChanged] = useState(false);
  const [isEtcChanged, setIsEtcChanged] = useState(false);

  {/* 일단 ''로 init 하기 */ }
  const [init, setInit] = useState({ fileName, etc });

  const { state } = useLocation<stateType>();
  useEffect(() => {
    if (state) {
      if (state.template.applicant) {
        setInit(state.template.applyDocument)
      }
    }
    return () => { !mounted.current }
  }, [])


  {/* belong 값이 변경이 되면 */ }
  useEffect(() => {
    if (!mounted.current) { }
    else { setIsFileNameChanged(true) }
  }, [fileName])

  {/* position 값이 변경이 되면 */ }
  useEffect(() => {
    if (!mounted.current) { mounted.current = true }
    else { setIsEtcChanged(true) }
  }, [etc])

  return (
    <ApplyDocument
      fileName={fileName || isFileNameChanged ? fileName : init.fileName}
      etc={etc || isEtcChanged ? etc : init.etc}
      onChangeDocumentFields={onChangeDocumentFields}
    />
  )
}

export default withRouter(DocumentContainer);