{/* reducer에서 오는 변경된 데이터를 전달 받아 컴포넌트로 리턴 */}
import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Login from '../../../components/pages/loginPage/logIn/Login';
import useLoginChangeField from '../../../hooks/pages/loginPage/useLoginChangeField';
import useLoginRequest from '../../../hooks/pages/loginPage/useLoginRequest';

const LoginPageContainer: React.FC<RouteComponentProps> = ({ history }) => {
    const {
        email,
        password,
        onChangeLoginFields,
    } = useLoginChangeField();

    const { onLoginRequest, isMailSucssessed } = useLoginRequest();

    useEffect(() => {
        if(isMailSucssessed === true){
            history.push('/');
        }
    }, [isMailSucssessed]);
    return (
        <>
            <Login
                email = { email }
                password = { password }
                onChangeLoginFields = { onChangeLoginFields }
                onLoginRequest = { onLoginRequest }
            />
        </>
    );
} ;

export default withRouter(LoginPageContainer);