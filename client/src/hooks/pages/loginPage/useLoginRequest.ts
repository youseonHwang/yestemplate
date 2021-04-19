import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../modules/postLogin/actions';
import { State } from '../../../modules/postLogin/types';

function useLoginRequest(): {
    isLoginSuccessed: boolean | null;
    onLoginRequest: (
        email: string,
        password: string,
  ) => void;
} {
    const dispatch = useDispatch();

    const { isLoginSuccessed } = useSelector(
        ({ loginRequestField }: {loginRequestField: State}) => ({
            isLoginSuccessed: loginRequestField.isLoginSuccessed,
        }),
    );

    const onLoginRequest = (
        email: string, 
        password: string,
    ): void => {
        dispatch(actions.loginPostRequest({ email, password }));
    };
    return { onLoginRequest, isLoginSuccessed };
}

export default useLoginRequest;