import * as React from 'react';
import { useEffect } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom';
{/* hooks */ }
import useSignUpChangeField from '../../../../hooks/pages/loginPage/signUp/useSignUpChangeField';
{/* components */ }
import SignUpComponent from "../../../../components/pages/loginPage/signUp/SignUp"
import useSignUpRequest from '../../../../hooks/pages/loginPage/signUp/useSignUpRequest';

const SignUpContainer: React.FC<RouteComponentProps> = ({ history }) => {

  const { name, email, password, onChangeSignUpFields } = useSignUpChangeField();
  const { onSignUpRequest, success } = useSignUpRequest();

  useEffect(() => {
    if (success === true) {
      history.push('/');
    }
  }, [success]);

  return (
    <SignUpComponent
      name={name}
      email={email}
      password={password}
      onChangeSignUpFields={onChangeSignUpFields}
      onSignUpRequest={onSignUpRequest} />
  )
}

export default withRouter(SignUpContainer);