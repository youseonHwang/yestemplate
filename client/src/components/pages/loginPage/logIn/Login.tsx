{/* 로그인 폼 구현 */}
import * as React from "react";

interface LoginProps {
  email: string;
  password: string;
  onChangeLoginFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLoginRequest: (
    email: string, 
    password: string,
  ) => void;
}

const Login: React.FC<LoginProps> = ({
  email,
  password,
  onChangeLoginFields,
  onLoginRequest,
}) => {
  return (
    <div>
      <form>
        <div>
          <label> email </label>
          <input 
            type="text"
            name="email"
            value= {email}
            onChange= {onChangeLoginFields}
            placeholder="email"
          />
        </div>
      </form>
      <button onClick={() => {
        onLoginRequest(email, password);
      }}
      > 로그인 
      </button>
    </div>
  );
};
export default Login;