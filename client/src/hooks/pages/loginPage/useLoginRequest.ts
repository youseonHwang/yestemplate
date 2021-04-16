import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../modules/postLogin/actions';
import { State } from '../../../modules/postLogin/types';

function useLoginRequest(): {
    isMailSucssessed: boolean | null;
    onLoginRequest: (
        email: string,
        password: string,
  ) => void;
} {
    const dispatch = useDispatch();

    const { isMailSucssessed } = useSelector(
        ({ loginRequestField }: {loginRequestField: State}) => ({
            isMailSucssessed: loginRequestField.isMailSucssessed,
        }),
    );

    const onLoginRequest = (
        email: string, 
        password: string,
    ): void => {
        dispatch(actions.loginPostRequest({ email, password }));
    };
    return { onLoginRequest, isMailSucssessed };
}

export default useLoginRequest;