
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as actions from '../../../modules/postWrite/actions';
import { ApplicantState } from '../../../modules/writeChange/applicant/types';
import { DocumentState } from '../../../modules/writeChange/applyDocument/types';
import { ApplyInfoState } from '../../../modules/writeChange/applyInfo/types';

function useSaveTemplateField() {
  const dispatch = useDispatch();
  const history = useHistory();

  {/* 현재 redux에 저장되어있는 템플릿 정보를 가져옴 */ }
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
    userFrom: '607e3447f3990d3b44758e15',
    applicant: {
      belong: belong,
      position: position,
      name: name,
    },
    applyInfo: {
      applyContent: applyContent,
      respondent: {
        resName: resName,
        resJumin: resJumin,
        relation: relation,
      },
      applyAmount: applyAmount,
    },
    applyDocument: {
      fileName: fileName,
      etc: etc
    },
  }

  const saveRequest = (): void => {
    console.log('useSaveTemplate Hook의 saveRequest안으로 들어옴')
    dispatch(actions.saveTemplateFieldRequest({ values }));
    history.push('/mypage');
  };

  return {
    saveRequest,
  };
}
export default useSaveTemplateField;