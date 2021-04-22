import * as React from "react";

import WritePage from '../../../components/pages/writePage/WritePage';

{/* 타입 임포트 */}
import ApplicantState from '../../../modules/writeChange/applicant/types';
import DocumentState from '../../../modules/writeChange/applyDocument/types';
import ApplyInfoState from '../../../modules/writeChange/applyInfo/types';

const WritePageContainer: React.FC = () => {

    const values = {

        fileName,
    }

    return (
        <>
            <WritePage
                values={values}
            />    
        </>
    );
}


export default WritePageContainer;