import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from "react-router";

import { stateType } from '../applicant/ApplicantContainer'
{/* component import */ }
import RightPreview from '../../../../components/pages/writePage/rightPreview/RightPreview';
{/* hook import */ }
import useLoadPreviewValues from '../../../../hooks/pages/writePage/useLoadPreviewValues';

function RightPreviewContainer() {
  {/* 현재 템플릿 정보 가져오기 */ }
  const values = useLoadPreviewValues();

  return (
    <RightPreview
      values={values}
    />
  )
}

export default RightPreviewContainer;