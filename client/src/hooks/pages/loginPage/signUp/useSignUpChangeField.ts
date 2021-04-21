import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../../modules/signUp/changeField/actions';
import { State } from '../../../../modules/signUp/changeField/types';

function useSignUpChangeField(): {
  name: string;
  email: string;
  password: string;
  onChangeSignUpFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
} {
  const dispatch = useDispatch();

  const onChangeSignUpField = <T>(location: T, value: T): void => {
    dispatch(
      actions.signUpFieldChange({
        key: location,
        value: value,
      }),
    );
  };

  const { name, email, password } = useSelector(
    ({ signUpChangeField }: { signUpChangeField: State }) => ({
      name: signUpChangeField.userInfo.name,
      email: signUpChangeField.userInfo.email,
      password: signUpChangeField.userInfo.password,
    })
  );

  const onChangeSignUpFields = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    onChangeSignUpField<string>(name, value);
  };

  return {
    name,
    email,
    password,
    onChangeSignUpFields,
  };
}

export default useSignUpChangeField;