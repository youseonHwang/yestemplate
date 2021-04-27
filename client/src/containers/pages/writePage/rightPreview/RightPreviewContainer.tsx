import React, { useEffect, useState, useRef } from 'react';
{/* component import */ }
import RightPreview from '../../../../components/pages/writePage/rightPreview/RightPreview';
{/* hook import */ }
import useLoadPreviewValues from '../../../../hooks/pages/writePage/useLoadPreviewValues';

{/* model Interface */ }
import usePreviewModal from '../../../../hooks/pages/writePage/usePreviewModal';

function RightPreviewContainer() {
  const { preview, onPreviewModal } = usePreviewModal();
  {/* 현재 템플릿 정보 가져오기 */ }
  const values = useLoadPreviewValues();

  return (
    <>
      <RightPreview values={values} preview={preview} onPreviewModal={onPreviewModal} />
    </>
  )
}

export default RightPreviewContainer;