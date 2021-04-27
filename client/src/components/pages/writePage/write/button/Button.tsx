import React from 'react';

import Button from '@material-ui/core/Button';
import PictureAsPdf from '@material-ui/icons/PictureAsPdf';

interface PreviewButtonsProps {
    onPreviewModal: () => void;
}

const PreviewButton: React.FC<PreviewButtonsProps> = ({
    onPreviewModal,
}) => {
    return (
        <>
            <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<PictureAsPdf />}
                onClick={onPreviewModal}
                >
                PDF 변환하기
            </Button>
        </>
    );
};

export default PreviewButton;