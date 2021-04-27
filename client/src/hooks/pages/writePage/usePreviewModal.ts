{/* PDF preview modal hook */}
import { useState } from 'react';

function usePreviewModal(): {
  onPreviewModal: () => void;
  preview: boolean;
} {
  {/* 모달이 띄워지기 전에는 preview = false */}
  const [preview, setPreview] = useState(false);

  const onPreviewModal = () => {
    setPreview(!preview);
  };
  return {
    onPreviewModal,
    preview,
  };
}

export default usePreviewModal;