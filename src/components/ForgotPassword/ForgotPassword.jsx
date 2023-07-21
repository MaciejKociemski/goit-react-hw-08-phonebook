import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 10%;
  display: flex;
  justify-content: center;
`;

const FormForgot = styled(Form)`
  width: 400px;
`;

const TitleForgot = styled.h2`
  text-align: center;
  margin-bottom: 15px;
  color: #2e2d2dbc;
`;

export default function ForgotPassword() {
  const [form] = Form.useForm();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const onFinish = values => {
    
    setIsEmailSent(true);
  };

  return (
    <section>
      <Container>
        {isEmailSent ? (
          <div>
            <TitleForgot>Email sent!</TitleForgot>
            <p>
              Please check your email for instructions to reset your password.
            </p>
          </div>
        ) : (
          <FormForgot
            form={form}
            name="forgot_password"
            onFinish={onFinish}
            initialValues={{
              remember: true,
            }}
          >
            <TitleForgot>Forgot Password</TitleForgot>
            <FormForgot.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your Email!',
                  type: 'email',
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Email" />
            </FormForgot.Item>

            <FormForgot.Item>
              <Button type="primary" htmlType="submit">
                Reset Password
              </Button>
            </FormForgot.Item>
          </FormForgot>
        )}
      </Container>
    </section>
  );
}
