import * as React from "react";
import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */


interface SignUpProps {

  name: string;
  email: string;
  password: string;
  onChangeSignUpFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSignUpRequest: (
    name: string,
    email: string,
    password: string,
  ) => void;
}
const SignUpComponent: React.FC<SignUpProps> = ({
  name,
  email,
  password,
  onChangeSignUpFields,
  onSignUpRequest,
}) => {
  return (
    <>
      <Form {...layout} name="nest-messages" validateMessages={validateMessages}>
        <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item name={['user', 'website']} label="Website">
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'introduction']} label="Introduction">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
      </Form>

      <section className="container">
        <div >
          <form>
            <input
              type="text"
              name="email"
              value={email}
              onChange={onChangeSignUpFields}
              placeholder="이메일을 입력해주세요"
            />
            <input
              type="text"
              name="password"
              value={password}
              onChange={onChangeSignUpFields}
              placeholder="비밀번호를 입력해주세요"
            />
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChangeSignUpFields}
              placeholder="이름을 입력해주세요"
            />
          </form>
          <button
            onClick={() => {
              onSignUpRequest(name, email, password);
            }}
          >
            문의하기
            </button>
        </div>
      </section>
    </>
  );
}

export default SignUpComponent;
