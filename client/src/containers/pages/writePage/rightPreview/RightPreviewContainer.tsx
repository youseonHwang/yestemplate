import React, { useEffect, useState } from 'react';

import { useLocation } from "react-router";

{/* component import */ }
import RightPreview from '../../../../components/pages/writePage/rightPreview/RightPreview';
{/* hook import */ }
import useLoadPreviewValues from '../../../../hooks/pages/writePage/useLoadPreviewValues';

{/* model Interface */ }
import { stateType } from '../applicant/ApplicantContainer'
import usePreviewModal from '../../../../hooks/pages/writePage/usePreviewModal';

function RightPreviewContainer() {
  const { state } = useLocation<stateType>();
  const { preview, onPreviewModal } = usePreviewModal();
  const [template, setTemplate] = useState({
    id: '',
    title: '',
    userFrom: '',
    applicant: {
      belong: '',
      position: '',
      name: '',
    },
    applyInfo: {
      applyContent: '',
      respondent: {
        resName: '',
        resJumin: '',
        relation: '',
      },
      applyAmount: 0,
    },
    applyDocument: {
      fileName: [''],
      etc: ''
    },
    createdAt: '',
    updatedAt: '',
    __v: 0
  })

  useEffect(() => {
    if (state) {
      setTemplate(state.template)
    }
  }, [])
  const values = useLoadPreviewValues();
  return (
    <>
      <RightPreview values={values} template={template} preview={preview} onPreviewModal={onPreviewModal} />
    </>
  )
}

export default RightPreviewContainer;