
import { useDispatch } from 'react-redux';
import { ApplicantInitField } from '../../../modules/writeChange/applicant/actions'
import { DocumentInitField } from '../../../modules/writeChange/applyDocument/actions'
import { InfoInitField } from '../../../modules/writeChange/applyInfo/actions'


function useInitTemplateField() {
  const dispatch = useDispatch();

  const initRequest = (): void => {
    console.log('useInitTemplateField Hook의 initRequest 들어옴')
    dispatch(ApplicantInitField({}))
    dispatch(DocumentInitField({}))
    dispatch(InfoInitField({}))
  };

  return {
    initRequest,
  };
}
export default useInitTemplateField;