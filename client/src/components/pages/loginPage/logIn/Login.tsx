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
    <section className="container">
        <div >
          <form>
            <input
              type="text"
              name="email"
              value={email}
              onChange={onChangeLoginFields}
              placeholder="이메일을 입력해주세요"
            />
            <input
              type="text"
              name="password"
              value={password}
              onChange={onChangeLoginFields}
              placeholder="비밀번호를 입력해주세요"
            />
          </form>
          <button
            onClick={() => {
              onLoginRequest( email, password );
            }}
          >
            login
            </button>
        </div>
      </section>
  );
};
export default Login;