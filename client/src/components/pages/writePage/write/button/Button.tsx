import React from 'react';

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

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
                startIcon={<SaveIcon />}
                onClick={onPreviewModal}
                >
                PDF 변환하기
            </Button>
        </>
    );
};

export default PreviewButton;