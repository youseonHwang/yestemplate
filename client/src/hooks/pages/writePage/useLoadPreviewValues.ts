import { useSelector } from 'react-redux';

{/* changeField types import */}
import { ApplicantState } from '../../../modules/writeChange/applicant/types';
import { DocumentState } from '../../../modules/writeChange/applyDocument/types';
import { ApplyInfoState } from '../../../modules/writeChange/applyInfo/types';

{/* 프리뷰 커스텀 훅 */}
function useLoadPreviewValues(): {
        belong: string;
        position: string;
        name: string;
        fileName: Array<string | null>;
        etc: string;
        applyContent: string;
        resName: string;
        resJumin: string;
        relation: string;
        applyAmount: number;
} {
    const {
        belong,
        position,
        name,
        fileName,
        etc,
        applyContent,
        resName,
        resJumin,
        relation,
        applyAmount,
    } = useSelector(
        ({
            applicantField,
            documentField,
            applyInfoField,
        }: {
            applicantField: ApplicantState;
            documentField: DocumentState;
            applyInfoField: ApplyInfoState;
        }) => ({
            belong: applicantField.applicant.belong,
            position: applicantField.applicant.position,
            name: applicantField.applicant.name,
            fileName: documentField.applyDocument.fileName,
            etc: documentField.applyDocument.etc,
            applyContent: applyInfoField.applyInfo.applyContent,
            resName: applyInfoField.applyInfo.respondent.resName,
            resJumin: applyInfoField.applyInfo.respondent.resJumin,
            relation: applyInfoField.applyInfo.respondent.relation,
            applyAmount: applyInfoField.applyInfo.applyAmount,
        }),
    );

    const values = {
        belong,
        position,
        name,
        fileName,
        etc,
        applyContent,
        resName,
        resJumin,
        relation,
        applyAmount,
    };
    return values;
}

export default useLoadPreviewValues;