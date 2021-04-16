import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

{/* hooks */ }
import useSignUpChangeField from '../../../../hooks/pages/loginPage/signUp/useSignUpChangeField';

{/* components */ }
import SignUpComponent from "../../../../components/pages/loginPage/signUp/SignUp"

const SignUpContainer: React.FC<RouteComponentProps> = ({ history }) => {
  const { name, email, password, onChangeSignUpFields } = useSignUpChangeField();

  return (
    <SignUpComponent
      name={name}
      email={email}
      password={password}
      onChangeSignUpFields={onChangeSignUpFields} />
  )
}


export default withRouter(SignUpContainer);