import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../modules/login/actions';
import { State } from '../../../modules/login/types';

function useLoginRequest(): {
    isMailSucssessed: boolean | null;
    onAskRequest: (
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