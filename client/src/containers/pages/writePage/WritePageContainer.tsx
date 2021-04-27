import React from 'react';
import { useSelector } from 'react-redux';
import useLoadPreviewValues from 'src/hooks/pages/writePage/useLoadPreviewValues';
{/* import components */}
import WritePage from '../../../components/pages/writePage/WritePage';
{/* import hooks */}
import usePreviewModal from '../../../hooks/pages/writePage/usePreviewModal';
{/* import reduce state */}
import { ApplicantState } from '../../../modules/writeChange/applicant/types';
import { DocumentState } from '../../../modules/writeChange/applyDocument/types';
import { ApplyInfoState } from '../../../modules/writeChange/applyInfo/types';


const WritePageContainer: React.FC = () => {
    {/* selector로 가져온 값을 values에 저장 */}
    const values = useLoadPreviewValues(); 
    const { preview, onPreviewModal } = usePreviewModal();
    
    return (
        <WritePage
            values={values}
            preview={preview}
            onPreviewModal={onPreviewModal}
        />
    );
}


export default WritePageContainer;