import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../modules/writeChange/applicant/actions';
import { ApplicantState } from '../../../modules/writeChange/applicant/types';

function useChangeApplicantField() : {
    belong: string;
    position: string;
    name: string;
    etc: string;
    //컨테이너, 컴포넌트에 적용될 것들
    onChangeFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
} {
    const dispatch = useDispatch();
    
    const onChangeField = <T>(location: T, value: T): void => {
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
        etc,
    } = useSelector(
        ({ applicantField }: {applicantField: ApplicantState}) => ({
            belong: applicantField.applicant.belong,
            position: applicantField.applicant.position,
            name: applicantField.applicant.name,
            etc: applicantField.applicant.etc,
        }),
    );

    const onChangeFields = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        onChangeField<string>(name, value);
    };

    return {
        belong,
        position,
        name,
        etc,
        onChangeFields,
    };
}

export default useChangeApplicantField;