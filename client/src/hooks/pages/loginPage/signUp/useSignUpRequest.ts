import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../../modules/signUp/requestSignUp/actions';
import { State } from '../../../../modules/signUp/requestSignUp/types';

function useSignUpRequest(): {
  success: boolean | null;
  onSignUpRequest: (
    name: string,
    email: string,
    password: string,
  ) => void;
} {
  const dispatch = useDispatch();

  const { success } = useSelector(
    ({ requestSignUp }: { requestSignUp: State }) => ({
      success: requestSignUp.success,
    }),
  );

  const onSignUpRequest = (
    name: string,
    email: string,
    password: string,
  ): void => {
    dispatch(actions.signUpRequest({ name, email, password }));
  };
  return { onSignUpRequest, success };
}
export default useSignUpRequest;