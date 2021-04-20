{/* reducer에서 오는 변경된 데이터를 전달 받아 컴포넌트로 리턴 */}
import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Login from '../../../../components/pages/loginPage/logIn/Login';
import useLoginChangeField from '../../../../hooks/pages/loginPage/logIn/useLoginChangeField';
import useLoginRequest from '../../../../hooks/pages/loginPage/logIn/useLoginRequest';

const LoginPageContainer: React.FC<RouteComponentProps> = ({ history }) => {
    const {
        email,
        password,
        onChangeLoginFields
    } = useLoginChangeField();
    const { onLoginRequest, isLoginSuccessed } = useLoginRequest();

    useEffect(() => {
        if(isLoginSuccessed === true){
            history.push('/');
        }
    }, [isLoginSuccessed]);

    return (
        <Login
            email = { email }
            password = { password }
            onChangeLoginFields = { onChangeLoginFields }
            onLoginRequest = { onLoginRequest }
        />
    )
}

export default withRouter(LoginPageContainer);