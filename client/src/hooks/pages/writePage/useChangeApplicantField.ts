import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../modules/writeChange/applicant/actions';
import { ApplicantState } from '../../../modules/writeChange/applicant/types';

function useChangeApplicantField(): {
  belong: string;
  position: string;
  name: string;
  //컨테이너, 컴포넌트에 적용될 것들
  onChangeApplicantFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
} {
  const dispatch = useDispatch();

  const onChangeApplicantField = <T>(location: T, value: T): void => {
    dispatch(
      actions.ApplicantChangeField({
        key: location, value: value
      }),
    );
  };

  const {
    belong,
    position,
    name,
  } = useSelector(
    ({ applicantField }: { applicantField: ApplicantState }) => ({
      belong: applicantField.applicant.belong,
      position: applicantField.applicant.position,
      name: applicantField.applicant.name,
    }),
  );

  const onChangeApplicantFields = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    onChangeApplicantField<string>(name, value);
  };

  return {
    belong,
    position,
    name,
    onChangeApplicantFields,
  };
}

export default useChangeApplicantField;