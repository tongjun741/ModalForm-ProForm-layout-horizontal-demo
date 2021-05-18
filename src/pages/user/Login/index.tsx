import ProForm, { ProFormText, ModalForm } from '@ant-design/pro-form';
import React from 'react';

const Login: React.FC = () => {
  return (
    <>
      <ModalForm visible={true}>
        <ProForm layout="horizontal">
          <ProFormText name="instanceName" label={'用户名'} />
        </ProForm>
      </ModalForm>
      <ProForm layout="horizontal">
        <ProFormText name="instanceName" label={'用户名2'} />
      </ProForm>
    </>
  );
};

export default Login;
