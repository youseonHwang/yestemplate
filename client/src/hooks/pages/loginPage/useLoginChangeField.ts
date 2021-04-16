import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../modules/login/actions';
import { State } from '../../../modules/login/types';

function useLoginChangeField(): {
    email: string;
    password: string;
    onChangeLoginFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
} {
    const dispatch  = useDispatch();

    {/* 리덕스 스토어에 있는 사용자 email, password 상태 조회 */}
    const { email, password } = useSelector(
        ({ loginField }: { loginField: State }) => ({
            email: loginField.login.email,
            password: loginField.login.password,
        }),
    );

    const onChangeLoginField = <T>(location: T, value: T): void => {
        dispatch(
            actions.changeLoginField({
                key: location,
                value: value,
            }),
        );
    };

    const onChangeLoginFields = (
        event: React.ChangeEvent<HTMLInputElement>,
      ): void => {
        const { name, value } = event.target;
        onChangeLoginField<string>( name, value );
      };

    return {
        email,
        password,
        onChangeLoginFields,
    };
}

export default useLoginChangeField;