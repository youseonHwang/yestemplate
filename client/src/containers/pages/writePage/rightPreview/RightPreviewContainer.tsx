import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from "react-router";

import { stateType } from '../applicant/ApplicantContainer'
{/* component import */ }
import RightPreview from '../../../../components/pages/writePage/rightPreview/RightPreview';
{/* hook import */ }
import useLoadPreviewValues from '../../../../hooks/pages/writePage/useLoadPreviewValues';
import useSaveTemplate from '../../../../hooks/pages/templatePage/useSaveTemplate'
import useInitTemplateField from '../../../../hooks/pages/templatePage/useInitTemplateField';
import useEditTemplateField from '../../../../hooks/pages/templatePage/useEditTemplate';
import useUploadFile from '../../../../hooks/pages/templatePage/useUploadFile';

function RightPreviewContainer() {
  const [isEdit, setIsEdit] = useState(false)
  const [templateId, setTemplateId] = useState('')
  const { state } = useLocation<stateType>();
  useEffect(() => {
    if (state) {
      if (state.isEdit) {
        setIsEdit(state.isEdit)
      }
      if (state.template._id) {
        setTemplateId(state.template._id)
      }
    }
  }, [])

  {/* 현재 템플릿 정보 가져오기 */ }
  const values = useLoadPreviewValues();
  {/* 저장하는 hook */ }
  const { saveRequest } = useSaveTemplate();
  {/* 리덕스 초기화 hook */ }
  const { initRequest } = useInitTemplateField();
  {/* 수정하는 hook */ }
  const { editRequest } = useEditTemplateField();
  {/* 파일 업로드 hook */ }
  const { uploadFile } = useUploadFile();
  return (
    <RightPreview
      values={values}
      saveRequest={saveRequest}
      initRequest={initRequest}
      editRequest={editRequest}
      isEdit={isEdit}
      templateId={templateId}
      uploadFile={uploadFile}
      />
  )
}

export default RightPreviewContainer;