import * as React from "react";

interface SignUpProps {
  name: string;
  email: string;
  password: string;
  onChangeSignUpFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignUpComponent: React.FC<SignUpProps> = ({
  name,
  email,
  password,
  onChangeSignUpFields
}) => {
  return (
    <section className="container">
      <p>안녕</p>
      <div >
        <input
          type="text"
          name="email"
          value={email}
          onChange={onChangeSignUpFields}
          placeholder="이름을 입력해주세요"
        />
        <input
          type="text"
          name="password"
          value={password}
          onChange={onChangeSignUpFields}
          placeholder="이름을 입력해주세요"
        />
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChangeSignUpFields}
          placeholder="이름을 입력해주세요"
        />
      </div>
    </section>
  );
}

export default SignUpComponent;
