import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../../modules/signUp/actions';
import { State } from '../../../../modules/signUp/types';

function useSignUpChangeField(): {
  name: string;
  email: string;
  password: string;
  onChangeSignUpFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
} {
  const dispatch = useDispatch();
  const { name, email, password } = useSelector(
    ({ signUpRequestField }: { signUpRequestField: State }) => ({
      name: signUpRequestField.userInfo.name,
      email: signUpRequestField.userInfo.email,
      password: signUpRequestField.userInfo.password,
    })
  );

  const onChangeSignUpField = <T>(location: T, value: T): void => {
    dispatch(
      actions.signUpFieldChange({
        key: location,
        value: value,
      }),
    );
  };

  const onChangeSignUpFields = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    onChangeSignUpField<string>(name, value);
  };

  return {
    name,
    email,
    password,
    onChangeSignUpFields
  };
}

export default useSignUpChangeField;