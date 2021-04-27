import React from 'react';

interface PreviewButtonsProps {
    onPreviewModal: () => void;
}

const PreviewButton: React.FC<PreviewButtonsProps> = ({
    onPreviewModal,
}) => {
    return (
        <>
            <button onClick={onPreviewModal}>
                PDF 변환하기
            </button>
        </>
    );
};

export default PreviewButton;