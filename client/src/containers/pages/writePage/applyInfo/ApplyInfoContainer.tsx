import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from "react-router";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
{/* component */ }
import ApplyInfo from '../../../../components/pages/writePage/write/applyInfo/ApplyInfo';
{/* hook */ }
import useChangeApplyInfoField from '../../../../hooks/pages/writePage/useChangeApplyInfoField';
import { stateType } from '../applicant/ApplicantContainer'
{/* actions */ }
import { InfoSelectField } from '../../../../modules/writeChange/applyInfo/actions'

const ApplyInfoContainer: React.FC<RouteComponentProps> = () => {

  const {
    applyContent,
    resName,
    resJumin,
    relation,
    applyAmount,
    onChangeApplyInfoFields,
  } = useChangeApplyInfoField();

  const dispatch = useDispatch();
  const { state } = useLocation<stateType>();
  useEffect(() => {
    if (state) {
      if (state.template.applyInfo) {
        const applyInfo = state.template.applyInfo
        dispatch(InfoSelectField({ applyInfo }))
      }
    }
  }, [])

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